"use client"
import React from "react";

function PlaceIndications() {
  const handleClick = () => {
    console.log('Next button')
  };

  return (
    <div className="flex flex-col items-center justify-center text-3xl m-auto flex-1 hidden-indications">
      <p className="text-center leading-loose">
        1. Utilice las flechas azules para seleccionar el lugar del tattoo y luego presione el boton Next
      </p>
    </div>
  );
}

export default PlaceIndications;
