import { createContext, useState } from "react";

export const TemaContext = createContext()


export function TemaProvider({children}){

    const [tema, setTema] = useState("black");
    const [textColor, setTextColor] = useState("white");

    return(
        <TemaContext.Provider value={{tema,setTema,setTextColor,textColor}}>
         {children}
        </TemaContext.Provider>
    )
}