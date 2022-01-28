import { NextFunction, Response } from "express";
import { Employees } from "../DataBase/models/Employees";

export const addEmployee = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const alreadyExist = await Employees.query().findOne({
    email: data.email,
    company_id: req.body.companyId,
  });
  if (alreadyExist) {
    throw new Error("employee already exist");
  }
  const create = await Employees.query().insert(data);

  return res.status(201).json({ status: true, create });
};

// get employee
export const getEmployee = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  var filter: any = { company_id: req.params.companyId };
  if (req.body.roleId) {
    filter.role_id = req.body.roleId;
  }
  const get = await Employees.query().where(filter);
  return res.status(200).json({ status: true, get });
};

// update employee
export const updateEmployee = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const update = await Employees.query().patchAndFetchById(req.params.id, data);

  return res.status(202).json({ status: true, update });
};

// delete employee
export const deleteEmployee = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const deleteEmployee = await Employees.query().deleteById(req.params.id);

  return res.status(202).json({ status: true, deleteEmployee });
};
