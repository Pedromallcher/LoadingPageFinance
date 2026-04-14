'use client';

import React from "react";

type ButtonProps= {
   textoString : string ,
   children? : React.ReactNode,
   cor?: "green" | "red" | "blue",
}


export default function ButtonPrimary ({textoString , children , cor = "green" }:ButtonProps){

     const cores = {
       green: "bg-[#2E4F21] text-white",
       blue: "bg-blue-500 text-white",
       red: "bg-red-500 text-white",
     };

    

    return (
        <button className={`${cores[cor]}`}>
           {textoString || children}

        </button>
    )
}