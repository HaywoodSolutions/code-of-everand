import * as admin from 'firebase-admin';
import genDBRefs from './genDBRefs';
import * as firebaseAccountCredentials from "./serviceAccountKey.json";

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount
const cred = admin.credential.cert(serviceAccount);

admin.initializeApp({
  credential: cred,
  storageBucket: "code-of-everand-game.appspot.com"
});

export default admin;
export const bucket = admin.storage().bucket();

export const db = admin.firestore();

export const DB = genDBRefs(db);