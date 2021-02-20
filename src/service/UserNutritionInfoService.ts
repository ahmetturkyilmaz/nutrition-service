import UserNutriticsInfo from "../db/model/UserNutriticsInfo";
import {ObjectId} from "mongoose";
import UserNutriticsInfoNotFoundException from "../exception/UserNutriticsInfoNotFoundException";
import {userNutriticsInfoRepository} from "../repository/UserNutriticsInfoRepository";

class UserNutritionInfoService {

    findInfoById = async (_id: ObjectId | String | Number | Buffer) => {
        return await userNutriticsInfoRepository.getById(_id);
    }
    createNewNutriticsInfo = async (userInfo) => {
        return await userNutriticsInfoRepository.post(userInfo);
    }
    patchUpdateInfo = async (_id: ObjectId | String | Number | Buffer, userInfo) => {
        return await userNutriticsInfoRepository.patch(_id, userInfo)
    }
    deleteInfoById = async (_id: ObjectId | String | Number | Buffer) => {
        return await userNutriticsInfoRepository.delete(_id);
    }


}

export const userNutritionInfoService = new UserNutritionInfoService();
