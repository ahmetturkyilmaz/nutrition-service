import {BaseEntity} from "./BaseEntity";

export class UserNutriticsInfo extends BaseEntity {
  height: number;
  weight: number;
  fatPercentage: number;
  musclePercentage: number;

}