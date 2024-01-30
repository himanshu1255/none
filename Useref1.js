import { useRef } from "react";
import { useState } from "react";

// const Useref1=()=>{
//     let input= useRef(null)
// const handleclick=()=>{
//     input.current.value="578";
//     input.current.focus();
//     input.current.style.color="red"
// }
// return(
//     <>
//     <h1>hook in react</h1>
//     <input type="text" ref={input}></input>
//     <button onClick={handleclick}>click me</button>
//     </>
// )
// }
                                        //practise task//           
const Useref1=()=>{const[inpt,size]=useState=(0)
    let input=useRef(null)
    const handelclick=()=>{input.current.value="hi"; }
    const hide=()=>{input.current.style.display="none"; }
        const reset=()=>{input.current.value="";}
     let text=useRef(null)
     const [color,changeto]=useState("pink")
    
     function black() {
        changeto("black")
     }
     function blue() {
        changeto("blue")
     }
     function red() {
        changeto("red")
     }
     function yellow() {
        changeto("yellow")
     }
     function green() {
        changeto("green")}

       
            
       const setwidth=()=>{
        size();
       } 
       const resetdef=()=>{
        size(10);
       }
       
        return(
        <><center><div>
            <h1>useref project2</h1>
            <input type="text" ref={input}></input>
            <button onClick={handelclick}>click</button>
            <button onClick={hide}>hide</button>
            <button onClick={reset}>reset</button>
            
        </div></center><br></br>
        <center><div>
            <input type="text" ref={text} style={{backgroundColor:color,width:`${inpt}%` }}></input>
            <h1>click any button to change:</h1><br></br>
            <h2>background color to :</h2>
            <button onClick={black}>black</button>
            <button onClick={blue}>blue</button>
            <button onClick={red}>red</button>
            <button onClick={yellow}>yellow</button>
            <button onClick={green}>green</button>
            <br></br>
            <h1>Width</h1>
            <button onClick={resetdef}>Width:default</button>
            <button onClick={()=>setwidth(25)}>25%</button>
            <button onClick={()=>setwidth(50)}>50%</button>
            <button onClick={()=>setwidth(75)}>75%</button>
            <button onClick={()=>setwidth(100)}>100%</button>
        </div></center>
        </>
     )

    }


export default Useref1;