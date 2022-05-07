const UserController = require('../controllers/user');

const resolvers = {
    Query: {
        // User Query
        getUser: (_, {id, username}) => {
               return UserController.getUser(id, username);
        }
    },

    Mutation: {
        // User Mutation
        register: async (_, {input}) => UserController.register(input),
        login: async (_, {input}) => UserController.login(input)
    }
};

module.exports = resolvers;