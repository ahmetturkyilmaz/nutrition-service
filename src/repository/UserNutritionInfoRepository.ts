import {ObjectId} from "mongoose";
import UserNutriticsInfo from "../db/model/UserNutritionInfo";
import UserNutritionInfo from "../db/model/UserNutritionInfo";
import UserNutritionInfoNotFoundException from "../exception/UserNutritionInfoNotFoundException";

class UserNutritionInfoRepository {
  getById = async (_id: ObjectId | String | Number | Buffer) => {
    let userInfo = await UserNutriticsInfo.findById(_id);
    if (!userInfo) {
      throw new UserNutritionInfoNotFoundException(`User Nutritics Not found with id : ${_id}`)
    }
    return userInfo;
  }
  getAllMonthly = async (user, date, monthNumb, fieldType) => {
    const month = date.getMonth();
    const previousMonth: Date = date.setMonth(month - monthNumb);
    let userInfos = await UserNutritionInfo.find({}, {
      createdAt: {
        $gte: previousMonth,
        $lte: date
      }
    });
    return userInfos;
  }

  getByDate = async (user: string, date: Date) => {
    let userInfo = await UserNutriticsInfo.find({createdBy: user}, {
      createdAt: {
        $lte: date
      }
    })
    return userInfo
  }

  post = async (userInfo) => {
    userInfo.createdAt = new Date().getDate();
    return await UserNutriticsInfo.create(userInfo);
  }
  patch = async (id: string, info: any) => {
    return UserNutriticsInfo.findOneAndUpdate({id: id}, info, {upsert: false});
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
