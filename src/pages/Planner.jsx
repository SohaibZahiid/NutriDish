import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Planner() {
  const [recipes, setRecipes] = useState({});
  const [calories, setCalories] = useState(0);

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getRecipes = async () => {
    const API = import.meta.env.VITE_API;

    if (calories) {
      try {
        const res = await axios.get(`${API}/recipes/suggestions/${calories}`);
        if(res.data.success) {
          setRecipes(res.data.data)
        } else {
          toast.error(res.data?.message)
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Please enter the calories");
    }
  };

  return (
    <>
      <input type="number" onChange={handleChange} />
      <button onClick={getRecipes}>Get Plan</button>
      {/* Display recipes */}
      <ul>
        {recipes.recipes &&
          recipes.recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
      </ul>
    </>
  );
}

export default Planner;
