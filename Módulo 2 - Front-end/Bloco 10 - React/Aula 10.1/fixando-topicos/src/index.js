import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <div>
            <h1>Oh Clock!</h1>
            <h2>It is {new Date().toLocaleTimeString('pt-br', { hour12: true })}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);