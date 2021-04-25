import {userNutritionInfoController} from "../controller/UserNutritionInfoController";
import protect from "../middleware/auth";

const routerExpress = require('express')
const nutritionRouter = routerExpress.Router();

nutritionRouter.route("/user-nutrition/:id")
  .get(protect, userNutritionInfoController.getById)
  .delete(protect, userNutritionInfoController.deleteUserNutritionInfoById)
  .patch(protect, userNutritionInfoController.patchUpdateUserNutritionInfo);

nutritionRouter.route("/user-nutrition")
  .get(protect, userNutritionInfoController.getAll)
  .post(userNutritionInfoController.postUserNutritionInfo);

export default nutritionRouter;
