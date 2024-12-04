export const generateRandomChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  return chars[Math.floor(Math.random() * chars.length)];
};

export const scrambleText = (text: string) => {
  return text
    .split('')
    .map(char => char === ' ' ? ' ' : generateRandomChar())
    .join('');
};