import { Outlet, NavLink } from "react-router-dom"
import "../../App.css"


export default function HostLayout() {
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <>
            <nav className="host-nav">

                <NavLink
                    style={({isActive}) => isActive ? activeStyles : null}
                    end
                    to="."
                >
                    Dashboard
                </NavLink>

                <NavLink
                    style={({isActive}) => isActive ? activeStyles : null}
                    to="income"
                >
                    Income
                </NavLink>
                
                <NavLink
                    style={({isActive}) => isActive ? activeStyles : null}
                    to="vans"
                >
                    Vans
                </NavLink>

                <NavLink
                    style={({isActive}) => isActive ? activeStyles : null}
                    to="reviews"
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet />
        </>
        
    )
}