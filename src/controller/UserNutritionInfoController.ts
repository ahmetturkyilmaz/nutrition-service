import {NextFunction, Response} from "express";
import asyncHandler from "../middleware/async";
import {userNutritionInfoService} from "../service/UserNutritionInfoService";
import {GlobalRequest} from "../types/GlobalRequest";

class UserNutritionInfoController {
    getAll = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await userNutritionInfoService.getAllByUsername(req.user);
        console.log(userInfo)
        res.status(200).json(userInfo);
    })
    getById = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = userNutritionInfoService.findUserInfoById(req.body.id);
        res.status(200).json(userInfo);
    });

    postUserNutritionInfo = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        console.log(req.user)

        const userInfo = await userNutritionInfoService.createNewUserInfo({
            ...req.body,
            createdBy: req.user
        }, req.params.doCalculateFatPercentage);
        res.status(201).json(userInfo);
    });

    updateUserNutritionInfo = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        console.log(req)
        const userInfo = await userNutritionInfoService.patchUpdateUserInfo(req.body);
        res.status(204).json(userInfo);
    });

    deleteUserNutritionInfoById = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        console.log(req)
        await userNutritionInfoService.deleteUserInfoById(req.body.id);
        res.status(204).json({
            message: "User Nutrition Info deleted"
        });
    });
}


export const userNutritionInfoController = new UserNutritionInfoController();
