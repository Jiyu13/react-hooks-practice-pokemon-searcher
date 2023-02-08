import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  // set state variables
  const [pokemons, setPokemons] = useState([])
  const [searchText, setSearchText] = useState("")

  // GET request
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokemons(data))
  }, [])

    // capture user search Input
    function handleSearch(e) {
      const search = e.target.value
      setSearchText(search)
      console.log(search)
    }
  

  // onSeach CB from Seach
  const searchResult = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={searchResult}/>
    </Container>
  );
}

export default PokemonPage;
