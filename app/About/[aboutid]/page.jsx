import React from "react";
import notFound from "./not-found";
import { stringify } from "postcss";
import { Metadata } from "next";

export const generateMetadata = ({ params }) => {
  return {
    title: `New product ${params.aboutid}`,
  };
};

const aboutid = ({ params }) => {
  const ret =
    "There is no about id of more than 8000, but you gave  " + params.aboutid;
  console.log(ret);
  if (params.aboutid > 8000) {
    return notFound(ret);
  }
  return (
    <>
      <h1>About ID {params.aboutid} </h1>
    </>
  );
};

export default aboutid;
