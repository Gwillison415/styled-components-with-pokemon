import React, { useState, useEffect } from "react";
import { GoogleMap } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
import useWindowSize from "../hooks/useWindowSize";
import useLoadMaps from "../hooks/useLoadMaps";
import { axiosInstance } from "../utils/axiosInstance";

export default function Map({ currentPokeDetails }) {
  const { height, width } = useWindowSize();
  const { isLoaded } = useLoadMaps();
  const [markerLocations, setMarkerLocations] = useState([]);

  async function fetchLocationData() {
    const response = await axiosInstance.get(`/${currentPokeDetails.id}`);
    const { data, status } = response;
    if (status === 200) {
      setMarkerLocations(data.locations);
    }
  }
  useEffect(() => {
    fetchLocationData();
    return () => {};
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          height: height / 2,
          width: width / 2,
        }}
        zoom={9}
        center={{ lat: 32.805431, lng: -117.016287 }}
        options={{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }}
      >
        {markerLocations.map((locationString, index) => (
          <CustomMarker
            key={locationString + index.toString()}
            locationString={locationString}
          ></CustomMarker>
        ))}
      </GoogleMap>
    )
  );
}
