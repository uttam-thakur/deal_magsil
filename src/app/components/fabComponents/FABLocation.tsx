"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { useScrolling } from "../../common/hooks/useScrolling";
import "./style.css";

export const handleLocationClick = () => {
  const latitude = 23.709167046049267;
  const longitude = 86.95066008846246;

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
