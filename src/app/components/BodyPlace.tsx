"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function BodyPlace() {
  const { globalState, setGlobalState } = useGlobalState();

  useEffect(() => {
    console.log("Nuevo valor de pasar:", globalState.nextTab);
    console.log("Nuevo valor de tattooPlace:", globalState.tattooPlace);
  }, [globalState.nextTab, globalState.tattooPlace]);

  const handleClick = (part: string) => {
    setGlobalState({ ...globalState, tattooPlace: part, allowSize: true });
  };

  return (
    <div className="body-container">
      <Image
        src="/body.png"
        width={500}
        height={500}
        layout="intrinsic"
        alt="Human Body"
      />
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
