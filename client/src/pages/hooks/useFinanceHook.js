import { useReducer } from "react";

const initialState = {
  description: "",
  amount: "",
  category: "",
  paymentMethod: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: parseFloat(action.payload || "") };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const useFinance = (value) => {
  const [state, dispatch] = useReducer(reducer, value || initialState);

  const handleInput = (type, value) => {
    dispatch({ type, payload: value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    ...state,
    handleInput,
    reset,
  };
};

export default useFinance;
