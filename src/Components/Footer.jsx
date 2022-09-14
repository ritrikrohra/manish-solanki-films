import React from "react";
import styled from "styled-components";
import * as Ai from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <FooterDiv>
        <Container>
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
        </Container>
      </FooterDiv>
    </>
  );
}
const FooterDiv = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 0;
`;
const SocialHandles = styled.div`
  ul {
    display: flex;
  }
  ul li {
    list-style-type: none;
    font-size: 25px;
  }
`;
const ExtraText = styled.div`
  font-size: 12px;
  text-align: right;
`;
