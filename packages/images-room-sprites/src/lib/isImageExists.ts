import * as fs from 'fs-extra';

const isImageExists = (id: string): boolean => {
  return fs.existsSync(`./images/${id}.png`);
}

export default isImageExists;