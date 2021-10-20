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
      type: GraphQLInt,
    },
    lauch_success: {
      type: GraphQLBoolean,
    },
    rocket: {
      type: RocketType,
    },
  }),
});

// Rocket Type

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: {
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
          .get('https://api.spacexdata.com/v4/launches')
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
