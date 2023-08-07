//paired programming with Anthony, Josh, Kye, Vivian, and Richard

import React, { useState } from 'react';
import axios from 'axios';


const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const FetchPokiWithAxios = () => {
        axios.get (`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then (response => {
            setPokemonList(response.data.results) //axios will be .data and then .keyvalue
            console.log(pokemonList)
        })
        .catch(err=>{
            console.log(err)
        })
    }



    return (
        <div>

            <h1>Pokemon</h1>
            <ul>
                {pokemonList.map((pokemon, idx) => 
                <li key={idx}>{pokemon.name}</li>
                )}
            </ul>
            <button onClick ={FetchPokiWithAxios}>Catch them all!</button>

        </div>
    )
}

export default Pokemon