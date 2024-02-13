import { Dashboard } from "@/components/Dashboard";
import React from "react";

export default function Home() {
  return (
    <>
      <img className="absolute inset-0 w-full h-full z-0 brightness-50"
        src="https://wallpaperaccess.com/full/4472566.jpg"
        alt=""
      />
      <div className="relative z-10"><Dashboard /></div>
      
    </>
  );
}
