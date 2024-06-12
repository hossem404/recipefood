import React from "react";
import { Link } from "react-router-dom";
import "./recipelist.css"; // Import the CSS file

const Recipelist = ({ recipes }) => {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (
        <div className="recipe-item" key={index}>
          <h1 className="recipe-title">{recipe.id}</h1> 
          <Link to={`/recipe/${recipe.id}`} className="recipe-title">{recipe.title}</Link>
          <img className="recipe-image" src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
};

export default Recipelist;





















// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardText,
//   MDBCardImage
// } from 'mdb-react-ui-kit';
// const Recipelist = ({ recipes }) => {
//     const cardStyle = {
//     width: '300px',
//     height: '300px'
// };
// // const Recipelist = ({ recipes }) => {
//   return (
//     <>
//       {recipes.map((recipe, index) => (
//         <MDBCard style={cardStyle} >
//         <MDBCardImage  src={recipe.image}   />
//         <MDBCardBody>
//           <MDBCardText>{recipe.title}</MDBCardText>
//           <MDBCardText>{recipe.id}</MDBCardText>
//         </MDBCardBody>
//       </MDBCard>
//       ))}
//     </>
//   );
// };

// export default Recipelist;


