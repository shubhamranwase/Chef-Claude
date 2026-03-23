export default function IngredientList(props) {
    const list = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })  
    return(
        <section>
             <div className="content-container">
               <div className="main-list-container">
                 <h2>Ingredients at hand</h2>
                <ul className="ingredient-list">{list}</ul>
               </div>
               </div>
               {props.ingredients.length > 3 ? <div className="get-recipe-container">
                <div className="recipe-container-inner">
                <h3>Ready for a Recipe?</h3>
                <p>Generate a recipe fom your list of ingredients.</p>
                </div>
                <button className="get-recipe-btn">Get a Recipe</button>
               </div> : null}
        </section>
    )
}