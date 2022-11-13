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
          <TagName>
            <Link to="">
              <p>
                <mark style={{ backgroundColor: "yellow", padding: "0 1%" }}>
                  Manish Solanki
                </mark>
              </p>
              <span>Director</span>
            </Link>
          </TagName>
          <LinksName>
            <ul>
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
                  Music Videos
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
  padding: 5vh 0;
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
const TagName = styled.div`
  width: 50%;
  @media all and (max-width: 712px) {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  a p mark {
    font-size: 3rem;
    font-weight: bolder;
    font-family: "Libre Baskerville", serif;
    color: black;
  }
  a span {
    font-size: 1.5rem;
    font-family: "Libre Baskerville", serif;
    color: black;
  }
`;
const LinksName = styled.div`
  width: 50%;
  @media all and (max-width: 712px) {
    width: 100%;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: right;
    list-style-type: none;
  }
  ul li {
    margin-left: 3%;
    font-size: 2.5rem;
    @media all and (max-width: 812px) {
      font-size: 2.2rem;
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
