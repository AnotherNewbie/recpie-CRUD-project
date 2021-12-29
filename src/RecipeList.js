import React from "react";
import RecipeListHead from "./recipeListHead";

function RecipeList({recipes, deleteRecipe, editRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const deleteRecipeHandler = (deleteIndex) => {
    deleteRecipe(deleteIndex);
  }

  // const editRecipeHandler = (editIndex) => {
  //   editRecipeHandler(editIndex);
  // }


  if(recipes.length){    
    const list = recipes.map((recipe,index) => {
      return(
          <tr key={index}>
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
          {/* <td><button name="edit" onClick={()=>editRecipeHandler(index)}>Edit</button></td> */}
          <td><button name="delete" onClick={()=>deleteRecipeHandler(index)}>Delete</button></td>      
        </tr>
      )
    });    
  return (
    <div className="recipe-list">
      <table>
        <RecipeListHead />
        <tbody>
          {list}          
        </tbody>
      </table>
    </div>
  );
  } else {
    return null;
  }
}
export default RecipeList;
