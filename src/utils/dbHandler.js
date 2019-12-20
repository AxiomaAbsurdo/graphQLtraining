export default (db, action, object) => {
    //Check if received objet is an Array
    // function checkIsArray(object) {

    //     let strObject = JSON.stringify(object)
    //     strObject = strObject.replace('[', ' ')
    //     strObject = strObject.replace(']', ' ')

    //     object = JSON.parse(strObject)
    //     const isArray = Object.prototype.toString.call(object) === '[object Array]';
    //     return isArray
    // }

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
        // if ( checkIsArray(object) == false ) {
        //     return db
        //         .collection('documents')
        //         .insertOne(object)
        //         .then(result => {
        //             const [object] = result.ops;
        //             console.log('>>>>> INSERT SINGLE RECORD');
        //             return object;
        //         });
        // } else if ( checkIsArray(object) == true ) {
        return db
            .collection('documents')
            .insertMany(object)
            .then(result => {
                //const [object] = result.ops
                console.log('>>>>> insert successful');
                return result.ops;
            });
        //}
    }

    // UPDATE

    // DELETE
};
