import * as admin from 'firebase-admin';
import genDBRefs from './genDBRefs';
import * as firebaseAccountCredentials from "./serviceAccountKey.json";
var serviceAccount = firebaseAccountCredentials;
var cred = admin.credential.cert(serviceAccount);
admin.initializeApp({
    credential: cred,
    storageBucket: "code-of-everand-game.appspot.com"
});
export default admin;
export var bucket = admin.storage().bucket();
var db = admin.firestore();
export var DB = genDBRefs(db);
export var genDB = genDBRefs;
//# sourceMappingURL=index.js.map