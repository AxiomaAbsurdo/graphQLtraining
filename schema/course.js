export const types = `
  type Book {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
    date: { type: GraphQLString }
  }
`;

export const queries = `
  getBook(id: Int!): Book
  allBooks(key: Int!, limit: Int!): [Book!]!
`;

export const mutations = `
  createBook(title: String!): Book!
  addBookAuthor(bookId: Int!, authorId: Int!, primary: Boolean!): Boolean!
`;
