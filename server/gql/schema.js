const {gql} = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID
        name: String
        username: String
        email: String
        avatar: String
        siteWeb: String
        description: String
        password: String
        createdAt: String
    }

    type Token {
        token: String
    }

    # It has the required fields of the User type
    input UserInput {
        name: String!
        username: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    type Query {
        # User Query receives or ID or username
        getUser(id: ID, username: String): User
    }

    type Mutation {
        # User Mutation
        register(input: UserInput): User # It returns an User
        login(input: LoginInput): Token # It returns a Token
    }
`;

module.exports = typeDefs;