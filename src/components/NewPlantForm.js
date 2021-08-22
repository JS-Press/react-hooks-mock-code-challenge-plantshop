import React from "react";

function NewPlantForm({handleChange, plantForm, handleSubmit, handleDelClick }) {

  
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit} >
        <input onChange = {handleChange} type="text" name="name" placeholder="Plant name" value = {plantForm.name} />
        <input onChange = {handleChange} type="text" name="image" placeholder="Image URL" value = {plantForm.image} />
        <input onChange = {handleChange} type="number" name="price" step="0.01" placeholder="Price" value = {plantForm.price} />
        <button type="submit" >Add Plant</button>
        
  
      </form>
    </div>
  );
}

export default NewPlantForm;
