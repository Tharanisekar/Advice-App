import { useState } from "react"
export const AdviceApp = () =>{
    const [advice,setAdvice]=useState("Click to Grab Advice!")
    const[count,setCount]=useState(0)

    async function getAdvice(){
   const res =await fetch("https://api.adviceslip.com/advice");
   const data=await res.json();
   setAdvice(data.slip.advice);
   setCount((a)=>a+1);

    }
    return(
        <>
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <p>You have taken <b>{count}</b> advices today</p>
        </div>
        </>
    )
}