import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = userPosition || { lat: 48.8566, lng: 2.3522 }; 

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition({ lat: latitude, lng: longitude });
        },
        () => {
          alert("Impossible de récupérer la localisation");
        }
      );
    }
  }, []);

  const handleMapClick = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setMarkerPosition({ lat, lng });
  };

  return (
    <div>
      <h3></h3>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}
        >
          {userPosition && (
            <Marker position={userPosition} label="Votre position" />
          )}
          {markerPosition && (
            <Marker position={markerPosition} label="Choisie" />
          )}
        </GoogleMap>
      ) : (
        <div>Chargement de la carte...</div>
      )}
    </div>
  );
};

export default Map;
