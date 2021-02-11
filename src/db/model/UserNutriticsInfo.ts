import {BaseEntity} from "./BaseEntity";
import mongoose from 'mongoose';

const UserNutriticsInfo = new mongoose.Schema({
    _id: {
        type: String
    },
    height: {
        type: Number,
        required:true
    },
    weight: {
        type: Number,
        required: true
    },
    fatPercentage: {
        type: Number,

    },
    musclePercentage: {
        type: Number
    }

})
