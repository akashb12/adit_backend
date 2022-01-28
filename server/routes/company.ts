import { Router } from "express";
import {
  addCompany,
  deleteCompany,
  getCompany,
  updateCompany,
} from "../controller/company.controller";
const router: Router = Router();
router.post("/create", addCompany);
router.get("/get", getCompany);
router.put("/update/:id", updateCompany);
router.delete("/delete/:id", deleteCompany);
export = router;
