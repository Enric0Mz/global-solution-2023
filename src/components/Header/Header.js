import React from 'react';
import '../../scss/Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="title">
                <h1>Health Buddy</h1>
            </div>
            <div className="description">
                <p>Global Solution 2023 - Engenharia de Software</p>
            </div>
        </header>
    );
}

export default Header;