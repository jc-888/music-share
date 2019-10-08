import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Music {
    id: ID,
    song_name: String,
    artist: String,
    videoid: String,
    contributor: String,
    likes: Int,
    dislikes: Int
  }

  type Query {
    getSongs: [Music]
  }
  
  type Mutation {
    createSong(
      song_name: String!,
      artist: String!,
      videoid: String!,
      contributor: String!,
      likes: Int!,
      dislikes: Int!
    ): Music
  }
`;