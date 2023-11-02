import "../App.css"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink
                    className={({isActive}) => isActive ? "active-nav" : null}
                    to="/host"
                >
                    Host
                </NavLink> 
                <NavLink
                    className={({isActive}) => isActive ? "active-nav" : null}    
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "active-nav" : null}    
                    to="/vans"
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

   