import asyncHandler from "../middleware/async";
import {GlobalRequest} from "../types/GlobalRequest";
import {NextFunction, Response} from "express";
import {nutritionCalculationService} from "../service/NutritionCalculationService";

class NutritionCalculationController {
    getMonthly = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await nutritionCalculationService.getTableInfoMonthly(req.user, req.params.date, req.params.fieldType);
        res.status(200).json(userInfo);
    })
    getTwoMonths = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await nutritionCalculationService.getTableInfoMonthly(req.user, req.params.date, req.params.fieldType);
        res.status(200).json(userInfo);
    })
    getThreeMonths = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await nutritionCalculationService.getTableInfoMonthly(req.user, req.params.date, req.params.fieldType);
        res.status(200).json(userInfo);
    })
    getWeekly = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await nutritionCalculationService.getTableInfoMonthly(req.user, req.params.date, req.params.fieldType);
        res.status(200).json(userInfo);
    })

}

export const nutritionCalculationController = new NutritionCalculationController();
