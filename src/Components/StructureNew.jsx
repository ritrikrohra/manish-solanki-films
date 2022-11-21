import React from "react";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function StructureNew(props) {
  const { data, key } = props;

  return (
    <>
      <Grid container key={key}>
        {data.works?.map((work, id) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={id}>
            <Paper
              elevation={5}
              sx={{ position: "relative", paddingTop: "56.25%" }}
            >
              <ThumbnailDiv>
                {work.platform != "YOUTUBE" ? (
                  <a
                    href={`${work.link}`}
                    target="_blank"
                    className="videoThumbnailLink"
                  >
                    <img src={`${work.thumbnail}`} alt={`${work.slug}`} />
                    {work.id == 2 ? (
                      <ThumbnailTextDiv>
                        <p style={{ color: "black" }}>{work.title}</p>
                        <p style={{ color: "black" }}>{work.cast}</p>
                      </ThumbnailTextDiv>
                    ) : (
                      <ThumbnailTextDiv>
                        <p>{work.title}</p>
                        <p>{work.cast}</p>
                      </ThumbnailTextDiv>
                    )}
                  </a>
                ) : (
                  <Link className="videoThumbnailLink" to={`${work.slug}`}>
                    <img src={`${work.thumbnail}`} alt={`${work.slug}`} />
                    <ThumbnailTextDiv>
                      <p>{work.title}</p>
                      <p>{work.cast}</p>
                    </ThumbnailTextDiv>
                  </Link>
                )}
              </ThumbnailDiv>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
const ThumbnailDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    :hover img {
      transform: scale(0.95);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }
`;
const ThumbnailTextDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 0 2% 4%;
  p {
    font-size: 1.8rem;
    color: white;
    font-family: "Noto Serif Oriya", serif;
  }
  p:first-of-type {
    text-transform: uppercase;
    line-height : 1.5rem;
  }
  p:last-of-type {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
  }
`;
