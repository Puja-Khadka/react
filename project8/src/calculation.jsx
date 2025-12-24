import React from 'react'

function Calculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
 
}

export default Calculation