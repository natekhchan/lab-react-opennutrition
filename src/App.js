import React, { useState } from 'react';
import { Row, Button, Divider } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); // State to manage form visibility

  // Function to add new food to the list
  const handleAddFood = (newFood) => {
    const updatedFoodList = [newFood, ...foodList];
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList.filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = foodList.filter(food =>
      food.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFoodList(filtered);
  };

  // Function to delete a food item from the list
  const handleDeleteFood = (foodName) => {
    const updatedFoodList = foodList.filter((food) => food.name !== foodName);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList); // Update the filtered list as well
  };

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <Button onClick={toggleFormVisibility} style={{ marginLeft: '15px', marginBottom: '20px', color: 'blue', borderColor: 'blue' }}>
        {isFormVisible ? 'Hide Form' : 'Add New Food'}
      </Button>

      {isFormVisible && (
        <>
          <Divider><h3 className="add-food-entry-title">Add Food Entry</h3></Divider>
          <AddFoodForm onAddFood={handleAddFood} /> {/* Conditionally render the form */}
        </>
      )}

      <Divider><h3 className="search-title">Search</h3></Divider>
      <Search onSearch={handleSearch} /> {/* Render the search bar */}
      
      <div style={{ textAlign: 'center', margin: '20px' }}>
      <Divider><h3 className="food-list-title">Food List</h3></Divider>
      </div>

      {filteredFoodList.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h3>Oops! There is no more content to show.</h3>
          <img src={'/img/zeroImage.jpeg'} alt="No content" style={{ marginTop: '50px', marginBottom: '100px', width: '300px', height: 'auto' }} />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {filteredFoodList.map((food, index) => (
            <FoodBox key={index} food={food} onDeleteFood={handleDeleteFood} />
          ))}
        </Row>
      )}
    </div>    
    
  );
}

export default App;
