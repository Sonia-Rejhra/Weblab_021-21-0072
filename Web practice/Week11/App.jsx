import React, { useState } from 'react';
import './App.css';



function App() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const categories = ['Completed', 'In Progress', 'Backlogged'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCategoryChange = (event, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].category = event.target.value;
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        text: inputValue,
        category: selectedCategory
      };
      setTodos([...todos, newTodo]);
      setInputValue('');

      console.log("Called:1")

    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <hr></hr>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}   
            {categories.map(category => (
                <button>{category}</button>
              ))}
            <button style={{backgroundColor:'red'}} onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
