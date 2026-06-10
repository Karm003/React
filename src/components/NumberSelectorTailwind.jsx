const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-end">
      {error && (
        <p className="mb-4 text-red-600 text-2xl font-semibold">
          {error}
        </p>
      )}

      <div className="flex gap-6">
        {arrNumber.map((value) => {
          const isSelected = value === selectedNumber;

          return (
            <button
              key={value}
              type="button"
              onClick={() => numberSelectorHandler(value)}
              className={`
                h-[72px]
                w-[72px]
                border
                border-black
                rounded-2xl
                grid
                place-items-center
                text-2xl
                font-bold
                cursor-pointer
                ${
                  isSelected
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }
              `}
            >
              {value}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-2xl font-bold">
        Select Number
      </p>
    </div>
  );
};

export default NumberSelector;