import asyncHandler from "../middleware/async";
import {GlobalRequest} from "../types/GlobalRequest";
import {NextFunction, Response} from "express";

class NutritionCalculationController {
    private nutritionCalculationService: any;
    get = asyncHandler(async (req: GlobalRequest, res: Response, next: NextFunction) => {
        const userInfo = await this.nutritionCalculationService.getByUsername(req.user);
        res.status(200).json(userInfo);
    })
}