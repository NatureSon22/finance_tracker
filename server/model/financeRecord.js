import mongoose from "mongoose";

const FinancialRecordSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

export const FinanceModel = mongoose.model(
  "FinanceRecord",
  FinancialRecordSchema
);
