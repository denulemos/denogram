const mongoose = require("mongoose");
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');

require("dotenv").config({path: ".env"});


mongoose.connect(process.env.BBDD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, _) => {
    if (err) {
        console.log("There was an error connecting to the database");
    }
    else {
        console.log("Connected to Mongo");
        server();
    }
});

const server = () => {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    });

    serverApollo.listen().then(({url}) => {
        console.log(`Server ready at ${url}`)
    });
}