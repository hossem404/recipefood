import React from "react";
import { Link } from "react-router-dom";

const Recipelist = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h1>{recipe.id}</h1> 
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          <img src={recipe.image} alt="title" />
        </div>
      ))}
    </>
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


