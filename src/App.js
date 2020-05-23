import React from 'react';
import NavigationBar from "./components/index";
import './App.css';
import MainContent from './components/main';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainContent/>
    </div>

  );
}

export default App;
