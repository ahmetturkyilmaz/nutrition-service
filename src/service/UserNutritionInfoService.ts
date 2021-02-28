import {ObjectId} from "mongoose";
import {userNutritionInfoRepository} from "../repository/UserNutritionInfoRepository";
import {IUserNutritionInfo} from "../db/model/UserNutritionInfo";

class UserNutritionInfoService {

    getAllByUsername = async (user: string) => {
        let userInfo = await userNutritionInfoRepository.getAllByUsername(user);
        userInfo.sort((a: IUserNutritionInfo, b: IUserNutritionInfo) => {
            return a.createdAt.getTime() - b.createdAt.getTime()
        })
        return userInfo;
    }

    findUserInfoById = async (_id: ObjectId | String | Number | Buffer) => {
        return await userNutritionInfoRepository.getById(_id);
    }
    createNewUserInfo = async (userInfo, doCalculateFatPercentage: string) => {
        if (doCalculateFatPercentage === 'true') {
            userInfo.fatPercentage = this.calculateFatPercentage(userInfo);
        }
        return await userNutritionInfoRepository.post(userInfo);
    }
    patchUpdateUserInfo = async (_id: ObjectId | String | Number | Buffer, userInfo, doCalculateFatPercentage: string) => {
        if (doCalculateFatPercentage === 'true') {
            userInfo.fatPercentage = this.calculateFatPercentage(userInfo);
        }
        return await userNutritionInfoRepository.patch(_id, userInfo)
    }
    deleteUserInfoById = async (_id: ObjectId | String | Number | Buffer) => {
        return await userNutritionInfoRepository.delete(_id);
    }
    calculateFatPercentage = (userInfo) => {
        let bodyFat;
        let waist = userInfo.waist;
        let neck = userInfo.neck;
        let height = userInfo.height;
        if (!waist || !neck || !height) {
            throw new FieldIsEmptyError("waist: " + waist + ", neck: " + neck + ", height: " + height + "on user id: " + userInfo.id);
        }
        if (userInfo.sex === 'male') {
            if (userInfo.unit === 'METRIC') {
                bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
            } else {
                bodyFat = 86.01 * (Math.log10(waist - neck) - 70.41 * Math.log10(height)) + 36.76;
            }
        }
        if (userInfo.sex === 'female') {
            let hip = userInfo.hip;
            if (!hip) {
                throw new FieldIsEmptyError("hip" + hip + "on user id: " + userInfo.id);
            }
            if (userInfo.unit === 'METRIC') {
                bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
            } else {
                bodyFat = 163.205 * (Math.log10(waist + hip - neck) - 97.684 * Math.log10(height)) - 78.387;
            }
        }
        return bodyFat
    }

}

export const userNutritionInfoService = new UserNutritionInfoService();
