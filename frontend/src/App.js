// src/App.js
import React from 'react';
import AddReference from './components/AddReference/AddReference';
import SearchReference from './components/SearchReference/SearchReference';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Reference and Route Number Manager</h1>
            <AddReference />
            <SearchReference />
        </div>
    );
}

export default App;