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
      // const { current_location, status } = data;
      console.log("data", data);
      setMarkerLocations(data.locations);
      // setMarkerLocation({ current_location, status });
    }
  }
  useEffect(() => {
    fetchLocationData();
    return () => {};
  }, [currentPokeDetails.id]);

  console.log("markerLocations", markerLocations);
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          height: height / 3,
          width: width / 3,
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
        {markerLocations.map((locationString) => (
          <CustomMarker locationString={locationString}></CustomMarker>
        ))}
      </GoogleMap>
    )
  );
}
