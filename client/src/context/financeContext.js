import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000/financial-records";

export const useFinanceStore = create((set) => ({
  records: [],
  fetchRecords: async (userId) => {
    try {
      const records = await axios.get(
        `${API_URL}/get-all-records/userId=${userId}`
      );
      set(() => ({ records: records.data }));
    } catch (error) {
      console.log(error.message);
    }
  },
  addRecord: async (record) => {
    try {
      const res = await axios.post(API_URL, record, {
        headers: { "Content-Type": "application/json" },
      });
      set((state) => ({ records: [...state.records, res.data] }));
    } catch (error) {
      console.log(error.message);
    }
  },
  updateRecord: async (updatedRecord) => {
    try {
      const res = await axios.put(
        `${API_URL}/update-record/id=${updatedRecord._id}`,
        updatedRecord,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      set((state) => ({
        records: state.records.map((record) =>
          record._id === res.data._id ? res.data : record
        ),
      }));
    } catch (error) {
      console.error("Error updating record:", error.message);
    }
  },
  deleteRecord: async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/delete-record/id=${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      set((state) => ({
        records: state.records.filter((record) => record._id !== res.data._id),
      }));
    } catch (error) {
      console.error("Error deleting record:", error.message);
    }
  },

  resetRecords: () => set({ records: [] }),
}));
