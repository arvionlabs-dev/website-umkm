export const useRecommendations = () => {
  const clickHistory = useState<string[]>('umkm_click_history', () => []);
  const isClient = typeof window !== 'undefined';

  // Load click history from localStorage
  const loadClickHistory = () => {
    if (isClient) {
      const stored = localStorage.getItem('umkm_click_history');
      if (stored) {
        try {
          clickHistory.value = JSON.parse(stored);
        } catch (e) {
          console.error('Failed to parse click history from localStorage', e);
          clickHistory.value = [];
        }
      }
    }
  };

  // Save click history to localStorage
  const saveClickHistory = () => {
    if (isClient) {
      localStorage.setItem('umkm_click_history', JSON.stringify(clickHistory.value));
    }
  };

  // Track UMKM click
  const trackClick = (slug: string) => {
    // Add to beginning of array (most recent first)
    clickHistory.value = [slug, ...clickHistory.value.filter(s => s !== slug)];
    
    // Keep only last 20 clicks
    if (clickHistory.value.length > 20) {
      clickHistory.value = clickHistory.value.slice(0, 20);
    }
    
    saveClickHistory();
  };

  // Get recommendations based on click history
  const getRecommendations = (allUmkm: Record<string, Umkm>, currentSlug?: string, limit: number = 6): Umkm[] => {
    if (clickHistory.value.length === 0) {
      // If no history, return random UMKMs
      const umkmArray = Object.values(allUmkm).filter(umkm => umkm.slug !== currentSlug);
      return shuffleArray(umkmArray).slice(0, limit);
    }

    // Get categories from clicked UMKMs
    const clickedCategories: string[] = [];
    clickHistory.value.forEach(slug => {
      const umkm = allUmkm[slug];
      if (umkm && umkm.kategori) {
        clickedCategories.push(...umkm.kategori);
      }
    });

    // Count category frequency
    const categoryCount: Record<string, number> = {};
    clickedCategories.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });

    // Score each UMKM based on category matches
    const umkmScores: Array<{ umkm: Umkm; score: number }> = [];
    
    Object.values(allUmkm).forEach(umkm => {
      if (umkm.slug === currentSlug) return; // Exclude current UMKM
      
      let score = 0;
      if (umkm.kategori) {
        umkm.kategori.forEach(cat => {
          score += categoryCount[cat] || 0;
        });
      }
      
      // Boost score if UMKM was clicked before
      if (clickHistory.value.includes(umkm.slug || '')) {
        score += 5;
      }
      
      umkmScores.push({ umkm, score });
    });

    // Sort by score (descending) and add randomness for variety
    umkmScores.sort((a, b) => {
      if (b.score === a.score) {
        return Math.random() - 0.5; // Random order for same scores
      }
      return b.score - a.score;
    });

    return umkmScores.slice(0, limit).map(item => item.umkm);
  };

  // Utility function to shuffle array
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i] as T;
      shuffled[i] = shuffled[j] as T;
      shuffled[j] = temp;
    }
    return shuffled;
  };

  // Initialize on first use
  if (clickHistory.value.length === 0 && isClient) {
    loadClickHistory();
  }

  return {
    clickHistory: readonly(clickHistory),
    trackClick,
    getRecommendations,
    loadClickHistory
  };
};
