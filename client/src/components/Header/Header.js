import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logoGame">
            <a href="/" className="logoImg"><img src="/logoGame.png" alt="The Game Library Official" /></a>
            
            </div>
            
            <nav>
                <ul className="navContainer">
                    <li className="navButton">
                        <a href="/" className="navText">Home</a>
                    </li>
                    <li className="navButton">
                        <a href="/" className="navText">Register</a>
                    </li>
                    <li className="navButton">
                        <a href="/" className="navText">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
