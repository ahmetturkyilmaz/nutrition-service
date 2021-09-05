import asyncHandler from "../middleware/async";
import {GlobalRequest} from "../types/GlobalRequest";
import {NextFunction, Response} from "express";
import {nutritionCalculationService} from "../service/NutritionCalculationService";

class NutritionCalculationController {
    get = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await nutritionCalculationService.getTableInfo(req.user,req.params.fieldType);
        res.status(200).json(userInfo);
    })
}

export const nutritionCalculationController = new NutritionCalculationController();
