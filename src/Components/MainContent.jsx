import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "./ai";

export default function MainContent() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const recipeRef = React.useRef(null);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }
  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
    setTimeout(() => {
      recipeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <main>
      <form className="form-add-ingredients" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. Oregano..."
          aria-label="Add ingredients"
          name="ingredient"
        />
        <button type="submit" name="input">
          + Add ingredient
        </button>
      </form>
      <form className="form-get-recipe">
        {ingredients.length > 0 ? (
          <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
        ) : null}
      </form>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Fetching your recipe...</p>
        </div>
      ) : null}

      {recipe && !loading && <ClaudeRecipe ref={recipeRef} recipe={recipe} />}
    </main>
  );
}
