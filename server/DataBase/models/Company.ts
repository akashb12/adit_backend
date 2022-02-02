import { Model, QueryBuilder } from "objection";
import path from "path";
export class Company extends Model {
  static tableName = "companies";
  id: number;
  name: string;
  static modifiers = {
    getEmployees(query: QueryBuilder<Company>, roleId: number) {
      query
        .select()
        .withGraphFetched("employees(checkRole).role")
        .modifiers({
          checkRole: function (q) {
            if (roleId) {
              q.where({ roleId: roleId });
            }
          },
        });
    },
  };
  static relationMappings = {
    employees: {
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname, "Employees"),
      join: { from: "employees.companyId", to: "companies.id" },
    },
  };
}
