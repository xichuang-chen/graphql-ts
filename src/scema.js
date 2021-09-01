const {gql} = require("apollo-server-koa");

const typeDefs = gql`
    type todo {
        _id: ID!
        content: String!
        completed: Boolean!
    }
    type PersonalInfo {
        _id: String!
        name: String!
        age: Int!
    }
    type PerformInfo {
        score: Int!
        grade: String!
    }
    type StudentInfo {
        personalInfo: PersonalInfo!
        performInfo: PerformInfo!
    }
    type Query {
        todoList: [todo]!
        queryStudentInfo(id: String!): StudentInfo!
    }
`;

module.exports = typeDefs;