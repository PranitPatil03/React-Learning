// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="text-app" />
      <div className="container">
      <TextForm heading="TextUtiles"/>
      </div>
    </>
  );
}

export default App;
