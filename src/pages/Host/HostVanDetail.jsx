import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
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


    return (
        <div className="van-detail-container">
            {vanDetail ? (
                <div className="host-van-detail">
                    <img src={vanDetail.imageUrl} />
                    <div className="host-van-detail-info">
                        <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
                        <h2>{vanDetail.name}</h2>
                        <p className="van-price"><span className="text-bold">${vanDetail.price}</span>/day</p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}