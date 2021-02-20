import UserNutriticsInfo from "../db/model/UserNutriticsInfo";
import {ObjectId} from "mongoose";
import UserNutriticsInfoNotFoundException from "../exception/UserNutriticsInfoNotFoundException";

class UserNutritionInfoService {

    getById = async (_id: ObjectId | String | Number | Buffer) => {
        let userInfo = await UserNutriticsInfo.findById(_id);
        if (!userInfo) {
            throw new UserNutriticsInfoNotFoundException(`User Nutritics Not found with id : ${_id}`)
        }
        return userInfo;
    }
    post = async (userInfo) => {
        let storedUserInfo = await UserNutriticsInfo.create(userInfo)
        return storedUserInfo;
    }
    patch = async (_id: ObjectId | String | Number | Buffer, userInfo) => {
        await this.existsById(_id);
        let newUserInfo = await UserNutriticsInfo.findOneAndUpdate(_id, userInfo)
        return newUserInfo;
    }
    delete = async (_id: ObjectId | String | Number | Buffer) => {
        await this.existsById(_id);
        await UserNutriticsInfo.findByIdAndDelete(_id);
    }

    existsById = async (_id: ObjectId | String | Number | Buffer) => {
        const isInfoExists = await UserNutriticsInfo.exists({_id: _id})
        if (!isInfoExists) {
            throw new UserNutriticsInfoNotFoundException(`User Nutritics Not found with id : ${_id}`)
        }
    }
}

export const userNutritionInfoService = new UserNutritionInfoService();
