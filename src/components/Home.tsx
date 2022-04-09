import React from 'react';
import styles from './Home.module.css'
import PokemonCard from './PokemonCard';

type Pokemon = {
    number: number;
    name: string;
    types: Array<string>;
}

const PokemonList: Array<Pokemon> = [
    {number: 1, name: 'Bulbasaur', types: ["Poison", "Grass"]},
    {number: 2, name: 'Ivysaur', types: ["Poison", "Grass"]},
    {number: 3, name: 'Venusaur', types: ["Poison", "Grass"]},
    {number: 4, name: 'Charmander', types: ["Fire"]},
    {number: 5, name: 'Charmeleon', types: ["Fire"]},
    {number: 6, name: 'Charizard', types: ["Fire", "Flying"]},
    {number: 7, name: 'Squirtle', types: ["Water"]},
    {number: 8, name: 'Wartortle', types: ["Water"]},
    {number: 9, name: 'Blastoise', types: ["Water"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
]

function Home() {
    return (
        <div className="home__container">
            <div className={styles.home__content}>
                {PokemonList.map((pokemon: Pokemon, index: number) => (
                    <PokemonCard key={index} number={pokemon.number} name={pokemon.name} types={pokemon.types}/>
                ))}
            </div>
        </div>
    )
}

export default Home