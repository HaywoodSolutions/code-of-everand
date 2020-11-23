import RoomSprites from '@code-of-everand/data-room-sprites';
import { RoomSprite } from '@code-of-everand/types-map';
import handleImage from './lib/handleImage';

(async () => {
  await Promise.all(Object.entries(RoomSprites).map(([id, roomSprite]: [string, RoomSprite]) => {
    return handleImage(id, roomSprite.depth, roomSprite.height);
  }))
})();