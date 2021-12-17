import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };

  const [formData, setFormData] = useState({...initialState});

  const handleChange =({target}) => {
    setFormData({...formData, [target.name]: target.value});
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({formData});
    setFormData(initialState);
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="content_td"><p><input id="name" name="name" type="text" required={true} placeholder="Name" onChange={handleChange} value={formData.name}></input></p></td>
            <td className="content_td"><p><input name="cuisine" name="cuisine" type="text" required={true} placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}></input></p></td>
            <td className="content_td"><p><input name="photo" name="photo" type="url" required={true} placeholder="URL" onChange={handleChange} value={formData.photo}></input></p></td>
            <td className="content_td"><p><textarea id="ingredients" name="ingredients" type="text" required={true} placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea></p></td>
            <td className="content_td"><p><textarea id="preparation" name="preparation" type="text" required={true} placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea></p></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
