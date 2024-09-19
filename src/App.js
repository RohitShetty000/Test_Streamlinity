import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { CategoryList } from './components/CategoryList';
import {MenuItems} from './components/MenuItems';

function App() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuItems, setMenuItems] = useState([]);



  useEffect(() => {
    fetch('https://stream-menu-svc-v3.herokuapp.com/category')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch('https://stream-menu-svc-v3.herokuapp.com/item?category=${selectedCategory}')
        .then((response) => response.json())
        .then((data) => {
          setMenuItems(data);
        })
        .catch((error) => console.error('Error fetching menu items:', error));
    }
  }, [selectedCategory]);


  return (
    <div className="App">
    <h1>Restaurant Menu</h1>
    <div className="container">
      <CategoryList
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      {selectedCategory && (
        <MenuItems items={menuItems} />
      )}
    </div>
  </div>

  );
}

export default App;
