import admin from ".";

export class FirestoreDocument<T extends Record<string|number, any>> {
  readonly ref: admin.firestore.DocumentReference<T>;
  // readonly set: (data: T) => Promise<admin.firestore.WriteResult>;
  // readonly update: (data: Partial<T>) => Promise<admin.firestore.WriteResult>;
  readonly collectionName: string;
  readonly docName: string;

  constructor(db: admin.firestore.Firestore, collectionName: string, docName: string, options?: {
    store: (something: T) => FirebaseFirestore.DocumentData,
    extract: (something: FirebaseFirestore.DocumentData) => T
  }) {
    this.collectionName = collectionName;
    this.docName = docName;
    this.ref = db.collection(collectionName).doc(docName) as admin.firestore.DocumentReference<T>;
    
    // this.set = this.ref.set;
    // this.update = this.ref.update;
  }

  set(data: T): Promise<admin.firestore.WriteResult> {
    return this.ref.set(data);
  }

  update(data: Partial<T>, preconditions?: FirebaseFirestore.Precondition): Promise<admin.firestore.WriteResult> {
    return this.ref.update(data, preconditions);
  }

  batchSet(batch: admin.firestore.WriteBatch, data: T): admin.firestore.WriteBatch {
    return batch.set(this.ref, data);
  }

  batchUpdate(batch: admin.firestore.WriteBatch, data: Partial<T>): admin.firestore.WriteBatch {
    return batch.update(this.ref, data);
  }
  
  get(): Promise<admin.firestore.DocumentSnapshot<T>> {
    return this.ref.get();
  }

  delete(): Promise<admin.firestore.WriteResult> {
    return this.ref.delete();
  }
}

type QueryConditionOperator = "<"|"<="|"=="|">"|">="|"!="|"array-contains"|"array-contains-any"|"in"|"not-in"
type QueryCondition = [string, QueryConditionOperator, any];

export class FirestoreCollection<T extends Record<string|number, any>> {
  readonly ref: admin.firestore.CollectionReference<T>;
  readonly collectionName: string;

  constructor(private db: admin.firestore.Firestore, collectionName: string, private options?: {
    store: (something: T) => FirebaseFirestore.DocumentData,
    extract: (something: FirebaseFirestore.DocumentData) => T
  }) {
    this.collectionName = collectionName;
    this.ref = db.collection(collectionName) as admin.firestore.CollectionReference<T>;
  }

  where(field: string, condition: QueryConditionOperator, value: any): FirestoreCollectionQuery<T> {
    return new FirestoreCollectionQuery(this.db, this.collectionName, [[field, condition, value]])
  }

  document(docName: string): FirestoreDocument<T> {
    return new FirestoreDocument<T>(this.db, this.collectionName, docName, this.options);
  }

  getIds(): Promise<string[]> {
    return this.get().then(colSnap => {
      let ids: string[] = [];

      colSnap.forEach(snap => {
        ids.push(snap.id);
      })

      return ids;
    })
  }
  
  get(): Promise<admin.firestore.QuerySnapshot<T>> {
    return this.ref.get();
  }
}

class FirestoreCollectionQuery<T extends Record<string|number, any>> {
  readonly ref: admin.firestore.Query<T>;
  readonly collectionName: string;
  private conditions: QueryCondition[];

  constructor(private db: admin.firestore.Firestore, collectionName: string, conditions: QueryCondition[]) {
    this.collectionName = collectionName;
    this.ref = db.collection(collectionName) as admin.firestore.CollectionReference<T>;
    for (const cond of conditions) {
      this.ref = this.ref.where(cond[0], cond[1], cond[2]);
    }
    this.conditions = conditions;
  }

  where(field: string, condition: QueryConditionOperator, value: any): FirestoreCollectionQuery<T> {
    return new FirestoreCollectionQuery(this.db, this.collectionName, [...this.conditions, [field, condition, value]])
  }

  get(): Promise<admin.firestore.QuerySnapshot<T>> {
    return this.ref.get();
  }
}