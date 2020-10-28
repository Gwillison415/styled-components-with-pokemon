import React from "react";
import { Marker } from "@react-google-maps/api";


export default function CustomMarker({ locationString }) {
  let [lat, lng] = locationString.split(',')
  lat = Number(lat)
  lng = Number(lng)
  return   <Marker position={{lat,lng}}></Marker>;
}
