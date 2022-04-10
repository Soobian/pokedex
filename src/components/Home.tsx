import React, { useEffect } from 'react';
import styles from './Home.module.css'
import PokemonCard from './PokemonCard';
import { ActionType } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/reducers/index'

type Pokemon = {
    number: number;
    name: string;
    types: Array<string>;
}

const PokemonList: Array<Pokemon> = [
    {number: 1, name: 'Bulbasaur', types: ["Poison", "Grass"]},
    {number: 2, name: 'Ivysaur', types: ["Poison", "Grass"]},
    {number: 3, name: 'Venusaur', types: ["Poison", "Grass"]},
    {number: 4, name: 'Charmander', types: ["Fire"]},
    {number: 5, name: 'Charmeleon', types: ["Fire"]},
    {number: 6, name: 'Charizard', types: ["Fire", "Flying"]},
    {number: 7, name: 'Squirtle', types: ["Water"]},
    {number: 8, name: 'Wartortle', types: ["Water"]},
    {number: 9, name: 'Blastoise', types: ["Water"]},
    {number: 10, name: 'Caterpie', types: ["Bug"]},
]

function Home() {
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.urls);
    const { pokemons } = useSelector((state: RootState) => state.details);
    const { selectedPokemonId } = useSelector((state: RootState) => state.pick)
    
    const selectPokemon = async () => {dispatch({type: ActionType.SHOW_POKEMON_DETAILS})};

    const fetchPokemonDetails = async (name: string) => {
        dispatch({type: ActionType.FETCH_POKEMONS_DETAILS});
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            const parsed = await res.json()
            const pokemon_details = parsed;
            dispatch({
                type: ActionType.FETCH_POKEMONS_DETAILS_SUCCESS,
                payload: pokemon_details,
            });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({type: ActionType.FETCH_POKEMONS_DETAILS_ERROR, payload: error.message});
            } else {
                dispatch({
                    type: ActionType.FETCH_POKEMONS_DETAILS_ERROR,
                    payload: 'Something went wrong',
                });
            }
        }
    };

    const fetchPokemons = async (offset: number, limit: number) => {
        dispatch({type: ActionType.FETCH_POKEMONS});
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const parsed = (await res.json()) as {
                results: [
                    {
                        name: string;
                        url: string;
                    },
                ];
            };
            const pokemons_list = parsed.results;
            dispatch({
                type: ActionType.FETCH_POKEMONS_SUCCESS,
                payload: pokemons_list,
            });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({type: ActionType.FETCH_POKEMONS_ERROR, payload: error.message});
            } else {
                dispatch({
                    type: ActionType.FETCH_POKEMONS_ERROR,
                    payload: 'Something went wrong',
                });
            }
        }
    };

    useEffect(() => {
        fetchPokemons(0, 20);
    }, []);

    useEffect(() => {
        for (var i = 0; i < data.length; i++) {
            fetchPokemonDetails(data[i].name)
        }
    }, [data])

    return (
        <div className={styles.home__container}>
            <div className={styles.home__content}>
                {PokemonList.map((pokemon: Pokemon, index: number) => (
                    <PokemonCard 
                        key={index} 
                        number={pokemon.number} 
                        name={pokemon.name} 
                        types={pokemon.types}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home