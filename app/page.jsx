import React from "react";
import "@/styles/globals.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className="font-segoe">
      <h1 className="font-segoe font-bold">Home Page </h1>
      <h2>How are you </h2>
      <div className="justify-center items-center">
        <Image
          className="justify-center"
          src="/assets/gorilla-spin-gorilla.gif"
          alt="Gorillar chobi"
          height={500}
          width={500}
        ></Image>
      </div>
    </div>
  );
};

export default Home;
