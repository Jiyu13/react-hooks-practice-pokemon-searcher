import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( {onAddPokemon} ) {

  const initialValue ={
    name: "",
    hp: "", 
    front: "",
    back: ""
  }

  // set formData to get all inputs
  const [formData, setFormData] = useState(initialValue)
  
  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]: value})
  }


  function handleSubmit(e) {
    e.preventDefault()

    const newPokemon = {
      name: formData.name,
      hp: formData.name, 
      sprites: {
        front: formData.front,
        back: formData.back
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(newObj => onAddPokemon(newObj))

    setFormData(initialValue)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleInput}/>
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.front}
            onChange={handleInput}/>
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.back}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
