import { Music } from "./models/music";

export const resolvers = {
  Query: {
    getSongs: () => Music.find()
  },
  Mutation: {
    createSong:  async (_, { 
      song_name,
      artist,
      videoid,
      contributor,
      likes,
      dislikes
     }) => {
      const newSong = new Music({ 
        song_name,
        artist,
        videoid,
        contributor,
        likes,
        dislikes
      });
      await newSong.save();
      return newSong;
    }
  }
};