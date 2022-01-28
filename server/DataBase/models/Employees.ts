import { Model } from "objection";
export class Employees extends Model {
  static tableName = "employees";
  id: number;
  companyId: number;
  roleId: number;
  firstName: string;
  lastName: string;
  email: string;
}
