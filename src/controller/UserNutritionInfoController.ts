import {NextFunction, Request, Response} from "express";
import asyncHandler from "../middleware/async";
import {userNutritionInfoService} from "../service/UserNutritionInfoService";

class UserNutritionInfoController {

    getById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userInfo = userNutritionInfoService.findInfoById(req.body.id);
        res.status(200).json(userInfo);
    });

    postUserNutritionInfo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        const userInfo = await userNutritionInfoService.createNewNutriticsInfo(req.body);
        res.status(201).json(userInfo);
    });

    updateUserNutritionInfo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        const userInfo = await userNutritionInfoService.patchUpdateInfo(req.body.id, req.body);
        res.status(204).json(userInfo);
    });

    deleteUserNutritionInfoById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        await userNutritionInfoService.deleteInfoById(req.body.id);
        res.status(204).json({
            message:"User Nutrition Info deleted"
        });

    });
}


export const userNutritionInfoController = new UserNutritionInfoController();
