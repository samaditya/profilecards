import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
          <Route exact path="/signup" key={Signup} element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
   
    </>
  );
}

export default App;
