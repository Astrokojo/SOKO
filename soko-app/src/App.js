import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import In from './pages/Sign_in'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/sign_in' element= {<In/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
