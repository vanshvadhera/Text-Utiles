import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, { useState } from 'react'
import Alert from './Components/Alerts';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';

  const [showAlert, setShowAlert] = useState(null)
  const setAlert = (message) => {
    setShowAlert({ msg: message, type: 'success' })

    setTimeout(() => {
      setShowAlert(null)
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      setAlert("Light Mode enabled");
      document.body.style = 'background-color: white;';
    }
    else {
      setMode('dark');
      setAlert("Dark Mode enabled");
      document.body.style = 'background-color: black;';
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtiles" about="About" mode={mode} modeToggler={togglemode} />
        {/* <Navbar /> */}
        <Alert alert={showAlert} />

        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Textarea heading="Welcome to Our app" mode={mode} setAlert={setAlert} />}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
