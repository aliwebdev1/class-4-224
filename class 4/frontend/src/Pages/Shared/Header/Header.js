import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">Doctor Hourse</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/appointment">Appointment</NavLink>
                        </li>
                        {
                            user?.uid ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/dashboard">Dashboard </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogOut} className="nav-link btn btn-outline-danger shadow-lg" >Sign Out</button>
                                </li>
                            </> : <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;