import React from "react";
import notFound1 from "@/app/not-found";
import "@/styles/globals.css";

const notFound = (params) => {
  return (
    <div>
      {notFound1()}
      <h1>Sorry we could not find {params}</h1>
    </div>
  );
};

export default notFound;
