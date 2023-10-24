import { Link } from "react-router-dom";

import './styles.css'

const Header = () => {
    return(
        <header>
            <Link to="/" className="logo">Geek Movies</Link>
            <Link to="/favoritos/" className="favoritos">Favoritos</Link>
        </header>
    )
}

export default Header;