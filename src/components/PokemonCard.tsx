import React from 'react'
import styled from 'styled-components';
import PokemonTypes from './PokemonType';

function PokemonCard() {
    return (
        <Card>
            <Sprite>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
            </Sprite>
            <Info>
                <InfoBlock>
                    <InfoText>N°1</InfoText>
                </InfoBlock>
                <InfoBlock>
                    <NameText><text>Bulbazaur</text></NameText>
                </InfoBlock>
                <TypeBlock>
                    <PokemonTypes name="Grass" color="#9bcc50"/>
                    <PokemonTypes name="Poison" color="#b97fc9"/>
                </TypeBlock>
            </Info>
        </Card>
    )
}

export default PokemonCard

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex: 1;
    border: 1px solid red;
`

const Sprite = styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
    position: relative;
    img {
        position: absolute;
        top: 0px;
        width: 140px;
    }
`

const Info = styled.div`
    flex: 1;
    flex-direction: column;
    background: white;
    border-radius: 10px 10px 10px 10px;
    color: black;
    -webkit-box-shadow: 0px 0px 11px -3px rgba(198, 198, 198, 1);
    -moz-box-shadow: 0px 0px 11px -3px rgba(198, 198, 198, 1);
    box-shadow: 0px 0px 11px -3px rgba(198, 198, 198, 1);
`

const InfoBlock = styled.div`
    padding: 10px;
`

const NameText = styled.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

const InfoText = styled.div`
    flex: 1;
`

const TypeBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`