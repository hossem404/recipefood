import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./recipepage.css";

const Recipepage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/" + id + "/information", {
        params: {
          apiKey: "6fc037c137fb40b7a2dce98cc37a9f7b",
        },
      })
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      
      {recipe && recipe.title && (
        <Card className="mt-4">
          <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
              <p>Ready in: {recipe.readyInMinutes} minutes</p>
              <p>Servings: {recipe.servings}</p>
            </Card.Text>
            <Button variant="primary" href={recipe.sourceUrl} target="_blank">View Full Recipe</Button>
          </Card.Body>
        </Card>
      )}
      <Button variant="secondary" onClick={() => navigate('/')}>Home</Button>
    </div>
  );
};

export default Recipepage;
