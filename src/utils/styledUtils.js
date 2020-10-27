export const remCaculator = (px) => `${px / 16}rem`;
// Function for calculating value for width
export const getWidth = (value) => {
  if (!value) return;
  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
export const getFlex = (value) => {
  if (!value) return;
  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};
