type PokemonListAttrs = {
    name: string;
    url: string;
}

export type PokemonState = {
    loading: boolean;
    error: string | null;
    data: Array<PokemonListAttrs>;
};

export enum ActionType {
    FETCH_POKEMONS = 'fetch_pokemons',
    FETCH_POKEMONS_SUCCESS = 'fetch_pokemons_success',
    FETCH_POKEMONS_ERROR = 'fetch_pokemons_error',
}

type Action =
    | {type: ActionType.FETCH_POKEMONS}
    | {
        type: ActionType.FETCH_POKEMONS_SUCCESS; 
        payload: Array<PokemonListAttrs>
    }
    | {
        type: ActionType.FETCH_POKEMONS_ERROR; 
        payload: string
    };

let defaultState: PokemonState = {
    loading: false,
    error: null,
    data: [],
}

let urlReducer = (state = defaultState, action: Action): PokemonState => {
    switch (action.type) {
        case ActionType.FETCH_POKEMONS: {
            return {loading: true, error: null, data: [...state.data]};
        }
        case ActionType.FETCH_POKEMONS_SUCCESS: {
            return {loading: false, error: null, data: [...state.data, ...action.payload]};
        }
        case ActionType.FETCH_POKEMONS_ERROR: {
            return {loading: false, error: action.payload, data: [...state.data]};
        }
        default:
            return state;
    }
}

export default urlReducer;