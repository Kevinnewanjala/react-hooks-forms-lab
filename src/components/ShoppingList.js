import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [filters, setFilters] = useState({
    selectedCategory: "All",
    search: ""
  });

  const handleCategoryChange = (event) => {
    setFilters({
      ...filters,
      selectedCategory: event.target.value
    });
  };

  const handleSearchChange = (search) => {
    setFilters({
      ...filters,
      search: search
    });
  };

  const filteredItems = items.filter(item =>
    (filters.selectedCategory === "All" || item.category === filters.selectedCategory) &&
    item.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={filters.search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
