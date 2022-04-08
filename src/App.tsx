import React from 'react';
import styled from 'styled-components';
import Home from './components/Home'
import './App.css';

function App() {
    return (
        <Container>
            <Home/>
        </Container>
    );
}

export default App;

const Container = styled.div`
    background: #f6f8fc;
    display:flex;
    justify-content: center;
    align-items: center;
`
