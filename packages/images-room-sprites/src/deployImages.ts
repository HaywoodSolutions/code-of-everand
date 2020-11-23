import RoomSprites from '@code-of-everand/data-room-sprites';
import { RoomSprite } from '@code-of-everand/types-map';
import handleScaledImage from './lib/handleScaledImage';

import * as admin from 'firebase-admin';
import * as firebaseAccountCredentials from "./serviceAccountKey.json";

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount
const cred = admin.credential.cert(serviceAccount);

admin.initializeApp({
  credential: cred,
  storageBucket: "code-of-everand-game.appspot.com"
});

const widths = [100, 75, 50, 25];

const bucket = admin.storage().bucket();

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