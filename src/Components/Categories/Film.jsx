import React from "react";
import record from "../../Records/AllRecord.json";
import Structure from "../Structure";

export default function Film() {
  const filtered = record?.filter((data) => data.type === "Film");

  return (
    <>
      {filtered?.map((data, key) => (
        <Structure data={data} key={key} />
      ))}
    </>
  );
}
