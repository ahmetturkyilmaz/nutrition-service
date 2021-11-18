import mongoose, {Document, Schema} from 'mongoose';
import {Unit} from "../../types/Unit";
import {Sex} from "../../types/Sex";

export interface IUserNutritionInfo extends Document {
    id: string,
    sex: Sex,
    createdAt: Date,
    dateOfInfo: Date,
    createdBy: string,
    height: number,
    weight: number,
    fatPercentage: number,
    musclePercentage: number,
    neck: number,
    shoulder: number,
    arm: number,
    forearm: number,
    chest: number,
    bust: number,
    waist: number,
    hip: number,
    thigh: number,
    calf: number,
    unit: Unit
}

// @ts-ignore
const UserNutritionInfoSchema = new Schema<IUserNutritionInfo>({
    id: {
        type: String
    },
    sex: {
        type: String,
        enum: Sex,
        default: Sex.MALE,
        required: true,
    },
    height: {
        type: Number,
        required: true
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
    },
    arm: {
        type: Number
    },
    neck: {
        type: Number
    },
    shoulder: {
        type: Number
    },
    forearm: {
        type: Number
    },
    chest: {
        type: Number
    },
    bust: {
        type: Number
    },
    waist: {
        type: Number
    },
    hip: {
        type: Number
    },
    thigh: {
        type: Number
    },

    calf: {
        type: Number
    },
    unit: {
        type: String,
        enum: Unit,
        default: Unit.METRIC
    },
    createdAt: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        required: true,
    },
    dateOfInfo: {
        type: Date,
        required: true
    },


})

export default mongoose.model<IUserNutritionInfo>('userNutritionInfo', UserNutritionInfoSchema);
