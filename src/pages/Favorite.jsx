import React from "react";
import MealComponent from "../components/Meal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Favorite() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = `/recipes/favorites/${currentUser.id}`;

  return <MealComponent APIEndpoint={APIEndpoint} />;
}

export default Favorite;
