import { Model } from "objection";
import path from "path";
export class Employees extends Model {
  static tableName = "employees";
  id: number;
  companyId: number;
  roleId: number;
  firstName: string;
  lastName: string;
  email: string;
  static relationMappings = {
    role: {
      relation: Model.HasOneRelation,
      modelClass: path.join(__dirname, "Roles"),
      join: { from: "employees.roleId", to: "roles.id" },
    },
  };
}
