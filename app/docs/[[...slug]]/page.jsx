import React from "react";

function func(params) {
  console.log(params.slug);
  return params.slug?.length;
}

const Docs = ({ params }) => {
  return (
    <>
      <h1>Docs Routing of {func(params)}</h1>
    </>
  );
};

export default Docs;
