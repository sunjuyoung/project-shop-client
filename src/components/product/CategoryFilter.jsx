import { ChevronDown } from "lucide-react";
import CheckboxFilter from "./CheckboxFilter";
import { useState } from "react";

const CategoryFilter = ({ category, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isSelected = selected.includes(category.id);

  const handleCategoryChange = () => {
    if (isSelected) {
      onChange(
        selected.filter(
          (item) =>
            item !== category.id &&
            !category.subCategories.some((sub) => sub.id === item)
        )
      );
    } else {
      onChange([
        ...selected,
        category.id,
        ...category.subCategories.map((sub) => sub.id),
      ]);
    }
  };

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <CheckboxFilter
          label={category.name}
          checked={isSelected}
          onChange={handleCategoryChange}
        />
        {category.subCategories.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
            <ChevronDown
              className={`transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      {isOpen && category.subCategories.length > 0 && (
        <div className="mt-2 ml-6 space-y-2">
          {category.subCategories.map((sub) => (
            <CheckboxFilter
              key={sub.id}
              label={sub.name}
              checked={selected.includes(sub.id)}
              onChange={() =>
                onChange(
                  selected.includes(sub.id)
                    ? selected.filter((item) => item !== sub.id)
                    : [...selected, sub.id]
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
