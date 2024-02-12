"use client";

import React, { useState, useEffect } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { Options } from "./Options";
import { Loader } from "./Loader";
import { Characters } from "./Characters";
import { Books } from "./Books";
import { Movies } from "./Movies";
import { Quotes } from "./Quotes";

export const Dashboard = () => {
  const [selection, setSelection] = useState(null);

  const { data, loading, error } = useFetchData(selection);

  function onClickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    character: <Characters data={data} />,
    book: <Books data={data} />,
    movie: <Movies data={data} />,
    quote: <Quotes data={data} />,
  };

  return (
    <div className="flex flex-1 flex-col gap-5 h-screen items-center">
      <div>
      <Options selection={selection} setSelection={onClickHandler} />
      {(loading) && (<Loader />)}
      {(data && !loading) && (dataRender[selection])}
      </div>
      
    </div>
  );
};
