import React from "react";
import record from "../../Records/AllRecord.json";
// import Structure from "../Structure";
import StructureNew from "../StructureNew";

export default function Advertisement() {
  const filtered = record?.filter((data) => data.type === "Advertisement");

  return (
    <>
      {filtered?.map((data, key) => (
        // <Structure data={data} key={key} />
        <StructureNew data={data} key={key} />
      ))}
    </>
  );
}
