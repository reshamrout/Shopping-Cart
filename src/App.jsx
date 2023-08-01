import Navbar from './components/Navbar';
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route,Routes } from "react-router-dom";

const App = () => {
  return(
    <div className='w-screen h-screen '>

      <div className='bg-slate-700 fixed top-0 w-full '>
      <Navbar/>
      </div>
      
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
    )
};

export default App;
