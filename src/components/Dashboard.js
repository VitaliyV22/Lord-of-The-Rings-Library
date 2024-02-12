"use client";

import React, { useState, useEffect } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { Options } from "./Options";
export const Dashboard = () => {


  const [truthy, setTruthy] = useState(false);
  const { data, loading, error } = useFetchData();

  function onClickHandler() {
    setTruthy(!truthy);
  }

  

 
  

  return (
    <div>
      <Options />
    </div>
  );
};
