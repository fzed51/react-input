let index = 0;
export const getId = (prefix: string) => {
  index++;
  return prefix + index.toString(36);
};
export default getId;
