import { useEffect } from 'react';
import IgniteLogo from '../assets/ignite.svg';

import '../styles/header.scss';


export function Header() {
    return (
        <header>
            <img src={IgniteLogo} alt="Ignite" />

            <div className="profile-info">
                <strong>Caique Moreira</strong>

                <img src="https://avatars.githubusercontent.com/u/56305107?v=4" alt="User" />
            </div>
        </header>
    )
}