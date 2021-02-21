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
}

const UserNutriticsInfoSchema = new Schema<IUserNutriticsInfo>({
    id: {
        type: String
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
    createdAt: {
        type: Number,
        required: true
    },
    createdBy: {
        type: String,
        //  required: true,
       // unique: true
    }

})
UserNutriticsInfoSchema.pre<IUserNutriticsInfo>("save", function (next) {
    this.createdAt = Date.now();
    next();
})

export default mongoose.model<IUserNutriticsInfo>('userNutriticsInfo', UserNutriticsInfoSchema);
