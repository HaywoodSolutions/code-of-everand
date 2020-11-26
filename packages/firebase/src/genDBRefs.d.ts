import { Room, RoomSprite } from "@code-of-everand/types-map";
import admin from ".";
import { FirestoreCollection } from "./utils";
declare type DBRefs = {
    rooms: FirestoreCollection<Room>;
    roomSprites: FirestoreCollection<RoomSprite>;
};
declare const genDBRefs: (db: admin.firestore.Firestore) => Readonly<DBRefs>;
export default genDBRefs;
