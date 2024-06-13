const InputField = ({
  label,
  type,
  input: { value, handleInput, inputType },
}) => {
  const handleChange = (e) => {
    handleInput(inputType, e.target.value);
  };

  return (
    <div className="grid gap-2">
      <label htmlFor="" className="text-white min-w-[8.5em]">
        {label}
      </label>
      <input
        className="px-4 py-2 text-white border border-gray-600 focus:outline-none bg-gray-900"
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
