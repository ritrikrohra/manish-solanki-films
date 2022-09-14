import React from "react";
import ReactPlayer from "react-player";
import { Grid, Paper, Divider } from "@mui/material";

export default function Structure(props) {
  const { data, key } = props;
  return (
    <>
      <Grid container key={key}>
        <Grid item lg={12} md={12} xs={12} sx={{ textAlign: "center" }}>
        <Divider><h2>{data.role}</h2></Divider>
        </Grid>
        {data.works?.map((work, id) => (
          <>
            {work.id % 2 == 0 && (
              <Grid
                item
                lg={6} md={6} xs={12}
                padding={5}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>{work.title}</h3>
              </Grid>
            )}
            <Grid item lg={6} md={6} xs={12}>
              <Paper
                // elevation={5}
                sx={{ position: "relative", paddingTop: "56.25%" }}
              >
                <ReactPlayer
                  url={work.link}
                  controls={true}
                  light={true}
                  playIcon={true}
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                  onReady={() => console.log("ready")}
                />
              </Paper>
            </Grid>
            {work.id % 2 !== 0 && (
              <Grid
                item
                lg={6} md={6} xs={12}
                padding={5}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>{work.title}</h3>
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </>
  );
}
