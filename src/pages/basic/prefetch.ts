async function sleep(t: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export default async function () {
  await sleep(1000);
  return {
    desc: 'Data from PIA Worker',
  };
}
