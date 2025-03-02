import React from "react";

export const SecondsCounter = ({seconds}) => {

    //Dig1 ={firstDigit} Dig2 ={secondDigit} Dig3 ={thirdDigit} Dig4 ={forthDigit}
    

    const Dig1 = Math.floor(seconds/1000) % 10;
    const Dig2 = Math.floor(seconds/100) % 10;
    const Dig3 = Math.floor(seconds/10) % 10;
    const Dig4 = Math.floor(seconds/1) % 10;


    return(
        <div className="d-flex justify-content-center bg-secondary">
            
            <div className="border rounded p-5 mx-1 bg-light">{Dig1}</div>
            <div className="border rounded p-5 mx-1 bg-light">{Dig2}</div>
            <div className="border rounded p-5 mx-1 bg-light">{Dig3}</div>
            <div className="border rounded p-5 mx-1 bg-light">{Dig4}</div>
            
        </div>
    );
    
}