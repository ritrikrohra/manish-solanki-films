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
                <a href="tel:+918094149991">
                  <Ai.AiOutlinePhone />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/manishkumar.solanki.982"
                  target="_blank"
                >
                  <Ai.AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/manishsolanki06/"
                  target="blank"
                >
                  <Ai.AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+918094149991" target="_blank">
                  <Ai.AiOutlineWhatsApp />
                </a>
              </li>
              <li>
                <a href="mailto:skmanish93@gmail.com" target="_blank">
                  <Ai.AiOutlineMail />
                </a>
              </li>
              {/* <li>
                <a href="#" target="_blank">
                  <Ai.AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Ai.AiOutlineYoutube />
                </a>
              </li> */}
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
    font-size: 5rem;
    @media all and (max-width: 600px) {
      font-size: 4rem;
    }
  }
`;
const ExtraText = styled.div`
  font-size: 1.75rem;
  text-align: right;
  p {
    font-family: "Montserrat", sans-serif;
  }
  @media all and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;
