import React from 'react'

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
            <div className="colors" style={{background: "linear-gradient(" + pokemonType[0] + " 50%, " + pokemonType[1] + " 50% 100%)", padding: '2px 20px 2px 20px', borderRadius: '5px', margin: "10px 5px 10px 5px"}}>
                {name}
            </div>
        )
    }
    else if (pokemonType?.length === 1) {
        return (
            <div className="colors" style={{backgroundColor: pokemonType[0], padding: '2px 20px 2px 20px', borderRadius: '5px', margin: "10px 5px 10px 5px"}}>
                {name}
            </div>
        )
    }
    else {
        return (
            <div className="colors" style={{backgroundColor: "#fff", padding: '2px 20px 2px 20px', borderRadius: '5px', margin: "10px 5px 10px 5px"}}>
                {name}
            </div>
        )
    }
}

export default PokemonType