import React from 'react'
import styles from './PokemonDetails.module.css'
import {numberFormat} from './PokemonCard'
import PokemonType from './PokemonType'

type AbilityType = {
    name: string;
    hidden: boolean;
}

type PokemonDetailsProps = {
    number: number;
    name: string;
    types: Array<string>;
    abilities: Array<AbilityType>;
}

type AbilityProps = {
    ability: AbilityType;
}

type InfoBlockProps = {
    title: string;
    value: number;
    unit: string;
}

function Ability({ability}: AbilityProps) {
    return (
        <div className={styles.ability__container} style={ability.hidden ? {border: '2px solid #3057ba'} : {border: '2px solid #ba3030'}}>
            {ability.name}
            {ability.hidden  && 
                <img alt="" src={require('../assets/icons8-hide-24.png')}/>
            }
        </div>
    )
}

function InfoBlock({title, value, unit}: InfoBlockProps) {
    return (
        <div className={styles.infoblock__container}>
            <div className={styles.infoblock__title}>{title.toUpperCase()}</div>
            <div className={styles.infoblock__value}>{value/10} {unit}</div>
        </div>
    )
}

function PokemonDetails({number, name, types, abilities}: PokemonDetailsProps) {
    return (
        <div className={styles.pokemondetails__container}>
            <div className={styles.pokemondetails__content}>
                <div className={styles.pokemondetails__sprite}>
                    <img alt={name} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + number + ".png"}/>
                </div>
                <div className={styles.pokemondetails__info__container}>
                <div className={styles.pokemondetails__info__content}>
                    <div className={styles.pokemoncard__number}>{numberFormat(number, 3)}</div>
                </div>
                <div className={styles.pokemondetails__info__content}>
                    <div className={styles.pokemoncard__name}><text>{name}</text></div>
                </div>
                <div className={styles.pokemondetails__types}>
                    {types.map((type: string, index: number) => (
                        <PokemonType name={type} key={index}/>
                    ))}
                </div>
                <div className={styles.pokemondetails__info__content}>
                    <text className={styles.pokemondetails__title__text}>ABLITIES</text>
                    <div className={styles.pokemondetails__abilities}>
                        {abilities.map((ability: AbilityType, index: number) => (
                            <Ability 
                                key={index} 
                                ability={ability}
                            />
                        ))}
                    </div>
                    <div className={styles.pokemondetails__infoblocks}>
                        <InfoBlock title={"height"} value={17} unit={"m"}/>
                        <InfoBlock title={"weight"} value={845} unit={"kg"}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PokemonDetails
