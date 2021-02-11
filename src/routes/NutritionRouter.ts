import {userNutritionInfoController} from "../controller/UserNutritionInfoController";

const routerExpress = require('express')
const nutritionRouter = routerExpress.Router();

nutritionRouter.get("/:id",userNutritionInfoController.getById)

nutritionRouter.get("/:id", (req, res) => {

})
module.exports = nutritionRouter;