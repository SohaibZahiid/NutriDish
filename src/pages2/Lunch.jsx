import React from "react";
import Meal from "../component/Meal";
import { AuthContext } from "../cntx/AuthContext";
import { useContext } from "react";

function Lunch() {
  const { currentUser } = useContext(AuthContext);

  const APIEndpoint = !currentUser
    ? "/recipes/lunch"
    : `/recipes/lunch/favorites/${currentUser.id}`;

  return <Meal APIEndpoint={APIEndpoint} />;
}

export default Lunch;
