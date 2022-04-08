import React from 'react'

type PokemonTypeProps = {
    name: string;
    color: string;
};

function PokemonType({name, color}: PokemonTypeProps) {
    return (
        <div className="colors" style={{backgroundColor: color, padding: '2px 20px 2px 20px', borderRadius: '5px'}}>
            {name}
        </div>
    )
}

export default PokemonType