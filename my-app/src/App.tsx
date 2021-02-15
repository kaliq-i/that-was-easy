import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


function App() {
  const [countTruth, setCount] = React.useState(false);
  const [countOverall, setCountOverall] = React.useState(0);
  const [countEasy, setCountEasy] = React.useState(0);
  const [countOk, setCountOk] = React.useState(0);
  const [countDifficult, setCountDifficult] = React.useState(0);
  const [countTooDifficult, setCountTooDifficult] = React.useState(0);

  const difficultyArr = [
    {
      i: "easy",
      color: "green",
      color2: "red",
      count: countEasy,
    }, 
    {
      i: "ok",
      color: "yellow",
      color2: "orange",
      count: countOk,
    }, 
    {
      i: "difficult",
      color: "orange",
      color2: "yellow",
      count: countDifficult,
    },
    {
      i: "too difficult",
      color: "red",
      color2: "green",
      count:countTooDifficult
    }
  ];

  const alertCaller = (identity: string) => {
    setCount(!countTruth)
    alert(`that was ${identity}`);
    setCountOverall(countOverall + 1)
    switch(identity) {
      case "easy":
        setCountEasy(countEasy + 1);
        break;
      case "ok":
        setCountOk(countOk + 1);
        break;
      case "difficult":
        setCountDifficult(countDifficult + 1); 
        break;
      default:
        setCountTooDifficult(countTooDifficult + 1);
      }
    }

  
  const buttonMaker = ( {i, color,color2,count} : {i: string, color: string, color2:string, count:number} ) => {
    const all = [countDifficult,countEasy,countOk,countTooDifficult]
    const largest = Math.max(...all)
    if (largest === count && largest !== 0) {
      return <button className={`button ${countTruth?color:color2}`} onClick = {() => 
        alertCaller(i)}>{i} :)</button>
    } else {
    return (
       <button className={`button ${countTruth?color:color2}`} onClick = {() => 
    alertCaller(i)}>{i}</button> 
    )}
  }

  const buttons = difficultyArr.map(buttonMaker);

  return (
    <div className="widerBox">
      {buttons}
      <h1>{`${countTruth}`}</h1>
      <h1>{`The number of clicks in total is ${countOverall}`}</h1>
      <h1>{`The number of clicks on Easy is ${countEasy}`}</h1>
      <h1>{`The number of clicks in OK is ${countOk}`}</h1>
      <h1>{`The number of clicks in Difficult is ${countDifficult}`}</h1>
      <h1>{`The number of clicks in Too Difficult is ${countTooDifficult}`}</h1>
    </div>
  );
}

export default App;
