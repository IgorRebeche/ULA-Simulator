import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './container/MainCard';
import 'antd/dist/antd.css';
import InputValues from './components/InputValues';
import UlaFields from './components/UlaFields';
import { Alert } from "antd";
import ULA_App from './logicHelper';

function App() {
  const [R1, setR1] = useState(0);
  const [R2, setR2] = useState(0);
  const [Output, setOutput] = useState(0);
  const [Flag, setFlag] = useState(0);
  const [Operando, setOperando] = useState(0);
  console.log( R1, R2, Output, Flag);
  
  
  
  const btnCalc = (input) => {
    console.log(input.split(' '));
    var results = ULA_App(input.split(' '));
    console.log(results);
    results.r1 ? setR1(results.r1) : setR1(0);
    results.r2 ? setR2(results.r2) : setR1(0);
    results.output ? setOutput(results.output) : setOutput(0);
    results.flag ? setFlag(results.flag) : setFlag(0);
    results.operando ? setOperando(results.operando) : setOperando(0);

  }

  return (
    <div className="App">
      {
        Flag != 0?
        <Alert showIcon={false} message={'Flag identificada: ' + Flag.label} banner /> :
        <div></div>
      }
      <div className="mainView">
        <InputValues onClick = {btnCalc}/>
        <MainCard title="ULA Simulator">
          {
            R1 ? 
            <UlaFields R1 ={R1} R2 ={R2} Output ={Output} Flag ={Flag ? Flag.code : 0} Operando={Operando}/> :
            <p>Digite o sinal para a ULA calcular</p>
          }
          
        </MainCard>
      </div>
    </div>
  );
}


export default App;
