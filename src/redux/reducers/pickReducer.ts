export type PokemonState = {
    pick_loading: boolean;
    error: string | null;
    selectedPokemonId: number | null;
};

export enum ActionType {
    SHOW_POKEMON_DETAILS = 'show_pokemon_details',
    HIDE_POKEMON_DETAILS = 'hide_pokemon_details',
}

type Action =
    | {
        type: ActionType.SHOW_POKEMON_DETAILS
        payload: number;
    }
    | {
        type: ActionType.HIDE_POKEMON_DETAILS
    };

let defaultState: PokemonState = {
    pick_loading: false,
    error: null,
    selectedPokemonId: null,
}

let pickReducer = (state = defaultState, action: Action): PokemonState => {
    switch (action.type) {
        case ActionType.SHOW_POKEMON_DETAILS: {
            return {pick_loading: false, error: null, selectedPokemonId: action.payload};
        }
        case ActionType.HIDE_POKEMON_DETAILS: {
            return {pick_loading: false, error: null, selectedPokemonId: null};
        }
        default:
            return state;
    }
}

export default pickReducer;