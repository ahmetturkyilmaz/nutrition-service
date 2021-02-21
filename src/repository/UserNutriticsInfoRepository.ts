import {ObjectId} from "mongoose";
import UserNutriticsInfo from "../db/model/UserNutriticsInfo";
import UserNutriticsInfoNotFoundException from "../exception/UserNutriticsInfoNotFoundException";

class UserNutriticsInfoRepository {
    getById = async (_id: ObjectId | String | Number | Buffer) => {
        let userInfo = await UserNutriticsInfo.findById(_id);
        if (!userInfo) {
            throw new UserNutriticsInfoNotFoundException(`User Nutritics Not found with id : ${_id}`)
        }
        return userInfo;
    }
    post = async (userInfo) => {
        userInfo.createdAt = new Date().getDate();
        return await UserNutriticsInfo.create(userInfo);
    }
    patch = async (_id: ObjectId | String | Number | Buffer, userInfo) => {
        await this.existsById(_id);
        return UserNutriticsInfo.findOneAndUpdate(_id, userInfo);
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

export const userNutriticsInfoRepository = new UserNutriticsInfoRepository();
