import { useOutletContext } from "react-router-dom";
import "../../app.css"

export default function HostVanPhotos() {
    
    const [vanDetail, setVanDetail] = useOutletContext();
    
    return (
        <div className="host-van-photos-container">
            <img style={{width: "45%"}} src={vanDetail.imageUrl} />
        </div>
    )
}