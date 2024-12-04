export const getRandomFutureDate = () => {
  const now = new Date();
  const maxDate = new Date('2030-12-31');
  const randomTimestamp = now.getTime() + Math.random() * (maxDate.getTime() - now.getTime());
  return new Date(randomTimestamp);
};