import * as admin from 'firebase-admin';
export default admin;
export declare const bucket: import("@google-cloud/storage/build/src/bucket").Bucket;
export declare const DB: Readonly<{
    rooms: import("./utils").FirestoreCollection<import("@code-of-everand/types-map").Room>;
    roomSprites: import("./utils").FirestoreCollection<import("@code-of-everand/types-map").RoomSprite>;
    users: import("./utils").FirestoreCollection<import("@code-of-everand/types-user").User>;
}>;
export declare const genDB: (db: FirebaseFirestore.Firestore) => Readonly<{
    rooms: import("./utils").FirestoreCollection<import("@code-of-everand/types-map").Room>;
    roomSprites: import("./utils").FirestoreCollection<import("@code-of-everand/types-map").RoomSprite>;
    users: import("./utils").FirestoreCollection<import("@code-of-everand/types-user").User>;
}>;
