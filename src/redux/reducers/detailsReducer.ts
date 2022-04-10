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
    loading: boolean;
    error: string | null;
    pokemons: Array<PokemonAttrs>;
};

export enum ActionType {
    FETCH_POKEMONS_DETAILS = 'fetch_pokemons_details',
    FETCH_POKEMONS_DETAILS_SUCCESS = 'fetch_pokemons_details_success',
    FETCH_POKEMONS_DETAILS_ERROR = 'fetch_pokemons_details_error',
    FETCH_POKEMONS_UPDATE = 'fetch_pokemons_update',
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
    };

let defaultState: PokemonState = {
    loading: false,
    error: null,
    pokemons: [],
}

let detailsReducer = (state = defaultState, action: Action): PokemonState => {
    switch (action.type) {
        case ActionType.FETCH_POKEMONS_DETAILS: {
            return {loading: true, error: null, pokemons: [...state.pokemons]};
        }
        case ActionType.FETCH_POKEMONS_DETAILS_SUCCESS: {
            return {loading: false, error: null, pokemons: [...defaultState.pokemons, ...action.payload]};
        }
        case ActionType.FETCH_POKEMONS_DETAILS_ERROR: {
            return {loading: false, error: action.payload, pokemons: [...state.pokemons]};
        }
        default:
            return state;
    }
}

export default detailsReducer;