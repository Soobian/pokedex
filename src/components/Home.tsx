import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

type Pokemon = {
    number: number;
    name: string;
    types: Array<string>;
    stripe: string;
}

const PokemonList: Array<Pokemon> = [

]

function Home() {
    return (
        <Container>
            <Content>
                <PokemonCard number={3} name="Venusaur" types={["Poison", "Grass"]}/>
                <PokemonCard number={3} name="Venusaur" types={["Poison", "Grass"]}/>
                <PokemonCard number={3} name="Venusaur" types={["Poison", "Grass"]}/>
                <PokemonCard number={3} name="Venusaur" types={["Poison", "Grass"]}/>
                <PokemonCard number={3} name="Venusaur" types={["Poison", "Grass"]}/>
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