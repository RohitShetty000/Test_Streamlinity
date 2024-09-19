import React from 'react'

export const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
    <h2>Categories</h2>
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button onClick={() => onSelectCategory(category.short_name)}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  </div>

  )
}
