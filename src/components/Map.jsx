// import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
function Map() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");
  // const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([42, 0]);
  if (setMapPosition)
    return (
      <div className={styles.mapContainer}>
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
}

export default Map;
