const { application } = require('express')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const PORT = process.env.PORT || 5000
const schema = require('./schema.js')

app.use('./graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))