// // // // // // // import React from 'react';
// // // // // // // import Hello from './components/Hello.jsx';

// // // // // // // import UserStatus from './components/UserStatus.jsx';
// // // // // // // import {useState} from 'react';

// // // // // // // const Counter = ()=>{
// // // // // // //   const [count, setCount] = useState(0);
// // // // // // //   return(
// // // // // // //     <>
// // // // // // //       <h1>Counter: {count}</h1>
// // // // // // //       <button onClick={()=>setCount(count+1)}>Increment</button>
// // // // // // //       <button onClick={()=>setCount(count-1)}>Decrement</button>
// // // // // // //     </>
// // // // // // //   )

// // // // // // // }


// // // // // // // function App() {


// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Hello />
// // // // // // //       <UserStatus isLoggedIn={true}/>
// // // // // // //       <Counter />
// // // // // // //     </>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default App
// // // // // // import Hello from './components/Hello.jsx';
// // // // // // import {useState} from 'react';

// // // // // // const Counter =()=>{
// // // // // //   const [count, setCount] = useState(0);
// // // // // //   return(
// // // // // //     <>
// // // // // //       <h1>Counter: {count}</h1>
// // // // // //       <button onClick={()=>setCount(count+1)}>Increment</button>
// // // // // //       <button onClick={()=>setCount(count-1)}>Decrement</button>
// // // // // //     </>
// // // // // //   )
// // // // // // }
// // // // // // const App = () => {
// // // // // //   return (
// // // // // //     <>
// // // // // //     <Hello />
 
// // // // // //       <h1>Hello World</h1>
// // // // // //       <Counter />

// // // // // //     </>
// // // // // //   )
// // // // // // }
// // // // // // export default App

// // // // // import React from 'react';
// // // // // import {useState,useEffect} from 'react';
// // // // // const Timer = ()=>{
// // // // //   const [seconds,setSeconds]=useState(9);

// // // // //   useEffect(()=>{
// // // // //     const interval = setInterval(()=>{
// // // // //       setSeconds((prev)=> prev+1);
// // // // //     },1000);
// // // // //     return ()=>clearInterval(interval);
// // // // //   },[]);
// // // // //   return(
// // // // //     <>
// // // // //       <h1>Timer: {seconds} seconds</h1>
// // // // //       <button onClick={()=>setSeconds(0)}>Reset</button>
// // // // //     </>
// // // // //   )
// // // // // }
// // // // // const App = () => {
// // // // //   return (
// // // // //     <>
// // // // //       <h1>Hello World</h1>
// // // // //       <Timer />
// // // // //     </>
// // // // //   )
// // // // // }
// // // // // export default App


// // // // import {useState} from "react";
// // // // import TwoWayBinding from "./components/TwoWayBinding.jsx";
// // // // const Form=()=>{
// // // //   const [name,setName]=useState("");
  
// // // //   const handleSubmit =(e)=>{
// // // //     e.preventDefault();
// // // //     alert(`Form submitted with name: ${name}`);
// // // //   };
// // // //   return(
// // // //     <>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input 
// // // //           type="text"
// // // //           value={name}
// // // //           onChange={(e)=>setName(e.target.value)}
// // // //           placeholder="Enter your name"
// // // //         />
// // // //         <button type="submit">Submit</button>
// // // //       </form>
// // // //     </>
// // // //   )
// // // // }
// // // // const App = () => {
// // // //   return (
// // // //     <>
// // // //       <h1>Hello World</h1>
// // // //       <Form />
// // // //       <TwoWayBinding />
// // // //     </>
// // // //   )
// // // // }
// // // // export default App
// // // import React from 'react';
// // // import { useState } from 'react';
// // // import Child from './components/Child.jsx';
// // // const App = () => {
// // //   return (
// // //       <>
// // //       <h1>Hello World</h1>
// // //       <Child name="John Doe" age={30} />
// // //       </>
// // //   )
// // // }
// // // export default App
// // import React from 'react';
// // import { useState ,useEffect} from 'react';

// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const FetchData = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios.get("https://jsonplaceholder.typicode.com/posts")
// //       .then((response) => setData(response.data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <ul>
// //       {data.map((item) => (
// //         <li key={item.id}>{item.title}</li>
// //       ))}
// //     </ul>
// //   );
// // };
// // const App = () => {
// //   return (
// //     <>
// //       <h1>Hello World</h1>
// //       <FetchData />
// //     </>
// //   );
// // };
// // export default App;

// import {BrowsweRouter as Router,Route,Routes,Link} from "react-router-dom";

// const Home = ()=>{
//   return <h2>Home</h2>
// }
// const About = ()=>{
//   return <h2>About</h2>
// }
// const Contact = ()=>{
//   return <h2>Contact</h2>
// }
// const NotFound = ()=>{
//   return <h2>404 Not Found</h2>
// }
// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }
// export default App

import react from 'react';
import { createContext, useState, useContext } from "react";

return(
  <div>
    <h1>Hello World</h1>
    <p>This is a simple React application.</p>
    <p>Welcome to the world of React!</p>
    <Counter />
    <Toggle />
    <Form />
    <TwoWayBinding />
    <FetchData />
    <Router />  
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
    <Child name="John Doe" age={30} />
    <UserStatus isLoggedIn={true} />
    <Timer />
    <Form />
    <TwoWayBinding />
    <FetchData />
    <Router />
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
    <Child name="John Doe" age={30} />
  </div>
)