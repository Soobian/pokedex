import React from 'react'
import styled from 'styled-components';
import PokemonType from './PokemonType';



type PokemonCardProps = {
    number: number;
    name: string;
    types: Array<string>;
};

function PokemonCard({number, name, types}: PokemonCardProps) {
    return (
        <Card>
            <Sprite>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"}/>
            </Sprite>
            <Info>
                <InfoBlock>
                    <InfoText>#{number}</InfoText>
                </InfoBlock>
                <InfoBlock>
                    <NameText><text>{name}</text></NameText>
                </InfoBlock>
                <TypeBlock>
                    {types.map((type: string, index: number) => (
                        <PokemonType name={type} key={index}/>
                    ))}
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