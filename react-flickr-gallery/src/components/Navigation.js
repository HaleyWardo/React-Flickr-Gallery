import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div>
        <ul className="main-nav">
            <li className="list-item">
                <NavLink to="/dinosaurs">Dinosaurs</NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/porgs">Porgs</NavLink>
            </li>
            <li className="list-item">
                <NavLink to="/kittens">Kittens</NavLink>
            </li>
        </ul>
    </div>
);

export default Navigation;