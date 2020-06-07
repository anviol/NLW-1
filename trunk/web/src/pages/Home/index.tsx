import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css'

import logo from '../../assets/logo.png'

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Josiel Schaper"/>
                </header>

                <main>
                    <h1>Barba, Cabelo, Bigode</h1>
                    <p>e uma <b>ótima</b> experiência para <b>você</b>.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre uma agenda</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;
