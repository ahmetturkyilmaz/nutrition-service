import {NextFunction, Request, Response} from "express";
import asyncHandler from "../middleware/async";
import UserNutriticsInfo from "../db/model/UserNutriticsInfo";

class UserNutritionInfoController {

    getById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        res.json({hello: "world"})

    });

    postUserNutritionInfo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        res.json({hello: "world"})

    });

    putUserNutritionInfo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        res.json({hello: "world"})

    });

    deleteUserNutritionInfoById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        res.json({hello: "world"})

    });
}


export const userNutritionInfoController = new UserNutritionInfoController();
