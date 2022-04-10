import React, { useState } from 'react'
import PokemonType from './PokemonType';
import styles from './PokemonCard.module.css'


type PokemonCardProps = {
    index: number;
    number: number;
    name: string;
    types: Array<string>;
    clickFunction: (number: number) => void;
};

export function numberFormat (num: number, size: number): string {
    let s: string = num + "";
    while (s.length < size) s = "0" + s;
    s = "#" + s;
    return s;
}

function PokemonCard({index, number, name, types, clickFunction}: PokemonCardProps) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className={styles.pokemoncard__card} onClick={() => clickFunction(index)} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className={styles.pokemoncard__sprite}>
                <img alt={name} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + number + ".png"}/>
            </div>
            <div className={isShown ? styles.pokemoncard__info_hover : styles.pokemoncard__info}>
                <div className={styles.pokemoncard__infoblock}>
                    <div className={styles.pokemoncard__number}>{numberFormat(number, 3)}</div>
                </div>
                <div className={styles.pokemoncard__infoblock}>
                    <div className={styles.pokemoncard__name}><p>{name[0].toUpperCase() + name.substring(1)}</p></div>
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