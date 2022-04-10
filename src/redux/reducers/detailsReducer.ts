type PokemonAttrs = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    abilities: string[];
    sprites: any;
    base_experience: number;
    stats: any;
};
  
export type PokemonState = {
    detail_loading: boolean;
    error: string | null;
    pokemons: Array<PokemonAttrs>;
    searchTerm: string;
    filter: boolean;
    filteredPokemons: Array<PokemonAttrs>;
};

export enum ActionType {
    FETCH_POKEMONS_DETAILS = 'fetch_pokemons_details',
    FETCH_POKEMONS_DETAILS_SUCCESS = 'fetch_pokemons_details_success',
    FETCH_POKEMONS_DETAILS_ERROR = 'fetch_pokemons_details_error',
    FETCH_POKEMONS_UPDATE = 'fetch_pokemons_update',
    SEARCH_POKEMONS = 'search_pokemons',
}

type Action =
    | {
        type: ActionType.FETCH_POKEMONS_DETAILS
    }
    | {
        type: ActionType.FETCH_POKEMONS_DETAILS_SUCCESS; 
        payload: Array<PokemonAttrs>
    }
    | {
        type: ActionType.FETCH_POKEMONS_DETAILS_ERROR; 
        payload: string
    }
    | {
        type: ActionType.FETCH_POKEMONS_UPDATE;
    }
    | {
        type: ActionType.SEARCH_POKEMONS;
        payload: string;
    };

let defaultState: PokemonState = {
    detail_loading: false,
    error: null,
    pokemons: [],
    searchTerm: "",
    filter: false,
    filteredPokemons: [],
}



let detailsReducer = (state = defaultState, action: Action): PokemonState => {
    switch (action.type) {
        case ActionType.FETCH_POKEMONS_DETAILS: {
            return {detail_loading: true, error: null, pokemons: [...state.pokemons], searchTerm: "", filter: false, filteredPokemons: state.filteredPokemons};
        }
        case ActionType.FETCH_POKEMONS_DETAILS_SUCCESS: {
            return {detail_loading: false, error: null, pokemons: [...defaultState.pokemons, ...action.payload], searchTerm: "", filter: false, filteredPokemons: [...defaultState.pokemons, ...action.payload]};
        }
        case ActionType.FETCH_POKEMONS_DETAILS_ERROR: {
            return {detail_loading: false, error: action.payload, pokemons: [...state.pokemons], searchTerm: "", filter: false, filteredPokemons: state.filteredPokemons};
        }
        case ActionType.SEARCH_POKEMONS: {
            let newState = Object.assign({}, state);

            let value = action.payload;
            console.log(action);
            let filteredValues = state.pokemons.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
                    pokemon.id.toString().toLowerCase().includes(value);
            });

            let appliedFilters = state.filter;
            if (value) {
                if (appliedFilters === false)
                    appliedFilters = true;
                newState.filteredPokemons = filteredValues;
            } else {
                appliedFilters = false;
                if (!appliedFilters) {
                    newState.filteredPokemons = newState.pokemons;
                }
            }
            return newState;
        }
        default:
            return state;
    }
}

export default detailsReducer;