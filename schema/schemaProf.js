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

var professors = [
  {
    id: "1",
    name: "Pedor",
    age: 30,
    active: true,
    language: "Java",
    date: "2019"
  },
  {
    id: "2",
    name: "Pablo",
    age: 30,
    active: true,
    language: "NODEjs",
    date: "2019"
  },
  {
    id: "3",
    name: "Juan",
    age: 30,
    active: true,
    language: "React",
    date: "2019"
  },
  {
    id: "4",
    name: "Ramon",
    age: 30,
    active: true,
    language: "Angular",
    date: "2019"
  }
];

const ProfessorType = new GraphQLObjectType({
  name: "Professor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    date: { type: GraphQLString }
    // professor: {
    //   type: ProfessorType,
    //   resolve(parent, args) {
    //     //return professors.find(professor=> professor.id === parent.professorId)
    //     return Professor.findById(parent.professorId);
    //   }
    // }
  })
});

const ProfQuery = new GraphQLObjectType({
  name: "ProfQueryType",
  fields: {
    professor: {
      type: ProfessorType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return professors.find(professor => professor.name === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: ProfQuery
});
