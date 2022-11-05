import React from "react";
import record from "../Records/AllRecord.json";
import ReactPlayer from "react-player";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function LinkPage({}) {
  const { linkSlug } = useParams();
  const bigDetails = record.find((bigData) =>
    bigData.works.find((data) => data.slug === linkSlug)
  );
  const details = bigDetails.works.find((data) => data.slug === linkSlug);
  const { slug, title, link } = details;
  console.log(slug, title, link);

  return (
    <>
      <Grid container mt={2}>
        <Grid item lg={6} md={8} xs={12}>
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
      </Grid>
    </>
  );
}
