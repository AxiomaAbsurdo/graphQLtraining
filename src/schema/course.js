export const types = `
  type Course {
    id: Int!
    name: String!
    language: String!
    date: String!
  }
`;

export const queries =  `
  getCourse(id: Int!): Course,
  allCourse(key: Int!, limit: Int!): [Course!]!
`;

export const mutations = `
  createCourse(name: String!): Course!
`;
