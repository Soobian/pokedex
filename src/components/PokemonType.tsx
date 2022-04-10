import React from 'react'

import styles from './PokemonType.module.css'

type PokemonTypeProps = {
    name: string;
}

let pokemonTypes = new Map<string, Array<string>>([
    ["grass", ["#9bcc50"]],
    ["poison", ["#b97fc9"]],
    ["fire", ["#fd7d24"]],
    ["water", ["#4592c4"]],
    ["bug", ["#729f3f"]],
    ["flying", ["#30a7d7", "#bdb9b8"]],
    ["normal", ["#a4acaf"]],
    ["electric", ["#f1dc55"]],
    ["ground", ["#f7de3f", "#5b532f"]],
    ["fairy", ["#fdb9e9"]]
]);

function PokemonType({name}: PokemonTypeProps) {
    let pokemonType: Array<string> | undefined = pokemonTypes.get(name)
    if (pokemonType?.length === 2){
        return (
            <div className={styles.pokemontype__block} style={{background: "linear-gradient(" + pokemonType[0] + " 50%, " + pokemonType[1] + " 50% 100%)"}}>
                <p className={styles.pokemontype__text}>{name}</p>
            </div>
        )
    }
    else if (pokemonType?.length === 1) {
        return (
            <div className={styles.pokemontype__block} style={{backgroundColor: pokemonType[0]}}>
                <p className={styles.pokemontype__text}>{name}</p>
            </div>
        )
    }
    else {
        return (
            <div className={styles.pokemontype__block} style={{backgroundColor: "#fff"}}>
                <p className={styles.pokemontype__text}>{name}</p>
            </div>
        )
    }
}

export default PokemonType