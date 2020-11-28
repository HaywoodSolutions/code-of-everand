import admin from ".";
import { FirestoreCollection } from "./utils";

import { Room, RoomSprite } from "@code-of-everand/types-map";
import { User } from "@code-of-everand/types-user";

type DBRefs = {
  rooms: FirestoreCollection<Room>,
  roomSprites: FirestoreCollection<RoomSprite>,
  users: FirestoreCollection<User>
};

const genDBRefs = (db: admin.firestore.Firestore): Readonly<DBRefs> => {
  return {
    rooms: new FirestoreCollection<Room>(db, 'rooms'),
    roomSprites: new FirestoreCollection<RoomSprite>(db, 'roomSprites'),
    users: new FirestoreCollection<User>(db, 'users')
  };
}

export default genDBRefs;