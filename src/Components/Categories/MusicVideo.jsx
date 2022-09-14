import React from "react";
import record from "../../Records/MusicVideo.json";
import Structure from "../Structure";

export default function MusicVideo() {
  return (
    <>
      {record?.map((data, key) => (
        <Structure data={data} key={key} />
      ))}
    </>
  );
}
