import { Room } from "@code-of-everand/types-map";
import admin from ".";
import { FirestoreCollection } from "./utils";

type DBRefs = {
  rooms: FirestoreCollection<Room>
};

const genDBRefs = (db: admin.firestore.Firestore): Readonly<DBRefs> => {
  return {
    rooms: new FirestoreCollection<Room>(db, 'rooms')
  };
}

export default genDBRefs;