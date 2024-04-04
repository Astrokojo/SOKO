import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import In from './pages/Sign_in'
import Up from "./pages/Sign_up";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/sign_in' element= {<In/>} />
        <Route path='/sign_up' element= {<Up/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
