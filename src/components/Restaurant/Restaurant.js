import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    console.log(searchText)
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        // console.log(searchTextValue)
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <input onChange={handleSearchField} placeholder="Search meals here" type="text" />
            <div className="meals-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;