import { Outlet, Link } from "react-router-dom"
import "../../App.css"

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <Link to="/host">Overview</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
        
    )
}