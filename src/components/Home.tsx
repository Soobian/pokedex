import React, { useState } from 'react';
import styles from './Home.module.css'
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';

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
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
]

function Home() {
    const [clickedCard, setClickedCard] = useState< number | undefined>(undefined);

    function cardHandler(number: number): void {
        setClickedCard(number);
    };

    return (
        <div className={styles.home__container}>
            <div className={styles.home__content}>
                <div className={styles.home__pokemonlist}>
                    {PokemonList.map((pokemon: Pokemon, index: number) => (
                        <PokemonCard 
                            key={index} 
                            number={pokemon.number} 
                            name={pokemon.name} 
                            types={pokemon.types}
                            clickFunction={cardHandler}
                        />
                    ))}
                </div>
                {clickedCard !== undefined &&
                    <PokemonDetails 
                        number={clickedCard} 
                        name={PokemonList[clickedCard - 1].name} 
                        types={PokemonList[clickedCard - 1].types}
                        abilities={[{name: "Torrent", hidden: false}, {name: "Defiant", hidden: true}]}
                     />
                }
            </div>
        </div>
    )
}

export default Home