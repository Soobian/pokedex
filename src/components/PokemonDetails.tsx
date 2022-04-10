import React from 'react'
import styles from './PokemonDetails.module.css'
import {numberFormat} from './PokemonCard'
import PokemonType from './PokemonType'

export type AbilityType = {
    name: string;
    hidden: boolean;
}

type PokemonDetailsProps = {
    number: number;
    name: string;
    types: Array<string>;
    abilities: Array<AbilityType>;
    height: number;
    weight: number; 
    genders: Array<boolean>;
    exp: number;
    stats: Array<SingleStatProps>
}

type AbilityProps = {
    ability: AbilityType;
}

type PhysicalParametersProps = {
    title: string;
    value: number;
    unit: string;
    divider: number;
}

export type SingleStatProps = {
    name: string;
    value: number;
}

type StatsProps = {
    stats: Array<SingleStatProps>;
}

function Ability({ability}: AbilityProps) {
    return (
        <div className={styles.ability__container} style={ability.hidden ? {border: '2px solid #ba3030'} : {border: '2px solid #3057ba'}}>
            {ability.name}
            {ability.hidden  && 
                <img alt="" src={require('../assets/icons8-hide-24.png')}/>
            }
        </div>
    )
}

function PhysicalParameters({title, value, unit, divider}: PhysicalParametersProps) {
    return (
        <div className={styles.physicalparameters__container}>
            <div className={styles.physicalparameters__title}>{title.toUpperCase()}</div>
            <div className={styles.physicalparameters__value}>{value/divider} {unit}</div>
        </div>
    )
}

function SingleStat({name, value}: SingleStatProps) {
    const name_dict: { [name: string]: string } = {
        "hp": "HP",
        "attack": "ATK",
        "defense": "DEF",
        "special-attack": "SpA",
        "special-defense": "SpD",
        "speed": "SPD",
        "total": "TOT",
    }

    const color_dict: { [name: string]: string} = {
        "hp": "#df2140",
        "attack": "#fe924c",
        "defense": "#fedc53",
        "special-attack": "#86ddff",
        "special-defense": "#a8ef83",
        "speed": "#fb93a7",
        "total": "#7b96d8",
    }

    return (
        <div className={styles.single_stat__container}>
            <div className={styles.single_stat__title_container} style={{background: color_dict[name]}}>{name_dict[name]}</div>
            <div className={styles.single_stat__value_container}>{value}</div>
        </div>
    )
}

function Stats({stats}: StatsProps) {
    console.log(stats)
    return (
        <div className={styles.stats__container}>
            <div className={styles.physicalparameters__title}>{"stats".toUpperCase()}</div>
            <div className={styles.stats__values}>
                {stats.map((stat: SingleStatProps, index: number) => (
                    <SingleStat key={index} name={stat.name} value={stat.value}/>
                ))}
                <SingleStat name={"total"} value={stats.map(item => item.value).reduce((prev, curr) => prev + curr, 0)}/>
            </div>
        </div>
    )
}

function PokemonDetails({number, name, types, abilities, height, weight, genders, exp, stats}: PokemonDetailsProps) {
    return (
        <div className={styles.pokemondetails__container}>
            <div className={styles.pokemondetails__content}>
                <div className={styles.pokemondetails__sprite}>
                    <img alt={name} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + number + ".png"}/>
                </div>
                <div className={styles.pokemondetails__info__container}>
                <div className={styles.pokemondetails__info__content}>
                    <div className={styles.pokemondetails__number}>{numberFormat(number, 3)}</div>
                </div>
                <div className={styles.pokemondetails__info__content}>
                    <div className={styles.pokemondetails__name}><p>{name[0].toUpperCase() + name.substring(1)}</p></div>
                </div>
                <div className={styles.pokemondetails__types}>
                    {types.map((type: string, index: number) => (
                        <PokemonType name={type} key={index}/>
                    ))}
                </div>
                <div className={styles.pokemondetails__info__content}>
                    <p className={styles.pokemondetails__title__text}>ABLITIES</p>
                    <div className={styles.pokemondetails__abilities}>
                        {abilities.map((ability: AbilityType, index: number) => (
                            <Ability 
                                key={index} 
                                ability={ability}
                            />
                        ))}
                    </div>
                    <div className={styles.pokemondetails__physicalparameters}>
                        <PhysicalParameters title={"height"} value={height} unit={"m"} divider={10}/>
                        <PhysicalParameters title={"weight"} value={weight} unit={"kg"} divider={10}/>
                    </div>
                    <Stats stats={stats}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PokemonDetails
