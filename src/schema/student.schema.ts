import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
});