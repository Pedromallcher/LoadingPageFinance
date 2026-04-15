'use client';

import React from "react";

type ButtonProps= {
   textoString : string ,
   children? : React.ReactNode,
   cor?: "primary" | "red" | "blue",
   classname? : string
}


export default function ButtonPrimary ({textoString , children , cor = "primary" , classname}:ButtonProps){

     const cores = {
       primary: "bg-[#2E4F21] text-white",
       blue: "bg-blue-500 text-white",
       red: "bg-red-500 text-white",
     };

    

    return (
        <button className={`${cores[cor]} ${classname} `}>
           {textoString || children}

        </button>
    )
}