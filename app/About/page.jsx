"use client";

import { useRouter } from "next/navigation";
import "@/styles/globals.css";

const About = () => {
  const router = useRouter();
  const gotoHome = () => {
    console.log("To the hoem");
    router.push("/");
  };
  return (
    <>
      <h1>Products</h1>
      <h2>Product no 1</h2>
      <h2>Product no 2</h2>
      <h2>Product no 3</h2>
      <button
        onClick={gotoHome}
        className="border-8 bg-white text-black border-red-600 hover:bg-yellow-500 hover:border-blue-700"
      >
        Click to go ot home
      </button>
    </>
  );
};

export default About;
