import React from 'react';
import styled from 'styled-components';
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
        <Container>
            <Content>
                {PokemonList.map((pokemon: Pokemon, index: number) => (
                    <PokemonCard key={index} number={pokemon.number} name={pokemon.name} types={pokemon.types}/>
                ))}
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    background: #f6f8fc;
    width:80%;
`

const Content = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    flex: 1;
`

const Text = styled.div`
    background: #616166;
`