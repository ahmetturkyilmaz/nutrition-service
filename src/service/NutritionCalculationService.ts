import {userNutritionInfoService} from "./UserNutritionInfoService";
import FieldTypeIsInvalidError from "../exception/FieldTypeIsInvalidError";


class NutritionCalculationService {


    getTableInfo = async (user: string, fieldType: string) => {
        let infos = await userNutritionInfoService.getAllByUsername(user);
        if (fieldType == null) {
            throw new FieldTypeIsInvalidError("Given Field Type is null or invalid")
        }
        let fieldList: number[];
        if (infos != null && infos.length != 0) {
            switch (fieldType) {
                case 'weight':
                    infos.forEach(info => {
                        fieldList.push(info.weight)
                    });
                    break;
                case 'height':
                    infos.forEach(info => {
                        fieldList.push(info.height)
                    });
                    break;
                case 'arm':
                    infos.forEach(info => {
                        fieldList.push(info.arm)
                    });
                    break;
                case 'forearm':
                    infos.forEach(info => {
                        fieldList.push(info.forearm)
                    });
                    break;
                case 'chest':
                    infos.forEach(info => {
                        fieldList.push(info.chest)
                    });
                    break;
                case 'bust':
                    infos.forEach(info => {
                        fieldList.push(info.bust)
                    });
                    break;
                case 'waist':
                    infos.forEach(info => {
                        fieldList.push(info.waist)
                    });
                    break;
                case 'hip':
                    infos.forEach(info => {
                        fieldList.push(info.hip)
                    });
                    break;
                case 'thigh':
                    infos.forEach(info => {
                        fieldList.push(info.thigh)
                    });
                    break;
                case 'calf':
                    infos.forEach(info => {
                        fieldList.push(info.calf)
                    });
                    break;
                case 'fatPercentage':
                    infos.forEach(info => {
                        fieldList.push(info.fatPercentage)
                    });
                    break;
                case 'musclePercentage':
                    infos.forEach(info => {
                        fieldList.push(info.musclePercentage)
                    });
                    break;
            }
        }
    }
}

export const nutritionCalculationService = new NutritionCalculationService();
