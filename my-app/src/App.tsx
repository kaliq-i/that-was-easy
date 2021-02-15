import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root')

// const state = {eventCount: 0, username: ''}

// function App() {
//   function handleClick() {
//     setState({eventCount: state.eventCount + 1})
//     alert("that was easy")
//   }

//   // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//   //   setState({username: event.target.value})
//   // }

//   return (
//     <div>
//       <p>There have been {state.eventCount} events.</p>
//       <p>
//         <button onClick={handleClick}>Easy</button>
//       </p>
//       {/* <p>You typed: {state.username}</p>
//       <p>
//         <input onChange={handleChange} />
//       </p> */}
//     </div>
//   )
// }

// const state = {eventCount: 0, username: ''}

// function App() {

//   function setState(newState: { eventCount: number; } | { username: string; } ) {
//     Object.assign(state, newState);
//     renderApp();
//   }

//   return (
//     <div>
//       <p>There have been {state.eventCount} events.</p>
//       <p>
//         <button onClick={() => {setState({eventCount: state.eventCount + 1}); 
//         return (alert("that was easy"))
//         }}>Easy</button>
//       </p>
//     </div>
//   )
// }

// function renderApp() {
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

// renderApp()

const difficultyArr = [
  {i: "easy",
  color: "green",
  color2: "red"}, 
  {i: "ok",
  color: "yellow",
  color2: "orange"}, 
  {i: "difficult",
  color: "orange",
  color2: "yellow"},
  {i: "too difficult",
  color: "red",
  color2: "green"}
];

function App() {
  const [count, setCount] = React.useState(false);
  const [countOverall, setCountOverall] = React.useState(0);
  const [countEasy, setCountEasy] = React.useState(0);
  const [countOk, setCountOk] = React.useState(0);
  const [countDifficult, setCountDifficult] = React.useState(0);
  const [countTooDifficult, setCountTooDifficult] = React.useState(0);

  const alertCaller = (identity: string) => {
    // console.log(count);
    // count == false ? setCount(true) : setCount(false);
    setCount(!count)
    // setTimeout(() => console.log(count), 5000);
    alert(`that was ${identity}`);
    difficultyArr.map((i) => [i.color, i.color2] = [i.color2, i.color]);
    setCountOverall(countOverall + 1)
    switch(identity) {
      case "easy" && "easy :)":
        setCountEasy(countEasy + 1);
        break;
      case "ok" && "ok :)":
        setCountOk(countOk + 1);
        break;
      case "difficult" && "difficult :)":
        setCountDifficult(countDifficult + 1); 
        break;
      default:
        setCountTooDifficult(countTooDifficult + 1);
      }
    console.log("hi!")
    let countArr = [countEasy, countOk, countDifficult, countTooDifficult]
    for (let n = 0; n < 3; n++) {
      if (countArr[n] == Math.max(...countArr)) {
        if ((difficultyArr[n].i).includes(" :)")) {
        } else {
        difficultyArr[n].i = (difficultyArr[n].i).concat(" :)");
        };
        console.log(difficultyArr[n].i);
      }
    }
  }

  // const switchColors = ( {color, color2 = color2, color}) => {
  //   let {i, color, color2} : {i: string, color: string, color2: string};
  //   color, color2 = color2, color 
  // }
  
  const buttonMaker = ( {i, color} : {i: string, color: string} ) => {
    return ( <button className={`button ${color}`} onClick = {() => 
    alertCaller(i)}>{i}</button> )
  }

  const buttons = difficultyArr.map(buttonMaker);

  return (
    <div className="widerBox">
      {buttons}
      <h1>{`${count}`}</h1>
      <h1>{`The number of clicks in total is ${countOverall}`}</h1>
      <h1>{`The number of clicks on Easy is ${countEasy}`}</h1>
      <h1>{`The number of clicks in OK is ${countOk}`}</h1>
      <h1>{`The number of clicks in Difficult is ${countDifficult}`}</h1>
      <h1>{`The number of clicks in Too Difficult is ${countTooDifficult}`}</h1>
    </div>
  );
}

export default App;
