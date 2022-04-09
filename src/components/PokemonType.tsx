import React from 'react'

import styles from './PokemonType.module.css'

type PokemonTypeProps = {
    name: string;
}

let pokemonTypes = new Map<string, Array<string>>([
    ["Grass", ["#9bcc50"]],
    ["Poison", ["#b97fc9"]],
    ["Fire", ["#fd7d24"]],
    ["Water", ["#4592c4"]],
    ["Bug", ["#729f3f"]],
    ["Flying", ["#30a7d7", "#bdb9b8"]],
    ["Normal", ["#a4acaf"]],
    ["Electric", ["#f1dc55"]],
    ["Ground", ["#f7de3f", "#5b532f"]],
    ["Fairy", ["#fdb9e9"]]
]);

function PokemonType({name}: PokemonTypeProps) {
    let pokemonType: Array<string> | undefined = pokemonTypes.get(name)
    if (pokemonType?.length === 2){
        return (
            <div className={styles.pokemontype__block} style={{background: "linear-gradient(" + pokemonType[0] + " 50%, " + pokemonType[1] + " 50% 100%)"}}>
                <text className={styles.pokemontype__text}>{name}</text>
            </div>
        )
    }
    else if (pokemonType?.length === 1) {
        return (
            <div className={styles.pokemontype__block} style={{backgroundColor: pokemonType[0]}}>
                <text className={styles.pokemontype__text}>{name}</text>
            </div>
        )
    }
    else {
        return (
            <div className={styles.pokemontype__block} style={{backgroundColor: "#fff"}}>
                <text className={styles.pokemontype__text}>{name}</text>
            </div>
        )
    }
}

export default PokemonType