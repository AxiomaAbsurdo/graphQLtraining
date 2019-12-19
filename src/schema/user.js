export const types = `
  type User {
    id: Int!
    email: String!
    password: String!
    date: String!
  }

  input UserInput{
    id: Int!
    email: String!
    password: String!
    date: String!
  }
`;

export const queries = `
  getUser(id: Int!): User,
  allUser(key: Int!, limit: Int!): [User!]!
`;

export const mutations = `
  createUser(name: String!): User!
  updateUser(user: [UserInput]!): User!
  removeUser(id: Int!): Boolean
`;
