import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './container/MainCard';
import 'antd/dist/antd.css';
import InputValues from './components/InputValues';

function App() {
  return (
    <div className="App">
      <div className="mainView">
        <InputValues/>
        <MainCard title="ULA Simulator">
        </MainCard>
      </div>
    </div>
  );
}

export default App;
