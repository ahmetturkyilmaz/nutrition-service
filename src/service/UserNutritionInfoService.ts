import {ObjectId} from "mongoose";
import {userNutriticsInfoRepository} from "../repository/UserNutriticsInfoRepository";

class UserNutritionInfoService {

    findUserInfoById = async (_id: ObjectId | String | Number | Buffer) => {
        return await userNutriticsInfoRepository.getById(_id);
    }
    createNewUserInfo = async (userInfo) => {
        return await userNutriticsInfoRepository.post(userInfo);
    }
    patchUpdateUserInfo = async (_id: ObjectId | String | Number | Buffer, userInfo) => {
        return await userNutriticsInfoRepository.patch(_id, userInfo)
    }
    deleteUserInfoById = async (_id: ObjectId | String | Number | Buffer) => {
        return await userNutriticsInfoRepository.delete(_id);
    }


}

export const userNutritionInfoService = new UserNutritionInfoService();
