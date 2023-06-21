import { Link } from "react-router-dom";
import { useState } from "react";

import "./Recipe.css";

function Recipes() {
  const [ingredient, setIngredient] = useState("");
  const [recipeData, setRecipe] = useState([]);
  const [error, setError] = useState(null);
  const [clickedRecipeId, setClickedRecipeId] = useState(null);

  async function fetchRecipe() {
    setError(error);

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    console.log(response);

    const data = await response.json();
    console.log(data);

    const limitedRecipes = data.meals ? data.meals.slice(0, 9) : [];
    setRecipe(limitedRecipes);
  }

  function clickRecipe(recipeId) {
    setClickedRecipeId(recipeId);
    console.log(`this is what we want:${recipeId}`);
    console.log(clickedRecipeId);
  }

  // function selectRecipe() {
  //   console.log(recipe.mealId);
  // }

  return (
    <div className="recipe-container">
      <div className="recipe-search-container">
        <input
          type="text"
          placeholder="Please input your main ingredient"
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button onClick={fetchRecipe}>Search</button>
      </div>

      {recipeData.length > 0 && (
        <div className="recipes-grid">
          {recipeData.map((recipe) => (
            <div className="image-container" key={recipe.idMeal}>
              <Link to={recipe.idMeal}>
                <button
                  className="btnRecipe"
                  onClick={() => clickRecipe(recipe.idMeal)}
                >
                  <img
                    className="recipe-img"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />
                  <p>{recipe.strMeal}</p>
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Recipes;