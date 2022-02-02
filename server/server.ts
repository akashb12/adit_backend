import express, { Application } from "express";
import bodyParser from "body-parser";
import companyRoutes from "./routes/company";
import employeeRoutes from "./routes/employees";
import cors from "cors";
const setupDb = require("../server/DataBase/DbSetup");
const app: Application = express();
setupDb();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/company", companyRoutes);
app.use("/employee", employeeRoutes);
const server = app.listen(5000, () => {
  console.log("app running on port " + 5000);
});
