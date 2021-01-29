import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
    type Query {
        users: [User!]!
    }

    type User {
        name: String
    }
`

const resolvers = {
    Query: {
        users(parents, args, context) {
            return [
                { name: 'Nextjs' },
                { name: 'SWR' },
                { name: 'Apolo-server' },
            ]
        }
    }
}


const apolloServer = new ApolloServer({typeDefs, resolvers})

export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({ path: '/api/graphql'})