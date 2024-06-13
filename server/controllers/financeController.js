import { FinanceModel } from "../model/financeRecord.js";

const getAllRecords = async (req, res) => {
  try {
    const { userId } = req.params;
    const records = await FinanceModel.find({ userId });

    if (records.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRecord = async (req, res) => {
  try {
    const data = req.body;
    const newRecord = await FinanceModel.create(data);
    res.status(200).json(newRecord);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const record = await FinanceModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(record);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await FinanceModel.findByIdAndDelete({ _id: id });
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(record);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { getAllRecords, createRecord, updateRecord, deleteRecord };
