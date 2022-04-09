import React from 'react'
import PokemonType from './PokemonType';
import styles from './PokemonCard.module.css'


type PokemonCardProps = {
    number: number;
    name: string;
    types: Array<string>;
};

function numberFormat (num: number, size: number): string {
    let s: string = num + "";
    while (s.length < size) s = "0" + s;
    s = "#" + s;
    return s;
}

function PokemonCard({number, name, types}: PokemonCardProps) {
    return (
        <div className={styles.pokemoncard__card}>
            <div className={styles.pokemoncard__sprite}>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"}/>
            </div>
            <div className={styles.pokemoncard__info}>
                <div className={styles.pokemoncard__infoblock}>
                    <div className={styles.pokemoncard__number}>{numberFormat(number, 3)}</div>
                </div>
                <div className={styles.pokemoncard__infoblock}>
                    <div className={styles.pokemoncard__name}><text>{name}</text></div>
                </div>
                <div className={styles.pokemoncard__types}>
                    {types.map((type: string, index: number) => (
                        <PokemonType name={type} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard