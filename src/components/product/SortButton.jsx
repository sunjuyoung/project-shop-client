const SortButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-2 py-2 text-base rounded ${
      active
        ? "text-black-700 font-extrabold"
        : "text-gray-700 hover:font-extrabold"
    }`}
  >
    {label}
  </button>
);

export default SortButton;
