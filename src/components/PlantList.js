import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelClick}) {

const plantElements = plants ?  plants.map(plant => {
  return <PlantCard handleDelClick = {handleDelClick} key = {plant.id} plant = {plant}/> }) : null

  return (
    <ul className="cards">
      {plantElements}
    </ul>
  );
}

export default PlantList;
