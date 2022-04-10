import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { ActionType } from '../redux/actions'
import styles from './Header.module.css';

function Header() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    const filterByInput = (e: any) => {
        let input = e.target.value;
        dispatch({type: ActionType.SEARCH_POKEMONS, payload: input});
        dispatch({type: ActionType.HIDE_POKEMON_DETAILS});
        console.log(123)
    };

    return (
        <div className={styles.header__container}>
            <input className={styles.header__input} onChange={e=> {filterByInput(e);}} style={{width: "100%"}} placeholder='Search...' type='text'/>
        </div>
    )
}

export default Header
