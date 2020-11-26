import { FirestoreCollection } from "./utils";
var genDBRefs = function (db) {
    return {
        rooms: new FirestoreCollection(db, 'rooms'),
        roomSprites: new FirestoreCollection(db, 'roomSprites')
    };
};
export default genDBRefs;
//# sourceMappingURL=genDBRefs.js.map