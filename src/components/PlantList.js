import React from "react";
import PlantCard from "./PlantCard";

function PlantList({updatePrice, plants, handleDelClick, setPlants, filterWord}) {

let searchMatched = plants.filter( function(plant){ return plant.name.includes(filterWord)} )

// console.log('SM:',searchMatched)
// console.log('FilterWord:',filterWord)
// console.log('plants:',plants)



const plantElements = searchMatched ?  searchMatched.map(plant => {
  return <PlantCard updatePrice = {updatePrice} handleDelClick = {handleDelClick} key = {plant.id} plant = {plant}/> }) : null

  return (
    <ul className="cards">
      {plantElements}
    </ul>
  );
}

export default PlantList;
