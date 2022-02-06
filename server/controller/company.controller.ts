import { NextFunction, Response } from "express";
import { Company } from "../DataBase/models/Company";
import { Employees } from "../DataBase/models/Employees";

export const addCompany = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const alreadyExist = await Company.query().findOne({ name: data.name });
  if (alreadyExist) {
    return res.status(409).json({ message: "company already exist" });
  }
  const create = await Company.query().insert(data);

  return res.status(201).json({ status: true, create });
};

// get company
export const getCompany = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const get = await Company.query();

  return res.status(200).json({ status: true, get });
};

// update company
export const updateCompany = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  console.log(data);
  const update = await Company.query().patchAndFetchById(req.params.id, data);

  return res.status(202).json({ status: true, update });
};

// delete company
export const deleteCompany = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const deleteEmployee = await Employees.query()
    .delete()
    .where({ companyId: req.params.id });

  const deleteCompany = await Company.query().deleteById(req.params.id);

  return res.status(202).json({ status: true, deleteCompany });
};
