import { FirestoreCollection } from "./utils";
var genDBRefs = function (db) {
    return {
        rooms: new FirestoreCollection(db, 'rooms'),
        roomSprites: new FirestoreCollection(db, 'roomSprites'),
        users: new FirestoreCollection(db, 'users')
    };
};
export default genDBRefs;
//# sourceMappingURL=genDBRefs.js.map