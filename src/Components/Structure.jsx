import React from "react";
import ReactPlayer from "react-player";
import { Grid, Paper, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

export default function Structure(props) {
  const { data, key } = props;

  const useStyle = makeStyles(() => ({
    thumbnail: {
      "& > div:hover": {
        backgroundSize: "contain !important",
        backgroundRepeat: "no-repeat !important",
      },
    },
    overlay: {
      position: "absolute",
      zIndex: "999",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      opacity: "1",
      display: "none",
      "&:hover": {
        thumbnail: {
          "& > div": {
            backgroundSize: "contain !important",
            backgroundRepeat: "no-repeat !important",
          },
        },
      },
    },
  }));
  const classes = useStyle();

  const navigate = useNavigate();

  return (
    <>
      <Grid container key={key}>
        {data.works?.map((work, id) => (
          <>
            <Grid item lg={4} md={4} xs={6} key={id}>
              <Paper sx={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
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
                  <p>{work.slug}</p>
                </div>
              </Paper>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
