import React from "react";
import record from "../../Records/AllRecord.json";
import Structure from "../Structure";

export default function MusicVideo() {
  const filtered = record?.filter((data) => data.type === "Music Video");

  return (
    <>
      {filtered?.map((data, key) => (
        <Structure data={data} key={key} />
      ))}
    </>
  );
}
