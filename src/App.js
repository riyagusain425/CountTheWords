// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextCase from './components/TextCase';

function App() {
  return (
    <>
    <Navbar title="WordCounter"/>
   
    <div className="container">
    <TextCase/>
    </div>
    </>
  );
}

export default App;
