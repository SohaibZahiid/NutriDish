import React from "react";
import Meal from "../component/Meal";
import { AuthContext } from "../cntx/AuthContext";
import { useContext } from "react";

function Dinner() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = !currentUser
    ? "/recipes/dinner"
    : `/recipes/dinner/favorites/${currentUser.id}`;

  return <Meal APIEndpoint={APIEndpoint} />;
}

export default Dinner;
