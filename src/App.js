import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Converteasy - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Converteasy is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Converteasy Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Converteasy - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="Converteasy" aboutText="About Converteasy" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="Converteasy" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
      </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;