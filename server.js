const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  enum Gender {
    MALE
    FEMALE
    NONE
  }

  type User {
    name: String!
    gender: Gender!
    tags: [String!]!
  }

  type Query {
    "查询所有用户列表"
    users: [User!]!
    "根据 name 查询对应的用户信息"
    user(name: String!): User
  }
`;

const resolvers = {
    Query: {
        users: () => [{ name: "Jack", gender: "MALE", tags: ["Alibaba"]}, {name: "Cxc", gender: "MALE", tags: ["rich", "healthy"]}],
        user: (parent, args, context, info) => {
            console.log("args: ", args);
            console.log("parent: ", parent);
            console.log("context: ", context);
            console.log("info: ", info);
            const { name } = args;
            // find user by name...
            return { name, gender:"MALE", tags: [name] }
        },
    },
};


const server = new ApolloServer ({
    typeDefs,
    resolvers,
});

server.listen().then(( { url } ) => {
    console.log(` server ready at ${url} `);
    console.log(resolvers);
});



