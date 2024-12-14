"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { useScrolling } from "../../common/hooks/useScrolling";
import "./style.css";

export const handleLocationClick = () => {
  const latitude = 23.709186057354245;
  const longitude = 86.95074188056255;

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  window.open(googleMapsUrl, "_blank");
};
const FABLocation = () => {
  const scrolling = useScrolling({ fallbackTime: 750 });

  return (
    <button
      onClick={handleLocationClick}
      className={`fab-location ${!scrolling ? "visible" : "hidden"}`}
    >
      <FaMapMarkerAlt className="fab-location-icon" />
    </button>
  );
};

export default FABLocation;
