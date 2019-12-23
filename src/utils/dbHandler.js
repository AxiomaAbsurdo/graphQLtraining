export default (db, action, object, model) => {

    const professorModel = model
    const courseModel = model

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
        return db
            .collection('documents')
            .insertMany(object)
            .then(result => {
                console.log('>>>>> insert successful');
                return result.ops;
            });
    }

    // UPDATE
    if (action == 'update') {
        const filter = { id: object[0].id };
        const update = {
            $set: {
                name: object[0].name,
                language: object[0].language,
                date: object[0].date,
            },
        };
        db.collection('documents')
            .findOneAndUpdate(filter, update, {
                returnOriginal: false,
            })
            .then(result => {
                console.log('>>>>> update successful');
                return result.value;
            });
    }

    // DELETE
};
