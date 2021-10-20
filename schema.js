const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const axios = require("axios");
// Launch Type

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    launch_year: {
      type: GraphQLInt,
    },
    date_local: {
      type: GraphQLString,
    },
    success: {
      type: GraphQLBoolean,
    },
    rocket: {
      type: RocketType,
    },
    details: {
        type: GraphQLString
    }
  }),
});

// Rocket Type

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    rocket_name: {
      type: GraphQLString,
    },
    rocket_type: {
      type: GraphQLString,
    },
  }),
});

// Root Query

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v4/launches")
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: {
          type: GraphQLInt,
        }
      },
      resolve(parent, args) {
        return axios.get(
          `https://api.spacexdata.com/v4/launches/query/${args.flight_number}`
        )
        .then((res) => res.data);
      },
    },
    // rocket: {
    //     type: RocketType,
    //     args: {
    //         id: {
    //             GraphQLString
    //         }
    //     },
    //     resolve(parent, args) {
    //         return axios.get(
    //             `https://api.spacexdata.com/v4/rockets/?id=${args.id}`
    //       )
    //     }
    // }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
