// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setInterval(() => {
      setAlert(null)
    }, 2500);
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
    }
  }
  
  return (
    <>
      <BrowserRouter>
      <Navbar title="text-app" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm heading="TextUtiles" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

