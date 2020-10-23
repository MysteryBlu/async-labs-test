import {CountryModel} from "./CountryModel"
import { SportModel } from './SportModel';

export interface AthleteModel {
  id: number;
  age: number;
  avatar: string;
  club: string;
  country: CountryModel;
  isCelebrity: boolean;
  name: string;
  sport: SportModel;
}
