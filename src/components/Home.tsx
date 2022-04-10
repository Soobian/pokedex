import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import PokemonCard from './PokemonCard';
import PokemonDetails, { AbilityType, SingleStatProps } from './PokemonDetails';
import { ActionType } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/reducers/index';
import axios from 'axios';

type Pokemon = {
    number: number;
    name: string;
    types: Array<string>;
}

function Home() {
    function cardHandler(number: number): void {
        dispatch({type: ActionType.SHOW_POKEMON_DETAILS, payload: number});
    };

    const dispatch = useDispatch();
    const { data, offset } = useSelector((state: RootState) => state.urls);
    const { pokemons } = useSelector((state: RootState) => state.details);
    const { selectedPokemonId } = useSelector((state: RootState) => state.pick)
    
    const selectPokemon = async () => {dispatch({type: ActionType.SHOW_POKEMON_DETAILS})};

    const fetchPokemonDetails = async () => {
        dispatch({type: ActionType.FETCH_POKEMONS_DETAILS});
        try {
            let res_array: Array<any> = []
            for (const pokemon of data) {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`);
                const pokemon_details = res.data;
                res_array.push(pokemon_details);
            }
            dispatch({
                type: ActionType.FETCH_POKEMONS_DETAILS_SUCCESS,
                payload: res_array,
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

    const fetchPokemons = async (limit: number, action: ActionType) => {
        dispatch({type: action});
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const parsed = (res.data) as {
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
        fetchPokemons(20, ActionType.FETCH_POKEMONS);
    }, []);

    function loadMorePokemons(): void {
        fetchPokemons(20, ActionType.FETCH_MORE_POKEMONS);
    };

    useEffect(() => {
        fetchPokemonDetails()
    }, [data])

    function parseTypes(types: any): Array<string> {
        let parsed_types: Array<string> = []
        types.map(function (obj: any) {
            parsed_types.push(obj.type.name)
        })

        return parsed_types;
    }

    function parseAbiliies(abilities: any): Array<AbilityType> {
        let parsed_abilities: Array<AbilityType> = []
        abilities.map(function (obj: any) {
            let ability: AbilityType = {name: obj.ability.name.replaceAll('-', ' '), hidden: obj.is_hidden}
            parsed_abilities.push(ability)
        })

        return parsed_abilities;
    }

    function parseStats(stats: any): Array<SingleStatProps> {
        let parsed_stats: Array<SingleStatProps> = []
        stats.map(function (obj: any) {
            let stat: SingleStatProps = {name: obj.stat.name, value: obj.base_stat}
            parsed_stats.push(stat)
        })

        return parsed_stats;
    }

    function parseGenders(images: any): Array<boolean> {
        let parsed_genders: Array<boolean> = []
        if(images.front_default != null) {
            parsed_genders.push(true)
        }
        else {
            parsed_genders.push(false)
        }
        if(images.front_female != null) {
            parsed_genders.push(true)
        }
        else {
            parsed_genders.push(false)
        }

        return parsed_genders;
    }

    return (
        <div className={styles.home__container}>
            <div className={styles.home__content}>
                <div className={styles.home__main}>
                    <div className={styles.home__pokemonlist}>
                        {pokemons.map((pokemon, index: number) => {
                            return <PokemonCard 
                                key={index} 
                                index={index}
                                number={pokemon.id} 
                                name={pokemon.name}
                                types={parseTypes(pokemon.types)}
                                clickFunction={cardHandler}
                            />
                        })}
                    </div>
                    <div className={styles.home__button_container}>
                        <button className={styles.home__load_button} onClick={() => loadMorePokemons()}>Load more Pokemons!</button>
                    </div>
                </div>
                {console.log(selectedPokemonId)}
                {selectedPokemonId !== null  &&
                    <PokemonDetails 
                        number={pokemons[selectedPokemonId].id} 
                        name={pokemons[selectedPokemonId].name} 
                        types={parseTypes(pokemons[selectedPokemonId].types)}
                        abilities={parseAbiliies(pokemons[selectedPokemonId].abilities)}
                        height={pokemons[selectedPokemonId].height} 
                        weight={pokemons[selectedPokemonId].weight}
                        genders={parseGenders(pokemons[selectedPokemonId].sprites)}
                        exp={pokemons[selectedPokemonId].base_experience}
                        stats={parseStats(pokemons[selectedPokemonId].stats)}
                     />
                }
            </div>
        </div>
    )
}

export default Home