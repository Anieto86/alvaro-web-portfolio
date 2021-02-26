import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";



// import styled from "styled-components";
function Porfoliofilter() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    //    search.filter((sea) => {
    //         return sea.title.toLowerCase().includes(search.toLowerCase());
    //       });
  };

  return (
      <div className='container'>
         
      <InputGroup.Prepend className='mb-1'>
        <FormControl
          placeholder='Find my app'
          onChange={handleSearch}
          value={search}
        />
          </InputGroup.Prepend>
    
    </div>
  );
}

export default Porfoliofilter;
