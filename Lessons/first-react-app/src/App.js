// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {

  const [mode ,setMode]= useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setInterval(() => {
      setAlert(null)
    }, 2000);
  }

  const togglemode= ()=>{
    if(mode==="light"){
      setMode("dark"); 
      document.body.style.backgroundColor='black'
      showAlert("Dark mode is enabled" ,"success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled" ,"success")
    }
  }

  const togglToBlue= ()=>{
    if(mode==="light"){
      setMode("#0d6efd"); 
      document.body.style.backgroundColor='#0d6efd'
      document.body.style.color='black'
      showAlert("Dark mode is enabled" ,"success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled" ,"success")
    }
  }
  const togglToGreen= ()=>{
    if(mode==="light"){
      setMode("#198754"); 
      document.body.style.backgroundColor='#198754'
      document.body.style.color='black'
      showAlert("Dark mode is enabled" ,"success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled" ,"success")
    }
  }
  const togglToYellow= ()=>{
    if(mode==="light"){
      setMode("#ffc107"); 
      document.body.style.backgroundColor='#ffc107'
      document.body.style.color='black'
      showAlert("Dark mode is enabled" ,"success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled" ,"success")
    }
  }
  
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="text-app" mode={mode} togglemode={togglemode} togglToBlue={togglToBlue} togglToGreen={togglToGreen} togglToYellow={togglToYellow} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="TextUtiles" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;

