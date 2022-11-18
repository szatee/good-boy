export const formatPhone = (number: string) => {
  if (number && number.length > 3) {
    return `+${number}`;
  }
  return '';
};
