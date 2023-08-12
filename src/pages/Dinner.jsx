import React from "react";
import MealComponent from "../components/Meal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Dinner() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = !currentUser
    ? "/recipes/dinner"
    : `/recipes/dinner/favorites/${currentUser.id}`;

  return <MealComponent APIEndpoint={APIEndpoint} />;
}

export default Dinner;
