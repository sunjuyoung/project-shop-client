import React, { useState } from "react";

const CategoryList = () => {
  const categories = [
    {
      id: "men",
      name: "MEN",
      subCategories: [
        {
          name: "아우터",
          items: ["코트", "자켓", "점퍼"],
        },
        {
          name: "이너",
          items: ["니트", "티셔츠", "셔츠"],
        },
        {
          name: "하의",
          items: ["청바지", "하프팬츠", "데님"],
        },
        {
          name: "잡화",
          items: ["가방", "벨트", "모자", "양말"],
        },
      ],
    },
    {
      id: "women",
      name: "WOMEN",
      subCategories: [
        {
          name: "아우터",
          items: ["코트", "자켓", "점퍼"],
        },
        {
          name: "이너",
          items: ["니트", "티셔츠", "블라우스"],
        },
        {
          name: "하의",
          items: ["스커트", "팬츠", "데님"],
        },
        {
          name: "잡화",
          items: ["가방", "신발", "액세서리"],
        },
      ],
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (categoryId, subCategoryName, item) => {
    console.log(
      `선택된 카테고리: ${categoryId}, 서브카테고리: ${subCategoryName}${
        item ? `, 아이템: ${item}` : ""
      }`
    );
    // 여기에 실제 카테고리 선택 로직을 구현하세요
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <ul className="flex justify-center py-4 space-x-12">
          {categories.map((category) => (
            <li
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              // onMouseLeave={() => setHoveredCategory(null)}
            >
              <a
                href="#"
                className="text-lg font-medium text-gray-800 transition duration-150 ease-in-out hover:text-blue-600"
              >
                {category.name}
              </a>
              {hoveredCategory === category.id && (
                <div
                  className="absolute z-10 w-screen mt-4 overflow-hidden transform -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-lg left-1/2 max-w-7xl"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div className="grid grid-cols-4 gap-8 p-8">
                    {category.subCategories.map((subCategory, index) => (
                      <div key={index} className="space-y-4">
                        <h3
                          className="text-lg font-semibold text-gray-900 transition duration-150 ease-in-out cursor-pointer hover:text-blue-600"
                          onClick={() =>
                            handleCategoryClick(category.id, subCategory.name)
                          }
                        >
                          {subCategory.name}
                        </h3>
                        <ul className="space-y-2">
                          {subCategory.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-600 transition duration-150 ease-in-out hover:text-blue-600"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleCategoryClick(
                                    category.id,
                                    subCategory.name,
                                    item
                                  );
                                }}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="px-8 py-4 bg-gray-50">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-800"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategoryClick(category.id, "all");
                      }}
                    >
                      전체 보기
                    </a>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryList;
