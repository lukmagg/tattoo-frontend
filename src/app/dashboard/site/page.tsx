"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [selectedPart, setSelectedPart] = useState("");

  const handleClick = (part: string) => {
    setSelectedPart(part);
    console.log(`You selected: ${part}`);
  };

  return (
    <div className="body-container">
      <Image src="/body.png" width={1000} height={760} alt="Human Body" />
      <div className="body-part head" onClick={() => handleClick("head")}></div>
      <div
        className="body-part left-arm"
        onClick={() => handleClick("left-arm")}
      ></div>
      <div
        className="body-part right-arm"
        onClick={() => handleClick("right-arm")}
      ></div>
      <div
        className="body-part left-leg"
        onClick={() => handleClick("left-leg")}
      ></div>
      <div
        className="body-part right-leg"
        onClick={() => handleClick("right-leg")}
      ></div>
    </div>
  );
}
