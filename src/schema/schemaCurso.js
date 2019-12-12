const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} = graphql;

var courses = [
  { id: "1", name: "Patron de diseño Java", language: "Java", date: "2019" },
  { id: "2", name: "Curso Basico NodeJS", language: "NODEjs", date: "2019" },
  { id: "3", name: "React Zero to Hero", language: "React", date: "2019" },
  { id: "4", name: "Observables in Angular", language: "Angular", date: "2019" }
];

const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
    date: { type: GraphQLString }
  })
});

const CursoQuery = new GraphQLObjectType({
  name: "CursoQuery",
  fields: {
    course: {
      type: CourseType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return courses.find(curso => curso.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: CursoQuery
});
