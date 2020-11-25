import { Room, RoomSprite } from "@code-of-everand/types-map";
import admin from ".";
import { FirestoreCollection } from "./utils";

type DBRefs = {
  rooms: FirestoreCollection<Room>,
  roomSprites: FirestoreCollection<RoomSprite>
};

const genDBRefs = (db: admin.firestore.Firestore): Readonly<DBRefs> => {
  return {
    rooms: new FirestoreCollection<Room>(db, 'rooms'),
    roomSprites: new FirestoreCollection<RoomSprite>(db, 'roomSprites')
  };
}

export default genDBRefs;