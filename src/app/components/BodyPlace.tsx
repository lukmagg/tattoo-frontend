"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function BodyPlace() {
  const router = useRouter();

  const { globalState, setGlobalState } = useGlobalState();

  const handleClick = (part: string) => {
    setGlobalState({ ...globalState, tattooPlace: part, allowSize: true });
    Cookies.set("allow-size", JSON.stringify("true"));
    router.push("/dashboard/size");
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
        className="body-part chest"
        onClick={() => handleClick("chest")}
      ></div>
      <div
        className="body-part stomach"
        onClick={() => handleClick("stomach")}
      ></div>
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
        className="body-part left-hand"
        onClick={() => handleClick("left-hand")}
      ></div>
      <div
        className="body-part right-hand"
        onClick={() => handleClick("right-hand")}
      ></div>
      <div
        className="body-part right-leg"
        onClick={() => handleClick("right-leg")}
      ></div>
      <div
        className="body-part left-foot"
        onClick={() => handleClick("right-foot")}
      ></div>
      <div
        className="body-part right-foot"
        onClick={() => handleClick("right-foot")}
      ></div>
    </div>
  );
}
