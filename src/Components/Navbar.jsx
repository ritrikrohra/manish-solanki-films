import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <Nav>
        <TagName>
          <p>
            Manish <br />
            <span>&nbsp;&nbsp;&nbsp;Solanki</span>
          </p>
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
                Short Films
              </NavLink>
            </li>
          </ul>
        </LinksName>
      </Nav>
      <ContentArea>
        <Outlet />
      </ContentArea>
    </>
  );
}

const Nav = styled.nav`
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3vh 0;
`;
const TagName = styled.div`
  p {
    font-size: 30px;
    font-family: "Montez", cursive;
  }
  p span {
    font-family: "Montez", cursive;
  }
`;
const LinksName = styled.div`
  ul {
    display: flex;
    list-style-type: none;
  }
  ul li {
    margin-left: 15px;
  }
`;
const ContentArea = styled.div`
  width: 90%;
  margin: 0 auto;
`;
