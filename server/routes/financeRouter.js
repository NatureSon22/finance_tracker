import express from "express";
import {
  createRecord,
  deleteRecord,
  getAllRecords,
  updateRecord,
} from "../controllers/financeController.js";

const FinanceRouter = express.Router();

FinanceRouter.get("/get-all-records/userId=:userId", getAllRecords);
FinanceRouter.post("/", createRecord);
FinanceRouter.put("/update-record/id=:id", updateRecord);
FinanceRouter.delete("/delete-record/id=:id", deleteRecord);

export default FinanceRouter;
