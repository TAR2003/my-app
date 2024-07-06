import React from "react";

const page = ({ params }) => {
  return (
    <>
      <h1> Here we go </h1>
      <h2>About ID ( Tree ) {params.aboutid} </h2>
      <h2>Pro ID ( Tree ) {params.proid} </h2>
    </>
  );
};

export default page;
