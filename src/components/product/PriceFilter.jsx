const PriceFilter = ({ label, value, checked, onChange }) => {
  const handleClick = () => {
    onChange(value);
  };

  const handleDoubleClick = () => {
    onChange(null);
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer select-none"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div
        className={`w-5 h-5 border-2 rounded ${
          checked ? "bg-blue-600 border-blue-600" : "border-gray-400"
        }`}
      >
        {checked && (
          <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
      <span>{label}</span>
    </div>
  );
};

export default PriceFilter;
