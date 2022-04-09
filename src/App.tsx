import React from 'react';
import Home from './components/Home'
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app__container}>
            <Home/>
        </div>
    );
}

export default App;
