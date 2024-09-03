// src/FoodBox.js

import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ food, onDeleteFood }) {

  const handleDelete = () => {
        onDeleteFood(food.name);
  };
  
  return (
    <Col>
     <Card
        title={food.name}
        style={{ 
            width: 300, 
            margin: '10px auto', 
            border: '1px solid #ccc', 
            padding: '10px' 
          }}
        cover={<img src={food.image} alt={food.name} style={{ height: '200px', objectFit: 'cover' }}  />}
      >
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;