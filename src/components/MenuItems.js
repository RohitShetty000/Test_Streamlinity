import React from 'react'

export const MenuItems = ({ items }) => {
  return (
    <div className="menu-items">
    <h2>Menu Items</h2>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong>: {item.description}
        </li>
      ))}
    </ul>
  </div>

  )
}
