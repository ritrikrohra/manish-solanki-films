import React from "react";
// import ReactPlayer from "react-player";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "../index.css";
import styled from "styled-components";
// import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";

export default function Structure(props) {
  const { data, key } = props;

  // const useStyle = makeStyles(() => ({
  //   thumbnail: {
  //     "& > div:hover": {
  //       backgroundSize: "contain !important",
  //       backgroundRepeat: "no-repeat !important",
  //     },
  //   },
  //   overlay: {
  //     backgroundColor: "rgba(10,10,10,.5)",
  //     color: "white",
  //     textAlign: "center",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "end",
  //     paddingBottom: "5%",
  //     position: "absolute",
  //     zIndex: "999",
  //     width: "100%",
  //     height: "100%",
  //     top: "0",
  //     left: "0",
  //     opacity: "1",
  //     "&:hover": {
  //       opacity: "0",
  //     },
  //     "& > p": {
  //       fontFamily: "'Montserrat', sans-serif",
  //     },
  //   },
  // }));
  // const classes = useStyle();
  // const navigate = useNavigate();

  return (
    <>
      <Grid container key={key} spacing={1}>
        {data.works?.map((work, id) => (
          <>
            <Grid item lg={4} md={4} xs={12} key={id}>
              <Paper
                elevation={5}
                sx={{ position: "relative", paddingTop: "56.25%" }}
              >
                <MainThumbnailDiv
                  className="videoThumbnailDiv"
                  style={{ backgroundImage: `url(${work.thumbnail})` }}
                >
                  <Link
                    className="videoThumbnailLink"
                    to={`${work.slug}`}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <DetailThumbnailDiv className="detailThumbnailDiv">
                      <p>
                        <mark>{work.title}</mark>
                      </p>
                      <p>
                        <mark>{work.role}</mark>
                      </p>
                    </DetailThumbnailDiv>
                  </Link>
                </MainThumbnailDiv>

                {/* <ReactPlayer
                  url={work.link}
                  className={classes.thumbnail}
                  controls={true}
                  light={`${work.thumbnail}`}
                  playIcon={true}
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                  onReady={() => navigate(`${work.slug}`)}
                />
                <div className={classes.overlay}>
                  <p>{work.title}</p>
                  <p>{work.role}</p>
                </div> */}
              </Paper>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}

const MainThumbnailDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s;
  :hover {
    background-size: contain;
  }
  a {
    text-decoration: none;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.5s;
  }
  a:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(50, 50, 50, 0.3);
  }
  a:hover {
    opacity: 1;
  }
`;
const DetailThumbnailDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-bottom: 5%;
  color: white;
  p mark {
    font-size: 1.75rem;
    background-color: black;
    color: white;
    padding: 0 5px;
  }
`;
