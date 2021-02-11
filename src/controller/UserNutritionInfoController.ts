import {Request, Response} from "express";

const UserInfo = require('../db/model/UserNutriticsInfo')


class UserNutritionInfoController {
    postUserNutritionInfo(req: Request, res: Response){
        console.log(req)
        res.json({hello: "world"})
    };

    getById(req: Request, res: Response) {
        console.log(req)
        res.json({hello: "world"})
    }

}


export const userNutritionInfoController = new UserNutritionInfoController();
