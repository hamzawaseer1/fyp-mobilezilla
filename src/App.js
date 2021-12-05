import './App.css';
import Nav from "./components/Navbar"
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      
    </>
  );
}

export default App;
