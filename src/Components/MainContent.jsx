import React from "react"
import IngredientList from "./IngredientList"

export default function MainContent(){

    const [ingredients, setIngredients] = React.useState([])      

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => {
            return ([...prevIngredients, newIngredient])            
        })
    }
    
    return (
        <main>
            <form className="form-add-ingredients" action={addIngredient}>
                <input type="text" placeholder="e.g. Oregano..." aria-label="Add ingredients" name="ingredient"/>
                <button type="submit" name="input">+ Add ingredient</button>
            </form>
            <form className="form-get-recipe">
           {ingredients.length > 0 ? <IngredientList ingredients ={ingredients} />: null}
            </form>
        </main>
    )
}