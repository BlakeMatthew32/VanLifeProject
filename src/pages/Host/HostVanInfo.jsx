import { useOutletContext } from "react-router-dom";
import "../../app.css"

export default function HostVanInfo() {

    const [vanDetail, setVanDetail] = useOutletContext();
    
    return (
        <div className="host-van-info-container">
            <p><span className="text-bold">Name</span>: {vanDetail.name}</p>
            <p><span className="text-bold">Catagory</span>: {vanDetail.type}</p>
            <p><span className="text-bold">Description</span>: {vanDetail.description}</p>
            <p><span className="text-bold">Visibility</span>: Public</p>
        </div>
    )
}