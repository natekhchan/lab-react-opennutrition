// src/AddFoodForm.js

import React, { useState } from 'react';
import { Input, Button } from 'antd';
import '../css/style.css';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  
const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new food object
    const newFood = {
      name,
      image,
      calories: Number(calories), // Ensure calories is a number
      servings: Number(servings),  // Ensure servings is a number
    };

    // Pass the new food to the parent component's function
    onAddFood(newFood);

    // Clear the form inputs after submission
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className="name-title">Name</div>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        style={{ marginBottom: '10px' }}
      />      
      <div className="image-title">Image</div>
      <Input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        style={{ marginBottom: '10px' }}
      />      
      <div className="calories-title">Calories</div>
      <Input
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        type="number"
        style={{ marginBottom: '10px' }}
      />      
      <div className="servings-title">Servings</div>
      <Input
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
        type="number"
        style={{ marginBottom: '10px' }}
      />
      <Button className="create-button" type="primary" htmlType="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
