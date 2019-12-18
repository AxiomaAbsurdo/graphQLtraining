export default (db, action, object) => {
    //QUERY
    if (action == 'query') {
        if (object && Array.isArray(object) == false) {
            const col = db.collection('documents');
            return col.findOne({ id: object }).then(result => {
                return result;
            });
        } else {
            const col = db.collection('documents');

            return col
                .find()
                .toArray()
                .then(result => {
                    return result;
                });
        }
    }

    // INSERTS
    if (action == 'save') {
        if (Array.isArray(object) == false) {
            return db
                .collection('documents')
                .insertOne(object)
                .then(result => {
                    const [object] = result.ops;
                    console.log('>>>>> INSERT SINGLE RECORD');
                    return object;
                });
        } else if (Array.isArray(object) == true) {
            return db
                .collection('documents')
                .insertMany(object)
                .then(result => {
                    //const [object] = result.ops
                    console.log('>>>>> INSERT MULTIPLE RECORDS');
                    return result.ops;
                });
        }
    }

    // UPDTATE

    // DELETE
};
