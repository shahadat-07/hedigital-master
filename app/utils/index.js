export const findMaxDescriptionLength = (features) => {
  let maxLength = 0;

  features.forEach((feature) => {
    if (feature.description.length > maxLength) {
      maxLength = feature.description.length;
    }
  });

  return maxLength;
};
export const findMaxTitleLength = (features) => {
  let maxLength = 0;

  features.forEach((feature) => {
    if (feature.title.length > maxLength) {
      maxLength = feature.title.length;
    }
  });

  return maxLength;
};
