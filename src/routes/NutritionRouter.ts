import {userNutritionInfoController} from "../controller/UserNutritionInfoController";
import protect from "../middleware/auth";

const routerExpress = require('express')
const nutritionRouter = routerExpress.Router();

nutritionRouter.route("/user-nutrition/:id")
  .get(protect, userNutritionInfoController.getById)
  .patch(protect, userNutritionInfoController.patchUpdate)
  .delete(protect, userNutritionInfoController.deleteUserNutritionInfoById);

nutritionRouter.route("/user-nutrition/:date")
  .get(protect, userNutritionInfoController.getByDate)

nutritionRouter.route("/user-nutrition")
  .get(protect, userNutritionInfoController.getAll)
  .post(protect, userNutritionInfoController.postUserNutritionInfo)
export default nutritionRouter;
