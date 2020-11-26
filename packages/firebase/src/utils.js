import { __spreadArrays } from "tslib";
var FirestoreDocument = /** @class */ (function () {
    function FirestoreDocument(db, collectionName, docName, options) {
        this.collectionName = collectionName;
        this.docName = docName;
        this.ref = db.collection(collectionName).doc(docName);
        // this.set = this.ref.set;
        // this.update = this.ref.update;
    }
    FirestoreDocument.prototype.set = function (data) {
        return this.ref.set(data);
    };
    FirestoreDocument.prototype.update = function (data, preconditions) {
        return this.ref.update(data, preconditions);
    };
    FirestoreDocument.prototype.batchSet = function (batch, data) {
        return batch.set(this.ref, data);
    };
    FirestoreDocument.prototype.batchUpdate = function (batch, data) {
        return batch.update(this.ref, data);
    };
    FirestoreDocument.prototype.get = function () {
        return this.ref.get();
    };
    FirestoreDocument.prototype.delete = function () {
        return this.ref.delete();
    };
    return FirestoreDocument;
}());
export { FirestoreDocument };
var FirestoreCollection = /** @class */ (function () {
    function FirestoreCollection(db, collectionName, options) {
        this.db = db;
        this.options = options;
        this.collectionName = collectionName;
        this.ref = db.collection(collectionName);
    }
    FirestoreCollection.prototype.where = function (field, condition, value) {
        return new FirestoreCollectionQuery(this.db, this.collectionName, [[field, condition, value]]);
    };
    FirestoreCollection.prototype.document = function (docName) {
        return new FirestoreDocument(this.db, this.collectionName, docName, this.options);
    };
    FirestoreCollection.prototype.getIds = function () {
        return this.get().then(function (colSnap) {
            var ids = [];
            colSnap.forEach(function (snap) {
                ids.push(snap.id);
            });
            return ids;
        });
    };
    FirestoreCollection.prototype.get = function () {
        return this.ref.get();
    };
    return FirestoreCollection;
}());
export { FirestoreCollection };
var FirestoreCollectionQuery = /** @class */ (function () {
    function FirestoreCollectionQuery(db, collectionName, conditions) {
        this.db = db;
        this.collectionName = collectionName;
        this.ref = db.collection(collectionName);
        for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
            var cond = conditions_1[_i];
            this.ref = this.ref.where(cond[0], cond[1], cond[2]);
        }
        this.conditions = conditions;
    }
    FirestoreCollectionQuery.prototype.where = function (field, condition, value) {
        return new FirestoreCollectionQuery(this.db, this.collectionName, __spreadArrays(this.conditions, [[field, condition, value]]));
    };
    FirestoreCollectionQuery.prototype.get = function () {
        return this.ref.get();
    };
    return FirestoreCollectionQuery;
}());
//# sourceMappingURL=utils.js.map