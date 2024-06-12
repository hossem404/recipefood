import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import Recipelist from "../components/recipelist";
import "./homepage.css"; 
import Slider from "../components/Slider";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = (query) => {
    axios
      .get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          query,
          apiKey: "6fc037c137fb40b7a2dce98cc37a9f7b",
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setRecipes(res.data.results);
      });
  };

  return (
    <div className="container">
      <h1 className="header">Find Your Recipes</h1>
      <SearchBar fetchrecipes={fetchRecipes} />
      <Recipelist recipes={recipes} />
      <Slider/>
    
    </div>
  );
};

export default Homepage;