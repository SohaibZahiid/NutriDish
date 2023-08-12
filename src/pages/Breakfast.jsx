import React from "react";
import MealComponent from "../components/Meal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Breakfast() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = !currentUser
    ? "/recipes/breakfast"
    : `/recipes/breakfast/favorites/${currentUser.id}`;

  return <MealComponent APIEndpoint={APIEndpoint} />;
}

export default Breakfast;
