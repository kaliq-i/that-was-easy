import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
interface buttonTypes  {
  name:string;
  first_color:string
  second_color:string
  count:number
}


function App() {
  const [countTruth, setCount] = React.useState(false);
  const [countOverall, setCountOverall] = React.useState(0);
  const [countEasy, setCountEasy] = React.useState(0);
  const [countOk, setCountOk] = React.useState(0);
  const [countDifficult, setCountDifficult] = React.useState(0);
  const [countTooDifficult, setCountTooDifficult] = React.useState(0);

  const difficultyArr = [
    {
      name: "easy",
      first_color: "green",
      second_color: "red",
      count: countEasy,
    }, 
    {
      name: "ok",
      first_color: "yellow",
      second_color: "orange",
      count: countOk,
    }, 
    {
      name: "difficult",
      first_color: "orange",
      second_color: "yellow",
      count: countDifficult,
    },
    {
      name: "too difficult",
      first_color: "red",
      second_color: "green",
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

  
  const buttonMaker = ( {name, first_color,second_color,count} : buttonTypes ) => {
    const all = [countDifficult,countEasy,countOk,countTooDifficult]
    const largest = Math.max(...all)
    if (largest === count && largest !== 0) {
      return <button className={`button ${countTruth?first_color:second_color}`} onClick = {() => 
        alertCaller(name)}>{name} :)</button>
    } else {
    return (
       <button className={`button ${countTruth?first_color:second_color}`} onClick = {() => 
    alertCaller(name)}>{name}</button> 
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
