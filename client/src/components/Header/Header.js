import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logoGame">
            <a href="/" className="logoImg"><img src="/logoGame.png" alt="The Game Library Official" /></a>
            
            </div>
            
            <nav>
                <ul className="navContainer">
                    <li className="navButton">
                        <NavLink className="navText" activeClassName="active-navText" exact={true} to="/">Home</NavLink>
                       
                    </li>
                    <li className="navButton">
                    <NavLink className="navText" activeClassName="active-navText" exact={true} to="/register">Register</NavLink>
                        
                    </li>
                    <li className="navButton">
                    <NavLink className="navText" activeClassName="active-navText" exact={true} to="/login">Login</NavLink>
                        
                    </li>
                    <li className="navButton">
                    <NavLink className="navText" activeClassName="active-navText" exact={true} to="/add">Add Game</NavLink>
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
