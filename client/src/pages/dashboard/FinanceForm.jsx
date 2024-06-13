import SelectField from "./SelectField";
import InputField from "./InputField";
import useFinance from "../hooks/useFinanceHook";
import Spinner from "./Spinner";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinanceStore } from "../../context/financeContext";

const FinanceForm = () => {
  const { description, amount, category, paymentMethod, handleInput, reset } =
    useFinance();
  const [spinner, setSpinner] = useState(false);
  const { user } = useUser();
  const { addRecord } = useFinanceStore();
  const [isExpense, setIsExpense] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description,
      amount: amount,
      category,
      paymentMethod,
    };

    if (!description || !amount || !category || !paymentMethod) {
      alert("Please fill all the fields");
      return;
    }
    setSpinner(true);

    await addRecord(newRecord);

    setSpinner(false);
    setIsExpense(false);
    reset();
  };

  const handleSetExpense = () => {
    setIsExpense((prev) => {
      const newAmount = prev ? Math.abs(amount) : -Math.abs(amount);
      handleInput("SET_AMOUNT", newAmount);
      return !prev;
    });
  };

  return (
    <form
      action="post"
      onSubmit={handleSubmit}
      className="bg-gray-700/40 p-10 rounded-lg grid gap-7 shadow-xl h-min"
    >
      <InputField
        label={"Description"}
        type={"text"}
        input={{
          value: description,
          handleInput,
          inputType: "SET_DESCRIPTION",
        }}
      ></InputField>
      <div className="grid gap-3">
        <InputField
          label={"Amount"}
          type={"number"}
          input={{
            value: amount,
            handleInput,
            inputType: "SET_AMOUNT",
          }}
        ></InputField>
        <div className="ml-auto space-x-2">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isExpense}
            onChange={handleSetExpense}
          />
          <span className="text-gray-300 text-sm">Set as expense</span>
        </div>
      </div>
      <SelectField
        label={"Category"}
        options={[
          "Select a Category",
          "Food",
          "Rent",
          "Salary",
          "Utilities",
          "Entertainment",
          "Other",
        ]}
        input={{
          value: category,
          handleInput,
          inputType: "SET_CATEGORY",
        }}
      ></SelectField>
      <SelectField
        label={"Payment Method"}
        options={[
          "Select a payment Method",
          "Credit Card",
          "Cash",
          "Bank Transfer",
        ]}
        input={{
          value: paymentMethod,
          handleInput,
          inputType: "SET_PAYMENT_METHOD",
        }}
      ></SelectField>
      <div className="mt-10 grid justify-items-center">
        {spinner ? (
          <Spinner></Spinner>
        ) : (
          <input
            className="w-full bg-violet-600 text-white p-4 cursor-pointer hover:bg-violet-800"
            type="submit"
            value="Add Record"
          />
        )}
      </div>
    </form>
  );
};

export default FinanceForm;
