import {userNutritionInfoController} from "../controller/UserNutritionInfoController";

const routerExpress = require('express')
const nutritionRouter = routerExpress.Router();

nutritionRouter.route("/")
    .get(userNutritionInfoController.getById);

nutritionRouter.route("/")
    .post(userNutritionInfoController.postUserNutritionInfo);

module.exports = nutritionRouter;
