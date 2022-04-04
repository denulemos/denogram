const UserController = require('../controllers/user');

const resolvers = {
    Query: {
        // User Query
        getUser: () => {
            console.log("Getting User");
            return null;
        }
    },

    Mutation: {
        // User Mutation
        register: async (_, {input}) => UserController.register(input),
        login: async (_, {input}) => UserController.login(input)
    }
};

module.exports = resolvers;