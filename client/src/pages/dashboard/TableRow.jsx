import { useState } from "react";
import useFinance from "../hooks/useFinanceHook";
import { useFinanceStore } from "../../context/financeContext";

const TableRow = ({ record, chooseRecord, setChooseRecord }) => {
  const { updateRecord, deleteRecord } = useFinanceStore();
  const [isEditing, setEditing] = useState(false);
  const { description, amount, category, paymentMethod, handleInput } =
    useFinance(record);

  const handleChoose = () => {
    setChooseRecord(
      chooseRecord == null
        ? record._id
        : chooseRecord === record._id
        ? null
        : record._id
    );
  };

  const handleEdit = () => {
    if (isEditing) {
      const updatedRecord = {
        _id: record._id,
        description,
        amount,
        category,
        paymentMethod,
        date: record.date,
      };

      updateRecord(updatedRecord);
    }
    setEditing(!isEditing);
  };

  const handleChange = (inputType, e) => {
    handleInput(inputType, e.target.value);
  };

  const handleDelete = () => {
    deleteRecord(record._id);
  };

  return (
    <tr key={record._id} className="divide-x divide-gray-200/30">
      <td className="px-6 py-4 whitespace-nowrap text-sm">{record._id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {isEditing ? (
          <input
            type="text"
            value={amount}
            onChange={(e) => handleChange("SET_AMOUNT", e)}
            className="w-full bg-gray-800"
          />
        ) : (
          amount
        )}
      </td>
      <td className="px-6 py-4 text-sm max-w-[20em] break-words break-all text-justify whitespace-break-spaces">
        {isEditing ? (
          <input
            type="text"
            value={description}
            onChange={(e) => handleChange("SET_DESCRIPTION", e)}
            className="w-full bg-gray-800"
          />
        ) : (
          description
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {isEditing ? (
          <input
            type="text"
            value={category}
            onChange={(e) => handleChange("SET_CATEGORY", e)}
            className="w-full bg-gray-800"
          />
        ) : (
          category
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {isEditing ? (
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => handleChange("SET_PAYMENT_METHOD", e)}
            className="w-full bg-gray-800"
          />
        ) : (
          paymentMethod
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{record.date}</td>
      <td
        className="whitespace-nowrap text-sm cursor-pointer relative"
        onClick={handleChoose}
        suppressContentEditableWarning={true}
      >
        <div className="px-6 py-4 flex gap-1 justify-between hover:bg-gray-900/50">
          <div className="size-1 rounded-full bg-white"></div>
          <div className="size-1 rounded-full bg-white"></div>
          <div className="size-1 rounded-full bg-white"></div>
        </div>

        {chooseRecord === record._id && (
          <div className="absolute bg-gray-700 bottom-[-6.5em] min-w-28 left-3/4 z-10 grid divide-y divide-gray-500 shadow-lg">
            <button className="py-3 hover:bg-violet-600" onClick={handleEdit}>
              {isEditing ? "Save" : "Edit"}
            </button>
            <button className="py-3 hover:bg-violet-600" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
