import React, { useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

const [plants, setPlants] = useState('')
const [plantForm, setPlantForm] = useState({
  id: '',
  name: '',
  image: '',
  price: ''
})

useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(r => r.json())
  .then(data => setPlants(data))
  
  }, [])



  return (
    <div className="app">
      <Header />
      <PlantPage plants = {plants} setPlants = {setPlants} plantForm={plantForm} setPlantForm = {setPlantForm}/>
    </div>
  );
}

export default App;
