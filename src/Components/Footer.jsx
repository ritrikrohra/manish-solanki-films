import React from "react";
import styled from "styled-components";
import * as Ai from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <FooterDiv>
        <ContainerDiv>
          <SocialHandles>
            <ul>
              <li>
                <a href="#" type="_blank">
                  <Ai.AiOutlinePhone />
                </a>
              </li>
              <li>
                <a href="#" type="_blank">
                  <Ai.AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href="#" type="_blank">
                  <Ai.AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#" type="_blank">
                  <Ai.AiOutlineWhatsApp />
                </a>
              </li>
              <li>
                <a href="#" type="_blank">
                  <Ai.AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#" type="_blank">
                  <Ai.AiOutlineYoutube />
                </a>
              </li>
            </ul>
          </SocialHandles>
          <ExtraText>
            <p>© Manish Solanki 2022. All Rights Reserved</p>
            <p>Made By - Ritrik Rohra</p>
          </ExtraText>
        </ContainerDiv>
      </FooterDiv>
    </>
  );
}
const FooterDiv = styled.footer`
  width: 100%;
  padding: 5vh 0;
`;
const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SocialHandles = styled.div`
  ul {
    display: flex;
  }
  ul li {
    list-style-type: none;
    margin-right: 3%;
  }
  ul li a {
    color: black;
    font-size: 3.5rem;
  }
`;
const ExtraText = styled.div`
  font-size: 1.75rem;
  text-align: right;
  p {
    font-family: "Montserrat", sans-serif;
  }
`;
