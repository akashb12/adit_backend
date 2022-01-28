import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "../controller/employee.controller";
const router: Router = Router();
router.post("/create", addEmployee);
router.get("/get/:companyId", getEmployee);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);
export = router;
