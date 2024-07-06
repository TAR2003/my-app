import { stringify } from "postcss";
import React from "react";
import "@/styles/globals.css";

const notFound = () => {
  return (
    <div>
      <h1 className="not-found-class">
        {" "}
        We are sorry to say that there is no function{" "}
      </h1>
      <h2>so here we are</h2>
    </div>
  );
};

export default notFound;
