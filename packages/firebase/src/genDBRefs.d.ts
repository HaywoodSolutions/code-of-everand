import admin from ".";
import { FirestoreCollection } from "./utils";
import { Room, RoomSprite } from "@code-of-everand/types-map";
import { User } from "@code-of-everand/types-user";
declare type DBRefs = {
    rooms: FirestoreCollection<Room>;
    roomSprites: FirestoreCollection<RoomSprite>;
    users: FirestoreCollection<User>;
};
declare const genDBRefs: (db: admin.firestore.Firestore) => Readonly<DBRefs>;
export default genDBRefs;
