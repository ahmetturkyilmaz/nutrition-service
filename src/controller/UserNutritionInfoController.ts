import {Request, Response} from "express";

class UserNutritionInfoController {

  getById(req: Request, res: Response) {
    res.json({hello: "world"})
  }

}

export const userNutritionInfoController = new UserNutritionInfoController();