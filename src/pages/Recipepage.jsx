import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipepage = () => {
  const { id } = useParams();
  const [recipe, setrecipe] = useState({});

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/" + id + "/information", {
        params: {
          apiKey: "6fc037c137fb40b7a2dce98cc37a9f7b",
        },
      })
      .then((res) => {
        console.log(res.data);
        setrecipe(res.data);
      });
  }, []);

  return (
    <div>
      {recipe && (
        <>
          <p>
            image: <img src={recipe.image} />
          </p>
          <p>title : {recipe.title}</p>
        </>
      )}
    </div>
  );
};

export default Recipepage;