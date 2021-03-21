import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logoGame"></div>
            
            <nav>
                <ul className="navContainer">
                    <li className="navButton">
                        <a href="/">Home</a>
                    </li>
                    <li className="navButton">
                        <a href="/">Register</a>
                    </li>
                    <li className="navButton">
                        <a href="/">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
