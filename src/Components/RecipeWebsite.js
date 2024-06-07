import React, { useEffect, useState } from 'react'
import Recipes from './Recipes';
import './Recipe.css';
import RecipeReview from './recipereview';
import CarsoualsRecipe from '../CarsoualsRecipe';
import RecipeFooter from './recipefooter';


function RecipeWebsite() {

    const APP_ID = "22dfed15";
    const APP_KEY = " ac8fc1b26a2d2823802b7197c9ac2cb3";
   
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('halwa')


    useEffect(()=>{
        getRecipes();
},[query]);

     const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
       setRecipes(data.hits);
       console.log(data.hits);
    }
     
  const updateSearch = e => {
    setSearch(e.target.value);
   
  }

const getsearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}
  return (
    <div className='App'>
  <form onSubmit={getsearch} className='search-form'>
  <div className='search-container'>
    <img src="/kitchen.png"  style={{width:'90px'}} alt='logo'/>
    <p className='logo'>Recipes</p>
    <input type="text" className='search-bar' value={search} onChange={updateSearch} />
    <button type='submit' className='search-button'>Search</button>
  </div>
</form>

     <CarsoualsRecipe/>
    <div className='d-flex justify-content-center align-items-center'>
     <p className='heading'>Recipes</p>
     </div>
    <div className='recipes'>
    {recipes.map((recipe) => (
        <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients= {recipe.recipe.ingredients}
            shareAs = {recipe.recipe.
             
shareAs

            }
        />
    ))}
    </div>
    <div className='d-flex justify-content-center align-items-center'>
     <p className='review'>Customer Review</p>
     </div>
  <RecipeReview/>
<RecipeFooter/>
</div>

  )
}

export default RecipeWebsite;