export const useFavorites = () => {
  const favorites = useState<string[]>('favorites', () => []);
  const isClient = typeof window !== 'undefined';

  // Load favorites from localStorage on mount
  const loadFavorites = () => {
    if (isClient) {
      const stored = localStorage.getItem('umkm_favorites');
      if (stored) {
        try {
          favorites.value = JSON.parse(stored);
        } catch (e) {
          console.error('Failed to parse favorites from localStorage', e);
          favorites.value = [];
        }
      }
    }
  };

  // Save favorites to localStorage
  const saveFavorites = () => {
    if (isClient) {
      localStorage.setItem('umkm_favorites', JSON.stringify(favorites.value));
    }
  };

  // Add slug to favorites
  const addFavorite = (slug: string) => {
    if (!favorites.value.includes(slug)) {
      favorites.value.push(slug);
      saveFavorites();
    }
  };

  // Remove slug from favorites
  const removeFavorite = (slug: string) => {
    const index = favorites.value.indexOf(slug);
    if (index > -1) {
      favorites.value.splice(index, 1);
      saveFavorites();
    }
  };

  // Toggle favorite status
  const toggleFavorite = (slug: string) => {
    if (isFavorite(slug)) {
      removeFavorite(slug);
    } else {
      addFavorite(slug);
    }
  };

  // Check if slug is favorited
  const isFavorite = (slug: string): boolean => {
    return favorites.value.includes(slug);
  };

  // Initialize favorites on first use
  if (favorites.value.length === 0 && isClient) {
    loadFavorites();
  }

  return {
    favorites: readonly(favorites),
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    loadFavorites
  };
};
