import styled from "styled-components";
import React from "react";

const CreateLabel = styled.button`
  border: 0.5px solid rgba(27, 31, 36, 0.15);
  background-color: #2da44e;
  color: white;
  border-radius: 5px;
  padding: 5px 16px;
`;

function Product() {
  return (

    <CreateLabel>New label</CreateLabel>

  );
}

export default Product;
