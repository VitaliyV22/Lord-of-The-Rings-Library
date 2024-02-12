"use client";

import React, { useState, useEffect } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { Options } from "./Options";

export const Dashboard = () => {
  const [selection, setSelection] = useState(null);

  const { data, loading, error } = useFetchData(selection);

  function onClickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
    
    
  }

  return (
    <div>
      <Options selection={selection} setSelection={onClickHandler} />
    </div>
  );
};
