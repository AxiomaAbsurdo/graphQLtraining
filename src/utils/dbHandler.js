export default (db, action, object, model) => {

    console.log('VEO OBJET', object)
    console.log('VEO ACTION', action)
    console.log('VEO MODEL', model)

    let dbCollection = '';

    //SET THE COLLECTION TO USE FOR EACH ENTITY OPERATION
    switch (model.fieldName) {
        //COURSE OPERATIONS
        case 'getCourse':
        case 'allCourses':
        case 'createCourse':
        case 'updateCourse':
        case 'removeCourse':
            dbCollection = 'documents.courses';
            break;
        //PROFESSOR OPERATIONS
        case 'getProfessor':
        case 'allProfessors':
        case 'createProfessor':
        case 'updateProfessor':
        case 'removeProfessor':
            dbCollection = 'documents.professors';
            break;
    }

    //QUERY
    if (action == 'query') {
        if (object && Array.isArray(object) == false) {
            const col = db.collection(dbCollection);
            return col.findOne({ id: object }).then(result => {
                return result;
            });
        } else {
            const col = db.collection(dbCollection);
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
            .collection(dbCollection)
            .insertMany(object)
            .then(result => {
                console.log('>>>>> insert successful');
                return result.ops;
            });
    }

    // UPDATE
    if (action == 'update') {
        if (dbCollection == 'updateCourse') {
            const filter = { id: object[0].id };
            const update = {
                $set: {
                    name: object[0].name,
                    language: object[0].language,
                    date: object[0].date,
                },
            };
            return db
                .collection(dbCollection)
                .findOneAndUpdate(filter, update, {
                    returnOriginal: false,
                })
                .then(result => {
                    console.log('>>>>> update successful');
                    return result.value;
                });
        }
    } else if (dbCollection == 'updateProfessor') {
        const filter = { id: object[0].id };
        const update = {
            $set: {
                name: object[0].name,
                age: object[0].age,
                active: object[0].active,
                date: object[0].date,
            },
        };
        return db
            .collection(dbCollection)
            .findOneAndUpdate(filter, update, {
                returnOriginal: false,
            })
            .then(result => {
                console.log('>>>>> update successful');
                return result.value;
            });
    }

    // DELETE
    if (action == 'remove') {
        console.log('AAAAAAAAAAAAA ',object.id);
        if (model.fieldName == 'removeCourse') {
            const filter = object.id;
            return db
                .collection(dbCollection)
                .findOneAndDelete({"id": filter})
                .then(result => {
                    //console.log(result);
                    console.log('>>>>> remove successful');
                    return result.deletedCount;
                });
        }
    }
};
