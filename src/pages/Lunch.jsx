import React from "react";
import MealComponent from "../components/Meal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Lunch() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = !currentUser
    ? "/recipes/lunch"
    : `/recipes/lunch/favorites/${currentUser.id}`;

  return <MealComponent APIEndpoint={APIEndpoint} />;
}

export default Lunch;
