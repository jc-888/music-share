import mongoose from "mongoose";

const musicSchema = mongoose.Schema({
  song_name: String,
  artist: String,
  videoid: String,
  contributor: String,
  likes: Number,
  dislikes: Number
})

export const Music = mongoose.model(
  "Music", 
  musicSchema
);