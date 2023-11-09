import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import "../../App.css"

export default function HostVanDetail() {
    const params = useParams()

    const [vanDetail, setVanDetail] = useState({})
    
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVanDetail(data.vans[0])
            })
    }, [])

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    return (
        <div className="van-detail-container">
            <Link 
                to=".."
                relative="path"
                className="back-button"
            >
                ⇦ Back to vans list
            </Link>
            {vanDetail ? (
                <>
                    <div className="host-van-detail">
                        <img src={vanDetail.imageUrl} />
                        <div className="host-van-detail-info">
                            <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
                            <h2>{vanDetail.name}</h2>
                            <p className="van-price"><span className="text-bold">${vanDetail.price}</span>/day</p>
                        </div>
                    </div>
                    <div className="host-van-details-nav">
                        <NavLink
                            to="."
                            end
                            style={({isActive}) => isActive ? activeStyles : null}
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            style={({isActive}) => isActive ? activeStyles : null}
                        >
                            Photos
                        </NavLink>
                    </div>
                
                    <Outlet />
                </>
                
            ) : <h2>Loading...</h2>}
        </div>
    )
}