export default (ulasan: Ulasan[]) => {
  if (ulasan.length === 0) return 0;
  const total = ulasan.reduce((sum, review) => sum + (review.rating ?? 0), 0);
  const average = total / ulasan.length;
  return Math.round(average * 10) / 10;
}
