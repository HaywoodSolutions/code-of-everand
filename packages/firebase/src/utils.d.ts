import admin from ".";
export declare class FirestoreDocument<T extends Record<string | number, any>> {
    readonly ref: admin.firestore.DocumentReference<T>;
    readonly collectionName: string;
    readonly docName: string;
    constructor(db: admin.firestore.Firestore, collectionName: string, docName: string, options?: {
        store: (something: T) => FirebaseFirestore.DocumentData;
        extract: (something: FirebaseFirestore.DocumentData) => T;
    });
    set(data: T): Promise<admin.firestore.WriteResult>;
    update(data: Partial<T>, preconditions?: FirebaseFirestore.Precondition): Promise<admin.firestore.WriteResult>;
    batchSet(batch: admin.firestore.WriteBatch, data: T): admin.firestore.WriteBatch;
    batchUpdate(batch: admin.firestore.WriteBatch, data: Partial<T>): admin.firestore.WriteBatch;
    get(): Promise<admin.firestore.DocumentSnapshot<T>>;
    delete(): Promise<admin.firestore.WriteResult>;
}
declare type QueryConditionOperator = "<" | "<=" | "==" | ">" | ">=" | "!=" | "array-contains" | "array-contains-any" | "in" | "not-in";
declare type QueryCondition = [string, QueryConditionOperator, any];
export declare class FirestoreCollection<T extends Record<string | number, any>> {
    private db;
    private options?;
    readonly ref: admin.firestore.CollectionReference<T>;
    readonly collectionName: string;
    constructor(db: admin.firestore.Firestore, collectionName: string, options?: {
        store: (something: T) => FirebaseFirestore.DocumentData;
        extract: (something: FirebaseFirestore.DocumentData) => T;
    } | undefined);
    where(field: string, condition: QueryConditionOperator, value: any): FirestoreCollectionQuery<T>;
    document(docName: string): FirestoreDocument<T>;
    getIds(): Promise<string[]>;
    get(): Promise<admin.firestore.QuerySnapshot<T>>;
}
declare class FirestoreCollectionQuery<T extends Record<string | number, any>> {
    private db;
    readonly ref: admin.firestore.Query<T>;
    readonly collectionName: string;
    private conditions;
    constructor(db: admin.firestore.Firestore, collectionName: string, conditions: QueryCondition[]);
    where(field: string, condition: QueryConditionOperator, value: any): FirestoreCollectionQuery<T>;
    get(): Promise<admin.firestore.QuerySnapshot<T>>;
}
export {};
