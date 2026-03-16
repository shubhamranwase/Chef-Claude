import React from "react"
export default function MainContent(){

    const [ingredients, setIngredients] = React.useState([]) 
    const list = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })       

    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => {
            return ([...prevIngredients, newIngredient])            
        })
    }
    return (
        <main>
            <form className="form-add-ingredients" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. Oregano..." aria-label="Add ingredients" name="ingredient"/>
                <button type="submit" name="input">+ Add ingredient</button>
            </form>
            <div className="content-container">
               <div className="main-list-container">
                 <h2>Ingredients at hand</h2>
                <ul>
                    {list}
                </ul>
               </div>
            </div>
        </main>
    )
}