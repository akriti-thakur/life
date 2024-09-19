import React,  {useState}from 'react';

{}
export default function Click(){
    const[num,setNum]=useState(0)

    const handel=()=>{
        setNum(num+1)

    }

    return(<>
    <button onClick={handel}>click me</button>
    <p>you have clicked {num}</p>
    
    </>)

}