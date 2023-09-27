import React, { useState } from 'react';

function LocalStorage() {
    const [value, setValue] = useState('');

    const handleSetLocalStorage = () => {
        localStorage.setItem('data', value);
    };

    const handleGetLocalStorage = () => {
        const data = localStorage.getItem('data');
        alert(data || 'No data found');
    };

    return (
        <div>
            <h2>Local Storage</h2>
            <input type="text" placeholder="Enter data" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSetLocalStorage}>Set Local Storage</button>
            <button onClick={handleGetLocalStorage}>Get Local Storage</button>
        </div>
    );
}

export default LocalStorage;