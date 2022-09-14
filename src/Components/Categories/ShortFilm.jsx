import React from "react";
import record from "../../Records/ShortFilm.json";
import Structure from "../Structure";

export default function ShortFilm() {
  return (
    <>
      {record?.map((data, key) => (
        <Structure data={data} key={key} />
      ))}
    </>
  );
}
