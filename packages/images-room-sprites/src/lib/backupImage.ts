import * as fs from 'fs-extra';

export default async (id: string): Promise<void> => {
  await fs.copySync(`./images/${id}.png`, `./oldImages/${id}.png`);
  await fs.removeSync(`./images/${id}.png`);
};