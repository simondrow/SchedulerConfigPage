async function sleep(t: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export const title = async () => {
  await sleep(100);
  return 'PIA NSR Demo';
};

export const desc = async () => {
  await sleep(1000);
  return {
    text: 'Native Side Rendering',
  };
};
