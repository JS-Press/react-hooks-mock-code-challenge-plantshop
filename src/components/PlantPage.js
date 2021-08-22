import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants, plantForm, setPlantForm}) {

  const [filterWord, setFilterWord] = useState('')

function handleDelClick(plantId){
  fetch(`http://localhost:6001/plants/${plantId}`, { method: 'DELETE', })
  .then( r => r.json())
  .then( res => {
    const updatedPlants = plants.filter( plant => plant.id !== plantId)
    setPlants(updatedPlants)
})}


  function handleChange(e){
    setPlantForm({ ...plantForm, [e.target.name] : e.target.value })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log('submitting!')
    fetch('http://localhost:6001/plants', {
      method : 'POST', 
      headers: {
      'Content-Type': 'application/json'},
      body: JSON.stringify(plantForm)
    })
    .then(r => r.json())
    .then(data => console.log(data)
    )
    updatePlants()
    setPlantForm({
      id: '',
      name: '',
      image: '',
      price: ''
  })}

  function updatePlants(){
    const newPlants = [...plants, plantForm]
    setPlants(newPlants)
     }


  return (
    <main>
      <NewPlantForm plantForm = {plantForm} handleSubmit = {handleSubmit} handleChange ={handleChange} handleDelClick = {handleDelClick}/>
      <Search  filterWord = {filterWord} setFilterWord = {setFilterWord} />
      <PlantList filterWord = {filterWord} plants = {plants} setPlants = {setPlants} handleDelClick = {handleDelClick}/>
    </main>
  );
}

export default PlantPage;
