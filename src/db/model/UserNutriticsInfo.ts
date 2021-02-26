import {BaseEntity} from "./BaseEntity";
import mongoose, {Schema, Document, Model} from 'mongoose';

export interface IUserNutriticsInfo extends Document {
    id: string,
    height: number,
    weight: number,
    fatPercentage: number,
    musclePercentage: number,
    createdAt: number,
    createdBy: number
    waist: number,
    hip: number,
    neck: number
    unit: string
}

const UserNutriticsInfoSchema = new Schema<IUserNutriticsInfo>({
    id: {
        type: String
    },
    sex: {
        type: String,
        required: true,
        enum: ['user', 'publisher']
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
    doCalculateFatPercentage: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Number,
        required: true
    },
    createdBy: {
        type: String,
        //  required: true,
        // unique: true
    },
    unit: {
        enum: ['METRIC', 'IMPERIAL'],
        default: 'METRIC'
    }

})

export default mongoose.model<IUserNutriticsInfo>('userNutriticsInfo', UserNutriticsInfoSchema);
