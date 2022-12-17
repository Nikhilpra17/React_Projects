 import React from "react";

 function App(){

    let currDate = new Date(2020, 5, 2, 17);
    currDate = currDate.getHours();

    let greeting = "";
    const cssStyle = {};

    if (currDate >= 1 && currDate <12){
        greeting = "Good Morning";
        cssStyle.color = "#00b894";
    } else if (currDate >= 12 && currDate <19){
        greeting = "Good Evening";
        cssStyle.color = "orange";
    } else if (currDate >= 19 && currDate<= 24){
        greeting = "Good Night";
        cssStyle.color = "black";
    }

    return (
    <>
        <div>
            <h1>
                Hello Sir, <span style = {cssStyle}> {greeting} </span>
            </h1>
        </div>
    </>
    );   
 }

 export default App;