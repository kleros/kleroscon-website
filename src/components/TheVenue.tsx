import React from "react";
import theVenueURL from "svgs/icons/the-venue.svg";

interface ITheVenue {}

const TheVenue: React.FC<ITheVenue> = ({}) => {
  return <img src={theVenueURL} alt="Kleros Court Icon" />;
};
export default TheVenue;
