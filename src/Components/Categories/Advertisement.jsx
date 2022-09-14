import React from "react";
import record from "../../Records/Advertisement.json";
import Structure from "../Structure";

export default function Advertisement() {
  return (
    <>
      {record?.map((data, key) => (
        <Structure data={data} key={key} />
      ))}
    </>
  );
}
