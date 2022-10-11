export const PairsToObject = (key, value) => {
  if (key === '') {
    return;
  }
  const params = { [key]: value };
  return params;
};
