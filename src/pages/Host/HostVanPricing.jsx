import { useOutletContext } from "react-router-dom"
import "../../app.css"

export default function HostVanPricing() {

    const [vanDetail, setVanDetail] = useOutletContext();
    
    return (
        <div className="host-van-info-container">
            <p><span className="text-bold">${vanDetail.price}</span> / day</p>
        </div>
    )
}