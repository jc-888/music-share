import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

/*
A production app would you this, however, I iterated independently 
due to the front end being made with previous projects
*/

// app.use(express.static('public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

mongoose.connect("mongodb://localhost:27017/musicshare",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.once('open', () => {
  console.log('connected to mongoose database: musicshare')
})

app.listen({ port: 3001 }, () =>
  console.log(`GraphQL Server: http://localhost:3001${server.graphqlPath}`)
);