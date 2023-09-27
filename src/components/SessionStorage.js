import React, { useState } from 'react';

function SessionStorage() {
    const [value, setValue] = useState('');

    const handleSetSessionStorage = () => {
        sessionStorage.setItem('data', value);
    };

    const handleGetSessionStorage = () => {
        const data = sessionStorage.getItem('data');
        alert(data || 'No data found');
    };

    return (
        <div>
            <h2>Session Storage</h2>
            <input type="text" placeholder="Enter data" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSetSessionStorage}>Set Session Storage</button>
            <button onClick={handleGetSessionStorage}>Get Session Storage</button>
        </div>
    );
}

export default SessionStorage;