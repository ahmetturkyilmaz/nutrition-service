import {BaseEntity} from "./BaseEntity";
import mongoose from 'mongoose';

const UserNutriticsInfo = new mongoose.Schema({
  _id: String,
  height: Number,
  weight: Number,
  fatPercentage: Number,
  musclePercentage: Number

})