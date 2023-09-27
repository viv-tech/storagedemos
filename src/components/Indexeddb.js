import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

function IndexedDB() {
    const [value, setValue] = useState('');
    const [dataFromDB, setDataFromDB] = useState('');

    useEffect(() => {
        // Open IndexedDB database
        openDB('my-database', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('my-store')) {
                    const objstore = db.createObjectStore('my-store', { keyPath: 'id', autoIncrement: true });
                    objstore.createIndex('nameIndex', 'name', { unique: false });
                }
            },
        });
    }, []);

    const handleSetIndexedDB = async () => {
        const db = await openDB('my-database', 1);
        const tx = db.transaction('my-store', 'readwrite');
        const store = tx.objectStore('my-store');
        await store.put({ data: value });
        await tx.done;
    };

    const handleGetIndexedDB = async () => {
        const db = await openDB('my-database', 1);
        const tx = db.transaction('my-store', 'readonly');
        const store = tx.objectStore('my-store');
        const data = await store.getAll();
        setDataFromDB(data.map((item) => item.data).join(', '));
    };

    return (
        <div>
            <h2>IndexedDB</h2>
            <input type="text" placeholder="Enter data" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSetIndexedDB}>Set IndexedDB</button>
            <button onClick={handleGetIndexedDB}>Get IndexedDB</button>
            <p>Data from IndexedDB: {dataFromDB}</p>
        </div>
    );
}

export default IndexedDB;