import React, { useState } from "react";

const SearchBar = ({ fetchrecipes }) => {
  const [query, setquery] = useState("");
  const handleSearch = () => {
    fetchrecipes(query);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setquery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;


















// import React, { useState } from "react";
// import {
//     MDBContainer,
//     MDBNavbar,
//     // MDBBtn,
//     MDBInputGroup
//   } from 'mdb-react-ui-kit';

// const SearchBar = ({ fetchrecipes }) => {
//   const [query, setquery] = useState("");
//   const handleSearch = () => {
//     fetchrecipes(query);
//   };
//   return (
//     <div>
//       <MDBNavbar light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
//           <input className='form-control' placeholder="Type query" aria-label="Search" type='text' onChange={(e) => setquery(e.target.value)} />
//           {/* <MDBBtn outline onClick={handleSearch}>Search</MDBBtn> */}
//         </MDBInputGroup>
//       </MDBContainer>
//     </MDBNavbar>
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;