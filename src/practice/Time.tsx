import React from 'react';
import { useState, useEffect } from 'react';




const TodoApp=()=>{

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timerId = setInterval(() => {
        setTime(new Date()); // Update time every second
      },1000);
  
      return () => {
        clearInterval(timerId); // Clean up the interval on unmount
      };
    },[]); // Empty dependency array to run the effect once
  
    const formattedTime = time.toLocaleTimeString('en-IN', {
      day:'numeric',
      month:'numeric',
      year:'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

//     const date=new Date("2012-05-24")
// const date=new Date()
// language sensative functionality
// const Formate=new Intl.DateTimeFormat("en-IN",{
//     weekday:"long",
//     hour:'2-digit',
//     minute:"numeric",
//     day:"numeric"
// }).format(date)
  


// function Profile(date) {
//   return new Intl.DateTimeFormat("en-US", {
//     weekday: "long",
//   }).format(date);
// }

// function App() {
//   const today = new Date();
//   const formattedWeekday = Profile(today);

//   return (
//     <>
//       Today is {formattedWeekday}.
//     </>
//   );
// }

    return (
      <>
         <div className="clock">
            <h1>Bharat Time</h1>
            <p>{formattedTime}</p>
          </div>
  
      </>
    );
}















export default TodoApp