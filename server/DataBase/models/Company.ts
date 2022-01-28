import { Model } from "objection";
export class Company extends Model {
  static tableName = "companies";
  id: number;
  name: string;
}
