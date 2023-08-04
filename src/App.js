/*
// import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>this is the react starting src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React with abhishek
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;
import React from 'react';
// ---------- we can write this also-------------
// const App = () => {
//   return <div>hello world</div>;
// };
const App = () => {
  return (
  <>
    <Name />
    <Name />
    <h1 className='myclassname'>hello  world {3+3}</h1>
    <p>Awesome</p>
    <Name />
    <Motu />
    <Motu />
    <Raushan />
  </>
  );
};
const Name = () => {
  return <h1>my name is abhishek</h1>;
};
const Motu = () => {
  return <p> i have to learn react today </p>
};
const Raushan = () => {
  return <h>i am Raushan</h>
};
// --------how react is actully looking into it
// const App = ()=>{
//   return React.createElement(
//     "div",
//     {},
//     <h1>hello worldsss</h1>
//   )
// }
export default App;
*/
import React from 'react'
import Resturants from './component/basics/Cresturant';

const App = () => {
  return (
    <>
       <Resturants />;
    </>
  );
};

export default App
