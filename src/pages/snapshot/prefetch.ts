export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        info: 'Data obtained by prefetch',
      });
    }, 500);
  });
};
