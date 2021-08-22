import React, {useState} from "react";

function PlantCard({plant, handleDelClick, updatePrice}) {

  const [inStock, setStock] = useState(true) 
  const [thePrice, setPrice] = useState(plant.price)

  function changeStock(){
    setStock(!inStock)
  }
  
  function handlePriceChange(e){
    setPrice(e.target.value)
    updatePrice( e.target.value , plant.id , plant )
  }




  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <button onClick = {() => handleDelClick(plant.id)} >DELETE</button>
      <h4>{plant.name}</h4>

<br></br>
      <p>Price:</p><input type ="text" placeholder={thePrice} onChange = {handlePriceChange} value = {thePrice} />
<br></br>
<br></br>

      {inStock ? (
        <button onClick = {changeStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {changeStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
