import React from "react";
import Meal from "../components/Meal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Breakfast() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = !currentUser
    ? "/recipes/breakfast"
    : `/recipes/breakfast/favorites/${currentUser.id}`;

  return <Meal APIEndpoint={APIEndpoint} />;
}

export default Breakfast;
