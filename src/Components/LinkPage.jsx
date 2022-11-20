import React from "react";
import record from "../Records/AllRecord.json";
import ReactPlayer from "react-player";
import { Grid, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NoPageMatch from "./NoPageMatch";

export default function LinkPage({}) {
  const { linkSlug } = useParams();
  const bigDetails = record.find((bigData) =>
    bigData.works.find((data) => data.slug === linkSlug)
  );
  if (bigDetails) {
    const details = bigDetails.works.find((data) => data.slug === linkSlug);
    const { title, link, role, text, singer, cast } = details;
    return (
      <>
        <Grid container mt={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Paper sx={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url={link}
                controls={true}
                playIcon={true}
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              />
            </Paper>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <VideoDetails>
              <p>{title}</p>
              {text ? (
                <>
                  <p>{text}</p>
                </>
              ) : (
                <></>
              )}
              <p>{role}</p>
              {singer ? (
                <>
                  <p>Artist: {singer}</p>
                </>
              ) : (
                <></>
              )}
              {cast ? (
                <>
                  <p>Cast: {cast}</p>
                </>
              ) : (
                <></>
              )}
            </VideoDetails>
          </Grid>
        </Grid>
      </>
    );
  }
  return <NoPageMatch />;
}

const VideoDetails = styled.div`
padding : 5%;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    width: 100%;
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    @media all and (max-width: 485px) {
      font-size: 1.25rem;
    }
  }
  p:first-of-type {
    font-size: 3rem;
    padding: 0 1%;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
    @media all and (max-width: 485px) {
      font-size: 2.25rem;
    }
  }
  p:nth-of-type(3) {
    font-size: 2.3rem;
    font-weight : bolder;
    padding: 0 1%;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
    @media all and (max-width: 485px) {
      font-size: 2.25rem;
    }
`;
