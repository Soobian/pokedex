type PokemonListAttrs = {
    name: string;
    url: string;
}

export type PokemonState = {
    url_loading: boolean;
    error: string | null;
    data: Array<PokemonListAttrs>;
    offset: number;
};

export enum ActionType {
    FETCH_POKEMONS = 'fetch_pokemons',
    FETCH_POKEMONS_SUCCESS = 'fetch_pokemons_success',
    FETCH_POKEMONS_ERROR = 'fetch_pokemons_error',
    FETCH_MORE_POKEMONS = 'fetch_more_pokemons',
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
    }
    | {
        type: ActionType.FETCH_MORE_POKEMONS;
    };

let defaultState: PokemonState = {
    url_loading: false,
    error: null,
    data: [],
    offset: 0,
}

let urlReducer = (state = defaultState, action: Action): PokemonState => {
    switch (action.type) {
        case ActionType.FETCH_POKEMONS: {
            return {url_loading: true, error: null, data: [...state.data], offset: 20};
        }
        case ActionType.FETCH_POKEMONS_SUCCESS: {
            return {url_loading: false, error: null, data: [...state.data, ...action.payload], offset: state.offset};
        }
        case ActionType.FETCH_POKEMONS_ERROR: {
            return {url_loading: false, error: action.payload, data: [...state.data], offset: state.offset};
        }
        case ActionType.FETCH_MORE_POKEMONS: {
            return {url_loading: false, error: null, data: [...state.data], offset: state.offset + 20};
        }
        default:
            return state;
    }
}

export default urlReducer;