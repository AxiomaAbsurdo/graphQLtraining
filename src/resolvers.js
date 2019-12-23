import dbHandler from './utils/dbHandler';

export default {
    Query: {
        getCourse: (parent, args, context) => {
            let { id } = args;
            let { db } = context;

            return dbHandler(db, 'query', id);
        },
        allCourses: (parent, args, context) => {
            let { db } = context;

            return dbHandler(db, 'query');
        },
        getProfessor: (parent, args, context) => {
            let { id } = args;
            let { db } = context;

            return dbHandler(db, 'query', id);
        },
        allProfessors: (parent, args, context) => {
            let { db } = context

            return dbHandler(db, 'query');
        },
    },
    Mutation: {
        createCourse: (parent, args, context) => {
            const { course } = args;
            const { db } = context;
            const { name, id, language, date } = course;

            return dbHandler(db, 'save', course);
        },
        updateCourse: (parent, args, context) => {
            const { course } = args;
            const { name, id, language, date } = course;
            const { db } = context;

            return dbHandler(db, 'update', course);
        },
        createProfessor: (parent, args, context) => {
            const { professor } = args;
            const { db } = context;
            const { id, name, age, active, date } = professor;

            return dbHandler(db, 'save', professor);
        },
    },
};
