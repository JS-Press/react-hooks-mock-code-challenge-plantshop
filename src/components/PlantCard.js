import React, {useState} from "react";

function PlantCard({plant, handleDelClick}) {

  const [inStock, setStock] = useState(true) 

  function changeStock(){
    setStock(!inStock)
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <button onClick = {() => handleDelClick(plant.id)} >DELETE</button>
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick = {changeStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {changeStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
