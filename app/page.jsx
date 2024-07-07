import React from "react";
import "@/styles/globals.css";
import Image from "next/image";

const fs = require("fs");

function readAndWriteFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err}`);
    }

    // Parse the data as an integer and increment it
    let number = parseInt(data, 10);
    if (isNaN(number)) {
      number = 0;
    }
    number += 1;
    count = number;

    // Write the incremented number back to the file
    fs.writeFile(filePath, number.toString(), "utf8", (err) => {
      if (err) {
        console.error(`Error writing to the file: ${err}`);
      }
    });
  });
}

// Example usage:
const filePath = "./public/example.txt";
let count = 0;

function getData() {
  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err}`);
      return;
    }

    count = data;
  });
  return count;
}

// Define how you want to process the data
const processData = (data) => {
  // Example: Append a line to the file content
  return data + "\nNew line added!";
};

// Call the function
function abcd() {
  count++;
  readAndWriteFile(filePath);
  console.log("clicked in the butotn");
}

const Home = () => {
  return (
    <div className="font-segoe">
      <h1 className="font-segoe font-bold">Home Page </h1>
      <h2>How are you frined? </h2>
      <div className="justify-center items-center">
        এখানে আমরা যা দেখতে পাই যে <br></br>অনেক সময় আমরা সঠিকভাবে অভ্র ব্যবহার
        করতে পারিনা<br></br> এটা আমাদেরকে ঠিক করতে হবে অবশ্যই ধন্যবাদ
      </div>
      <button onClick={abcd()}>Click it so increase {getData()}</button>
    </div>
  );
};

export default Home;
