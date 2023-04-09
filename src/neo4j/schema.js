// const { makeExecutableSchema } =  require('graphql-tools');
// const { Neo4jGraphQL } = require("@neo4j/graphql");
// const { gql } = require("apollo-server-express");
const neo4j = require("neo4j-driver");
const { OGM } = require('@neo4j/graphql-ogm')


// we’ll define our resolver functions in the next section
// const resolvers = './resolvers'


// const typeDefs =gql`
//     type User {
//         id: ID
//         firstname: String
//         lastname: String
//         password: String
//         emailId: String
//         iiita: Boolean
//     }

//     type Room {
//         id: ID
//         name: String
//         iiita: Boolean
//     }

//     type Message {
//         id: ID
//         createdAt: DateTime
//     }

//     query getMeAllUsers() {
//         users() {
//             id
//             firstname
//             emailId
//         }
//     }

//     mutation CreateUser($firstname: String!, $lastname: String!, $emailId: String!) {
//         createUsers(input: [{ firstname: $firstname, lastname: $lastname, emailId: $emailId, }]) {
//             users {
//                 firstname
//                 lastname
//                 emailId
//             }
//         }
//     }
// `;

const typeDefs =`
    type User {
        id: String
        name: String
        username: String
        password: String
        emailId: String
        token: String
        iiita: Boolean
        rooms: [Room!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
    type Room {
        id: ID
        name: String
        iiita: Boolean
        members: [User!]! @relationship(type: "ACTED_IN", direction: IN)
    }
    type Message {
        id: ID
        createdAt: DateTime
    }
    `;
    // query getMeAllUsers {
    //     users {
    //         id
    //         firstname
    //         emailId
    //     }
    // }
    // mutation CreateUser($firstname: String!, $lastname: String!, $emailId: String!) {
    //     createUsers(input: [{ firstname: $firstname, lastname: $lastname, emailId: $emailId, }]) {
    //         users {
    //             firstname
    //             lastname
    //             emailId
    //         }
    //     }
    // }
    
    // follows: [User!]! @relationship(type: "ACTED_IN", direction: OUT)
    //         followers: [User!]! @relationship(type: "ACTED_IN", direction: IN)


// const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

// async function giveMeMySchema(){
//     const schema = await neoSchema.getSchema()
//     return schema
// }

const driver = neo4j.driver(
    process.env.NEO4J_CONNECTION_URI,
    neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

const ogm = new OGM({ typeDefs, driver });

module.exports = ogm