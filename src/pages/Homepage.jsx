import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import Recipelist from "../components/recipelist";

const Homepage = () => {
  const [recipes, setrecipes] = useState([]);

  const fetchrecipes = (query) => {
    axios
      .get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          query,
          apiKey: "6fc037c137fb40b7a2dce98cc37a9f7b",
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setrecipes(res.data.results);
      });
  };
  return (
    <>
      <SearchBar fetchrecipes={fetchrecipes} />
      <Recipelist recipes={recipes} />
    </>
  );
};

export default Homepage;