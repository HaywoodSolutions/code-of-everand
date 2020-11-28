import RoomSprites from '@code-of-everand/data-room-sprites';
import { RoomSprite } from '@code-of-everand/types-map';
import handleScaledImage from './lib/handleScaledImage';
import { bucket } from '@code-of-everand/firebase';

const widths = [100, 75, 50, 25];

(async () => {
  await Promise.all(Object.entries(RoomSprites).map(([id, roomSprite]: [string, RoomSprite]) => {
    return handleScaledImage(id, widths);
  }))

  await Promise.all(Object.entries(RoomSprites).map(([id, roomSprite]: [string, RoomSprite]) => {
    return Promise.all(widths.map(width => {
      return bucket.upload(`./scaledImages/${id}.${width}.png`, {
        destination: `images/roomSprites/${id}/${width}.png`,
        contentType: 'media'
      })
    })).then(() => {
      console.log(`Uploaded image ${id}`)
    });
  }))
})();