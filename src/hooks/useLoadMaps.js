import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

export default function useLoadMaps() {
  return useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    preventGoogleFontsLoading: true,
    libraries,
  });
}
