"use client";

import React from "react";
import "@/styles/globals.css";
import Image from "next/image";

const Home = () => {
  let count = 0;
  const abcd = () => {
    console.log("clicked in the butotn ", count);
    count++;
  };

  return (
    <div className="font-segoe">
      <h1 className="font-segoe font-bold">Home Page </h1>
      <h2>How are you frined? </h2>
      <div className="justify-center items-center">
        এখানে আমরা যা দেখতে পাই যে <br></br>অনেক সময় আমরা সঠিকভাবে অভ্র ব্যবহার
        করতে পারিনা<br></br> এটা আমাদেরকে ঠিক করতে হবে অবশ্যই ধন্যবাদ
      </div>
      <button onClick={abcd}>Click it so increase{count} </button>
    </div>
  );
};

export default Home;
