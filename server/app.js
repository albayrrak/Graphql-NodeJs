const { ApolloServer } = require('apollo-server')
const { resolvers } = require('./Resolvers/resolvers.js')
const { typeDefs } = require('./Types/typeDefs.js')

const app = new ApolloServer({ typeDefs, resolvers })

app.listen(5000, () => console.log("server  up"))