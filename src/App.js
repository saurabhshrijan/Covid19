import React from 'react';
import NavigationBar from "./components/index.jsx";
import './App.css';
import MainContent from './components/main/index.jsx';
import {Provider} from "react-redux";
import store from './redux/store';
require('typeface-roboto')
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <NavigationBar />
    <MainContent/>
    </div>
      </Provider>
  );
}

export default App;
