import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Bio() {
  return (
    <>
      <BackgroundDiv>
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <BioPicDiv>
              <img src="ms-bio-pic-sq.jpg" alt="Manish Solanki" />
              <p>Manish Solanki</p>
            </BioPicDiv>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <BioParaDiv>
              <p>
                Manish’s love for storytelling dates back to when he was just 9.
                Watching Jurassic Park, Indiana Jones etc. at a very young age
                left him with fascination & a million questions. He began
                expressing himself through stage plays and musical instruments
                but knew there was more to it.
              </p>
              <br />
              <br />
              <p>
                Choosing to join a Film Production House is what added fuel to
                his ways of storytelling. He’s been in the process of directing
                films, music videos, ad films eversince for 5yrs now narrating
                one story at a time.
              </p>
              <br />
              <br />
              <p>
                He has a strong hand in casting as he knows his characters by
                their heartbeat. This clearly reflects in his films. With the
                kind of experience he has with films, screenplays are something
                he creates that mesmerizes. Belonging to an Indie film
                background, He knows the art of working things out with little
                of all resources. He has this style where he picks his
                characters to be a reflection of people from each of our daily
                lives.
              </p>
              <br />
              <br />
              <p>
                Some of his works include advertisements for <b>Vision11</b>{" "}
                with sportsmen like{" "}
                <b>Manish Pandey, Keiron Pollard, Axar Patel</b>. He’s also been
                a part of a few music videos such as{" "}
                <b>Tere Naam by Darshan Rawal, Tulsi Kumar</b> &{" "}
                <b>Meri Tarah by Jubin Nautiyal</b>, both in Assistance with
                <b>Navjit Buttar</b> who is the pioneer of the current Music Videos. His films namely <b>Shikayat</b> and <b>Metro</b>{" "}
                have been featured on platform: <b>Hotstar</b>.
              </p>
            </BioParaDiv>
          </Grid>
        </Grid>
      </BackgroundDiv>
    </>
  );
}

const BackgroundDiv = styled.div`
  width: 100%;
  background-color: black;
`;
const BioPicDiv = styled.div`
  padding: 5% 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content : center;
  align-items: center;
  img {
    width: 50%;
    border-radius: 50%;
  }
  p {
    color: white;
    padding-top: 2%;
    font-size: 1.75rem;
    font-family: "Montserrat", sans-serif;
  }
`;
const BioParaDiv = styled.div`
  width: 100%;
  padding: 2.5% 10%;
  p {
    color: white;
    font-size: 1.8rem;
    font-family: "Montserrat", sans-serif;
    text-align: justify;
  }
  p b {
    font-size: 1.8rem;
  }
`;
