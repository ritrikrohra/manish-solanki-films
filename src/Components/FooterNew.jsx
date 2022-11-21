import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import * as Ai from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FooterNew() {
  return (
    <>
      <FooterDiv>
        <ContainerDiv>
          <Grid container>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <p>Links</p>
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="bio">Bio</Link>
                </li>
              </ul>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <p>Work</p>
              <ul>
                <li>
                  <Link to="advertisement">Advertisements</Link>
                </li>
                <li>
                  <Link to="music-video">MusicVideos</Link>
                </li>
                <li>
                  <Link to="film">Films</Link>
                </li>
              </ul>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <p>Contact</p>
              <ul>
                <li>
                  <a href="tel:+918094149991">(+91)8094149991</a>
                </li>
                <li>
                  <a href="mailto:skmanish93@gmail.com" target="_blank">
                    skmanish93@gmail.com
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <p>Social Links</p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/manishkumar.solanki.982"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/manishsolanki06/"
                    target="blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+918094149991" target="_blank">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </ContainerDiv>
      </FooterDiv>
    </>
  );
}
const FooterDiv = styled.footer`
  width: 100%;
  padding-top: 5vh;
`;
const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align : center;
  p {
    font-size: 3rem;
    font-weight: bolder;
    font-family: "Noto Serif Oriya", serif;
    @media all and (max-width:899px){
      font-size: 2.5rem;
    }
  }
  ul {
    width: 100%;
    list-style-type: none;
    padding-bottom : 5vh;
    @media all and (max-width:899px){
      padding-bottom : 2vh;
    }
  }
  ul li{
    font-size: 2.5rem;
    line-height: 2.3rem;
    @media all and (max-width: 355px) {
      font-size: 2rem;
    }
    @media all and (max-width: 812px) {
      font-size: 2.1rem;
    }
  }
  ul li a {
    color: black;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    :hover {
      text-decoration: underline;
    }
    // @media all and (max-width:899px){
    //   font-size: 1.5rem;
    // }
  }
`;
