const FormField = ({
  label,
  options,
  input: { value, handleInput, inputType },
}) => {
  const handleSelect = (e) => {
    handleInput(inputType, e.target.value);
  };

  return (
    <div className="flex items-center justify-between gap-10">
      <label className="text-white min-w-[8em]">{label}</label>
      <select
        className="px-4 py-2 bg-gray-900 border flex-1 text-gray-400 border-gray-600"
        name=""
        id=""
        onChange={handleSelect}
        value={value}
        aria-placeholder={options[0]}
      >
        {options.map((option, index) => (
          <option
            className={`text-white cursor-pointer ${
              index === 0 ? "hidden" : "block"
            }`}
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormField;
