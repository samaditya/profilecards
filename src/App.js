import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
          <Route exact path="/signup" key={Signup} element={<Signup />} />
          <Route exact path="/login" key={Login} element={<Login/>} />
          <Route exact path="/" key={Home} element={<Home/>} />
          <Route exact path="/profile" key={Profile} element={<Profile/>} />
          </Routes>
        </div>
      </BrowserRouter>
   
    </>
  );
}

export default App;
