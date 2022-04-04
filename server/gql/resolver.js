const resolvers = {
    Query: {
        // User Query
        getUser: () => {
            console.log("Getting User");
            return null;
        }
    }
};

module.exports = resolvers;