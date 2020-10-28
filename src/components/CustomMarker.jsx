import React from "react";
import { Marker } from "@react-google-maps/api";


export default function CustomMarker({ locationString }) {
  const [lat, lng] = locationString.split(',')
  const position = {lat,lng}
console.log('position', position)
  return   <Marker position={position}></Marker>;
}
