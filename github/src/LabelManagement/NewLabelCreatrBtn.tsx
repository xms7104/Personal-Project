import React from "react";
import styled from "styled-components";

const CreateLabel = styled.button`
  border: 0.5px solid rgba(27, 31, 36, 0.15);
  background-color: #2da44e;
  color: white;
  border-radius: 5px;
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

function NewLabelBtn() {
  return <CreateLabel>New label</CreateLabel>;
}

export default NewLabelBtn;
