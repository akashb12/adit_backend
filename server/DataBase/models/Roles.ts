import { Model } from "objection";
export class Roles extends Model {
  static tableName = "roles";
  id: number;
  name: string;
}
