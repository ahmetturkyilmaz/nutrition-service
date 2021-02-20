import {userNutritionInfoController} from "../controller/UserNutritionInfoController";
import protect from "../middleware/auth";

const routerExpress = require('express')
const nutritionRouter = routerExpress.Router();

nutritionRouter.route("/:id")
    .get(protect, userNutritionInfoController.getById)
    .delete(protect, userNutritionInfoController.deleteUserNutritionInfoById)
    .put(protect, userNutritionInfoController.updateUserNutritionInfo);

nutritionRouter.route("/")
    .post(protect, userNutritionInfoController.postUserNutritionInfo);

module.exports = nutritionRouter;
