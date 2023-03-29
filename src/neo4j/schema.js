// const { makeExecutableSchema } =  require('graphql-tools');
const { Neo4jGraphQL } = require("@neo4j/graphql");
const { gql } = require("apollo-server-express");
const neo4j = require("neo4j-driver");


// we’ll define our resolver functions in the next section
// const resolvers = './resolvers'


const typeDefs =gql`
    type Movie {
        title: String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor {
        name: String
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
`;


// Simple Movie schema
// const typeDefs = `
// type Movie {
//   movieId: String!
//   title: String
//   year: Int
//   plot: String
//   poster: String
//   imdbRating: Float
//   genres: [String]
//   similar: [Movie]
// }
// type Query {
//   movies(subString: String!, limit: Int!): [Movie]
// }`

const driver = neo4j.driver(
    process.env.NEO4J_CONNECTION_URI,
    neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

// async function giveMeMySchema(){
//     const schema = await neoSchema.getSchema()
//     return schema
// }

module.exports = neoSchema