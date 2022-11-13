import React from "react";
import styled from "styled-components";

export default function NoPageMatch() {
  return (
    <>
      <NoPageMatchDiv>
        <p>WRONG URL, CLICK ON THE LINKS ABOVE.</p>
      </NoPageMatchDiv>
    </>
  );
}
const NoPageMatchDiv = styled.div`
  width: 100%;
  padding: 5vh 0;
  text-align: center;
  p {
    font-size: 5rem;
  }
`;
