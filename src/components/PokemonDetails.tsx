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

type PhysicalParametersProps = {
    title: string;
    value: number;
    unit: string;
    divider: number;
}

type SingleStatProps = {
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

function Genders() {
    return (
        <div className={styles.physicalparameters__container}>
            <div className={styles.physicalparameters__title}>{"gender".toUpperCase()}</div>
            <div className={`${styles.genders__container} ${styles.physicalparameters__value}`}>
                <div className={styles.genders__value}>
                    <img alt="" src={require('../assets/icons8-female-30.png')}/>
                </div>
                <div className={styles.genders__value}>
                    <img alt="" src={require('../assets/icons8-male-30.png')}/>
                </div>
            </div>
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
    return (
        <div className={styles.stats__container}>
            <div className={styles.physicalparameters__title}>{"stats".toUpperCase()}</div>
            <div className={styles.stats__values}>
                {stats.map((stat: SingleStatProps, index: number) => (
                    <SingleStat name={stat.name} value={stat.value}/>
                ))}
                <SingleStat name={"total"} value={stats.map(item => item.value).reduce((prev, curr) => prev + curr, 0)}/>
            </div>
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
                    <div className={styles.pokemondetails__number}>{numberFormat(number, 3)}</div>
                </div>
                <div className={styles.pokemondetails__info__content}>
                    <div className={styles.pokemondetails__name}><text>{name}</text></div>
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
                    <div className={styles.pokemondetails__physicalparameters}>
                        <PhysicalParameters title={"height"} value={17} unit={"m"} divider={10}/>
                        <PhysicalParameters title={"weight"} value={845} unit={"kg"} divider={10}/>
                        <Genders />
                        <PhysicalParameters title={"base exp"} value={239} unit={""} divider={1}/>
                    </div>
                    <Stats stats={[
                        {name: "hp", value: 84}, 
                        {name: "attack", value: 84},
                        {name: "defense", value: 84},
                        {name: "special-attack", value: 84},
                        {name: "special-defense", value: 84},
                        {name: "speed", value: 84},
                    ]}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PokemonDetails
