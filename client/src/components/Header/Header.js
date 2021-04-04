import './Header.css'
import { auth } from '../../utils/firebase';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <header className="header">
            <div className="logoGame">
                <NavLink className="logoImg" exact={true} to="/home"><img src="/logoGame.png" alt="The Game Library Official" /></NavLink>
            </div>

            <nav>
                <ul className="navContainer">
                    <li className="navButton">
                        <NavLink className="navText" activeClassName="active-navText" exact={true} to="/home">Home</NavLink>
                    </li>

                    {auth.currentUser
                        ?
                        <>
                        <li className="navButton">
                            <NavLink className="navText" activeClassName="active-navText" exact={true} to="/my-games"> My Games</NavLink>
                        </li>
                        <li className="navButton">
                            <NavLink className="navText" activeClassName="active-navText" exact={true} to="/add">Add Game</NavLink>
                        </li>
                        <li className="navButton">
                        <NavLink className="navText" activeClassName="active-navText" exact={true} to="/logout">Logout</NavLink>
                        </li>
                        </>
                        :
                        <>
                            <li className="navButton">
                                <NavLink className="navText" activeClassName="active-navText" exact={true} to="/register">Register</NavLink>
                            </li>
                            <li className="navButton">
                                <NavLink className="navText" activeClassName="active-navText" exact={true} to="/login">Login</NavLink>
                            </li>
                        </>
                    }
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;
