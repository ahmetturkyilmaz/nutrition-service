import {NextFunction, Request, Response} from "express";
import asyncHandler from "../middleware/async";
import {userNutritionInfoService} from "../service/UserNutritionInfoService";

class UserNutritionInfoController {

    getById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userInfo = userNutritionInfoService.getById(req.body.id);
        res.status(200).json(userInfo);
    });

    postUserNutritionInfo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        const userInfo = await userNutritionInfoService.post(req.body);
        res.status(200).json(userInfo);
    });

    updateUserNutritionInfo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        const userInfo = await userNutritionInfoService.patch(req.body.id, req.body);
        res.status(200).json(userInfo);
    });

    deleteUserNutritionInfoById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        console.log(req)
        await userNutritionInfoService.delete(req.body.id);
    });
}


export const userNutritionInfoController = new UserNutritionInfoController();
