const CheckboxFilter = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 text-blue-600 form-checkbox"
    />
    <span>{label}</span>
  </label>
);

export default CheckboxFilter;
