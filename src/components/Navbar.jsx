import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector((state)=>state);
console.log(cart)


  return(
    <div className=''>
      <nav className='flex justify-between items-center max-w-5xl mx-auto h-full'>

        <div className='ml-5'>
          <NavLink to="/">
            <img src="../logo.png" width={110} height={110}/>
          </NavLink>
        </div>

        <div className='flex relative mr-5 items-center text-slate-100 space-x-6'>
          <NavLink to="/">
            <p className='hover:text-green-300 font-semibold'>Home</p>
          </NavLink>

          
          <NavLink to="/cart">
          <div>
            <FaShoppingCart className='text-lg hover:text-green-300'/>
            {
              cart.length > 0 &&
              <span className='absolute top-0 -right-2 rounded-full w-4 h-4 flex justify-center items-center text-xs animate-bounce bg-green-500 text-white'>{cart.length}</span>
            
            }
            
          </div>
          </NavLink>
        </div>
        
      </nav>

    </div>
    )
};

export default Navbar;
