export const updateObject = (oldObject, updatedIngredients) => {
  return {
    ...oldObject,
    ...updatedIngredients
  };
};
