import React from "react";
import Meal from "../components/Meal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Favorite() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = `/recipes/favorites/${currentUser.id}`;

  return <Meal APIEndpoint={APIEndpoint} />;
}

export default Favorite;
