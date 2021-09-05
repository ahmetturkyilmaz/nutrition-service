import {ObjectId} from "mongoose";
import UserNutriticsInfo from "../db/model/UserNutritionInfo";
import UserNutritionInfoNotFoundException from "../exception/UserNutritionInfoNotFoundException";

class UserNutritionInfoRepository {
    getById = async (_id: ObjectId | String | Number | Buffer) => {
        let userInfo = await UserNutriticsInfo.findById(_id);
        if (!userInfo) {
            throw new UserNutritionInfoNotFoundException(`User Nutritics Not found with id : ${_id}`)
        }
        return userInfo;
    }
    post = async (userInfo) => {
        userInfo.createdAt = new Date().getDate();
        return await UserNutriticsInfo.create(userInfo);
    }
    patch = async (userInfo) => {
        await this.existsById(userInfo._id);
        return UserNutriticsInfo.findOneAndUpdate(userInfo._id, userInfo);
    }
    delete = async (_id: ObjectId | String | Number | Buffer) => {
        await this.existsById(_id);
        await UserNutriticsInfo.findByIdAndDelete(_id);
    }

    existsById = async (_id: ObjectId | String | Number | Buffer) => {
        const isInfoExists = await UserNutriticsInfo.exists({_id: _id})
        if (!isInfoExists) {
            throw new UserNutritionInfoNotFoundException(`User Nutritics Not found with id : ${_id}`)
        }
    }

    getAllByUsername = async (user: string) => {

        return UserNutriticsInfo.find({createdBy: user});
    }
}

export const userNutritionInfoRepository = new UserNutritionInfoRepository();
