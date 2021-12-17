import React from "react";

function RecipeList({recipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  if(recipes.length){
    const recipeList = recipes.map((recipe) => {
      <tr>
        <td className="content_td">
          <p>{recipe.name}</p>
        </td>
        <td className="content_td">
          <p>{recipe.cuisine}</p>
        </td>
        <td className="content_td">
          <img src={recipe.photo}></img>
        </td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
      </tr>
    })

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeList}        
        </tbody>
      </table>
    </div>
  );
  } else {
    return null;
  }
}
export default RecipeList;
