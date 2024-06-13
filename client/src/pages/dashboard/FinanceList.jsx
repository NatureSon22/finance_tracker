import { useMemo, useState } from "react";
import { useFinanceStore } from "../../context/financeContext";
import TableRow from "./TableRow";

const FinanceList = () => {
  const [chooseRecord, setChooseRecord] = useState(null);
  const { records } = useFinanceStore();

  const calculateTotal = useMemo(() => {
    const total = records.reduce((total, record) => total + record.amount, 0);
    return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }, [records]);

  return (
    <div className="flex-1 flex flex-col gap-7">
      <table className="min-w-full divide-y divide-gray-200/30 border border-white/20">
        <thead className="bg-gray-950">
          <tr className="divide-x divide-white/30 text-white">
            <th
              scope="col"
              className="px-6 py-5 text-left text-xs font-medium uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="w-max px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Payment Method
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            ></th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide divide-gray-200/30 text-white">
          {records.map((record) => (
            <TableRow
              key={record._id}
              record={record}
              setChooseRecord={setChooseRecord}
              chooseRecord={chooseRecord}
            ></TableRow>
          ))}
        </tbody>
      </table>
      <p className="text-white text-lg ml-auto font-semibold">
        Total:
        <span className="ml-3 text-gray-400">{calculateTotal}</span>
      </p>
    </div>
  );
};

export default FinanceList;
