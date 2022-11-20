import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <Nav>
        <ContainerDiv>
          {/* <TagName>
            <Link to="">
              <p>MANISH SOLANKI</p>
              <p>DIRECTOR</p>
            </Link>
          </TagName> */}

          <TagNameImageDiv>
            <Link to="">
              <img src="ms-tagName-black-lessSpace.png" alt="Manish Solanki" />
            </Link>
          </TagNameImageDiv>
          <LinksName>
            <ul>
              <li>
                <NavLink
                  to="bio"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Bio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="advertisement"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Advertisements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="music-video"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  MusicVideos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="film"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Films
                </NavLink>
              </li>
            </ul>
          </LinksName>
        </ContainerDiv>
      </Nav>
      <ContentArea>
        <Outlet />
      </ContentArea>
    </>
  );
}

const Nav = styled.nav`
  width: 100%;
  padding: 5vh 0 10vh 0;
`;
const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  color: black;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media all and (max-width: 712px) {
    flex-direction: column;
  }
`;

// const TagName = styled.div`
//   width: 50%;
//   @media all and (max-width: 712px) {
//     width: 100%;
//   }
//   a {
//     text-decoration: none;
//   }
//   a p: nth-of-type(1){
//     font-size: 3rem;
//     font-weight: bolder;
//     // font-family: "Libre Baskerville", serif;
//     font-family: "Noto Serif Oriya", serif;
//     color: black;
//     line-height : 1.6rem;
//   }
//   a p: nth-of-type(2){
//     font-size: 1.5rem;
//     // font-family: "Libre Baskerville", serif;
//     // font-family: "Noto Serif Oriya", serif;
//     font-family: 'Roboto', sans-serif;
//     color: black;
//     width : 100%;
//     padding-left : 33%;
//     letter-spacing : 0.1rem;
//     // font-weight : 500;
//   }
// `;

const TagNameImageDiv = styled.div`
  width: 33.3%;
  a {
    width: 100%;
  }
  @media all and (max-width: 712px) {
    width: 70%;
  }
  a img {
    width: 70%;
    @media all and (max-width: 712px) {
      width: 100%;
    }
  }
`;
const LinksName = styled.div`
  width: 66.6%;
  @media all and (max-width: 712px) {
    width: 100%;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: right;
    list-style-type: none;
    @media all and (max-width: 712px) {
      justify-content: center;
    }
  }
  ul li {
    margin-left: 3%;
    font-size: 2.5rem;
    @media all and (max-width: 812px) {
      font-size: 2.1rem;
    }
    @media all and (max-width: 712px) {
      margin: 0 1%;
    }
    @media all and (max-width: 355px) {
      font-size: 2rem;
    }
  }
  ul li a {
    color: black;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
  }
`;
const ContentArea = styled.div`
  height: 100%;
`;
