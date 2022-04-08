import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

function Home() {
    return (
        <Container>
            <Content>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
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