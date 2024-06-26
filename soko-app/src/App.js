import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import In from './pages/Sign_in'
import Up from "./pages/Sign_up";
import Sell from "./pages/Sell"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<About/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/sign_in' element= {<In/>} />
        <Route path='/sign_up' element= {<Up/>} />
        <Route path='/sell' element= {<Sell/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
