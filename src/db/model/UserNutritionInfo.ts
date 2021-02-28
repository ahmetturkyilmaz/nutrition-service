import {BaseEntity} from "./BaseEntity";
import mongoose, {Schema, Document, Model} from 'mongoose';

export interface IUserNutritionInfo extends Document {
    id: string,
    sex:string,
    height: number,
    weight: number,
    fatPercentage: number,
    musclePercentage: number,
    createdAt: Date,
    createdBy: string
    waist: number,
    hip: number,
    neck: number
    unit: string
}

const UserNutritionInfoSchema = new Schema<IUserNutritionInfo>({
    id: {
        type: String
    },
    sex: {
        type: String,
        required: true,
        enum: ['MALE', 'FEMALE']
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
    waist: {
        type: Number
    },
    hip: {
        type: Number
    },
    neck: {
        type: Number
    },
    createdAt: {
        type: Number,
        required: true
    },
    createdBy: {
        type: Date,
        //  required: true,
        // unique: true
    },
    unit: {
        enum: ['METRIC', 'IMPERIAL'],
        default: 'METRIC'
    }

})

export default mongoose.model<IUserNutritionInfo>('userNutritionInfo', UserNutritionInfoSchema);
