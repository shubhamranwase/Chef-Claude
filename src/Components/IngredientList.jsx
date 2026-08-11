export default function IngredientList(props) {
  const list = props.ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });
  return (
    <section>
      <div className="content-container">
        <div className="main-list-container">
          <h2>Ingredients at hand</h2>
          <ul className="ingredient-list">{list}</ul>
        </div>
      </div>
      {props.ingredients.length > 3 ? (
        <div className="get-recipe-cont-flex">
          <div className="get-recipe-container">
            <div className="recipe-container-inner">
              <h3>Ready for a Recipe?</h3>
              <p>Generate a recipe fom your list of ingredients.</p>
            </div>
            <button
              type="button"
              className="get-recipe-btn"
              onClick={props.getRecipe}
            >
              Get a Recipe
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
