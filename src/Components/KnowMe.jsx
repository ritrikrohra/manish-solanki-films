import React from "react";
import styled from "styled-components";
import * as Ai from "react-icons/ai";

export default function KnowMe() {
  return (
    <>
      <Footer>
        <SocialHandles>
          <ul>
            <li>
              <a>
                <Ai.AiOutlinePhone />
              </a>
            </li>
            <li>
              <a>
                <Ai.AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a>
                <Ai.AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a>
                <Ai.AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a>
                <Ai.AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a>
                <Ai.AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </SocialHandles>
      </Footer>
    </>
  );
}
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
`;
const SocialHandles = styled.div`
ul{
    display : flex;
}
  ul li {
    list-style-type: none;
    font-size: 25px;
  }
`;
