export const types = `
  type Professor {
    id: Int!
    name: String!
    age: Int!
    active: Boolean!
    date: String!
  }

  input ProfessorInput{
    id: Int!
    name: String!
    age: Int!
    active: Boolean!
    date: String!
  }
`;

export const queries = `
  getProfessor(id: Int!): Professor,
  allProfessors(key: Int!, limit: Int!): [Professor!]!
`;

export const mutations = `
  createProfessor(professor: [ProfessorInput]): [Professor]
  updateProfessor(professor: [ProfessorInput]): [Professor]
  removeProfessor(id: Int!): Boolean
`;
