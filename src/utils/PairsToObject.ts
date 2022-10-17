export const PairsToObject = (array, keyName, valueName) => {
  const newObject = array.map((el) => {
    return { [keyName]: valueName };
  });

  return newObject;
};
