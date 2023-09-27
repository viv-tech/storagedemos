import React from 'react';

function CookiesStorage() {
    const setCookie = () => {
        document.cookie = 'username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';
    };

    const getCookie = () => {
        const cookies = document.cookie.split(';');
        const cookieData = cookies.find((cookie) => cookie.includes('username='));
        if (cookieData) {
            return cookieData.split('=')[1].trim();
        }
        return 'No data found';
    };

    return (
        <div>
            <h2>Cookies Storage</h2>
            <button onClick={setCookie}>Set Cookie</button>
            <p>Cookie Value: {getCookie()}</p>
        </div>
    );
}

export default CookiesStorage;