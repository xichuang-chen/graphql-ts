const Koa = require("koa");
const resolvers = require("./resolvers");
const typeDefs = require("./scema");
const { ApolloServer } = require("apollo-server-koa");

const server = new ApolloServer(
        { typeDefs, resolvers}
    );
const app = new Koa();

//applyMiddleWare将graphql服务器连接koa框架
server.applyMiddleware( {app} );

app.listen( { port: 9080}, () =>
    console.log(`? Server ready at http://localhost:9080${server.graphqlPath}`)
);