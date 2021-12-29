import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.

  const deleteRecipe = (index) => {
    let newRecipeList = [...recipes];
    newRecipeList.splice(index, 1);
    setRecipes(newRecipeList);
  }

  // //edit recipes
  // const editRecipe = (index) => {
  //   let newRecipeList = [...recipes];
  //   oldRecipe = newRecipeList.indexOf(index);

    
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     newRecipeList.indexOf(index) = ({formData});
  //     setRecipes(newRecipeList);
  //   }

  //   const handleChange =({target}) => {
  //     setFormData({...formData, [target.name]: target.value});
  //   }  
  //   const initialState = {
  //     name:oldRecipe.name,
  //     cuisine:oldRecipe.cuisine,
  //     photo:oldRecipe.photo,
  //     ingredients:oldRecipe.ingredients,
  //     preparation:oldRecipe.preparation,
  //   };

  //   const [formData, setFormData] = useState({...initialState});

  //   return (
  //     <form name="create" onSubmit={handleSubmit}>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <td className="content_td"><p><input id="name" name="name" type="text" required={true} placeholder={oldRecipe.name} onChange={handleChange} value={formData.name}></input></p></td>
  //             <td className="content_td"><p><input name="cuisine" name="cuisine" type="text" required={true} placeholder={oldRecipe.cuisine} onChange={handleChange} value={formData.cuisine}></input></p></td>
  //             <td className="content_td"><p><input name="photo" name="photo" type="url" required={true} placeholder={oldRecipe.photo} onChange={handleChange} value={formData.photo}></input></p></td>
  //             <td className="content_td"><p><textarea id="ingredients" name="ingredients" type="text" required={true} placeholder={oldRecipe.ingredients} onChange={handleChange} value={formData.ingredients}></textarea></p></td>
  //             <td className="content_td"><p><textarea id="preparation" name="preparation" type="text" required={true} placeholder={oldRecipe.preparation} onChange={handleChange} value={formData.preparation}></textarea></p></td>
  //             <td>
  //               <button type="submit"></button>
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </form>
  //   );

  // }

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const createRecipe = (newRecipe) =>{    
    setRecipes([...recipes, newRecipe.formData] );
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
