async function sleep(t: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export default async function () {
  await sleep(1000);
  return {
    desc: '2024.8.13 17:54',
  };
}
