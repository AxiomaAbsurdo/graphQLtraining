import professorModel from './models/professorModel';
import courseModel from './models/courseModel';
import dbHandler from './utils/dbHandler';

const ProfModel = professorModel;
const CourseModel = courseModel;

export default {
    Query: {
        getCourse: (parent, args, context, CourseModel) => {
            const { id } = args;
            const { db } = context;

            return dbHandler(db, 'query', id, CourseModel);
        },
        allCourses: (parent, args, context, CourseModel) => {
            const { db } = context;

            return dbHandler(db, 'query', '', CourseModel);
        },
        getProfessor: (parent, args, context, ProfModel) => {
            const { id } = args;
            const { db } = context;

            return dbHandler(db, 'query', id, ProfModel);
        },
        allProfessors: (parent, args, context, ProfModel) => {
            const { db } = context;

            return dbHandler(db, 'query', '', ProfModel);
        },
    },
    Mutation: {
        createCourse: (parent, args, context, CourseModel) => {
            const { course } = args;
            const { db } = context;
            const { name, id, language, date } = course;

            return dbHandler(db, 'save', course, CourseModel);
        },
        updateCourse: (parent, args, context, CourseModel) => {
            const { course } = args;
            const { name, id, language, date } = course;
            const { db } = context;

            return dbHandler(db, 'update', course, CourseModel);
        },
        createProfessor: (parent, args, context, ProfModel) => {
            const { professor } = args;
            const { db } = context;
            const { id, name, age, active, date } = professor;

            return dbHandler(db, 'save', professor, ProfModel);
        },
        updateProfessor: (parent, args, context, ProfModel) => {
            const { professor } = args;
            const { id, name, age, active, date } = professor;
            const { db } = context;

            return dbHandler(db, 'update', professor, ProfModel);
        },
        removeCourse: (parent, args, context, CourseModel) => {
            const { id } = args;
            const { db } = context;

            return dbHandler(db, 'remove', id, CourseModel);
        },
        removeProfessor: (parent, args, context, ProfModel) => {
            const { id } = args;
            const { db } = context;

            return dbHandler(db, 'remove', id, ProfModel);
        }
    },
};
