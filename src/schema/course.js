export const types = `
  type Course {
    id: Int!
    name: String!
    language: String!
    date: String!
  }

  input CourseInput{
    id: Int!
    name: String!
    language: String!
    date: String!
  }
`;

export const queries = `
  getCourse(id: Int!): Course,
  allCourses: [Course!]!
`;

export const mutations = `
  createCourse(course: [CourseInput]): Course!
`;
