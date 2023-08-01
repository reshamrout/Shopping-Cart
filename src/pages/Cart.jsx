import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {

  const {cart} = useSelector((state)=>state);
  console.log(cart)

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
      setTotalAmount(cart.reduce((acc, curr)=> acc + curr.price, 0))
  },[cart])


  return (
      <div className="mt-20 max-w-5xl h-full mx-auto">
        {
          cart.length > 0 ? 
          (
            <div className="flex gap-x-20">
              <div className="">
                {
                  cart.map((item)=>(
                    <CartItem key={item.id} item={item}/>
                  ))
                }
              </div>

              <div className="relative w-full h-[500px] flex flex-col gap-2 mt-20">
                <div>
                  <p className="text-green-600 font-semibold text-lg uppercase">Your Cart</p>
                  <p className="text-green-600 font-bold text-4xl uppercase">Summary</p>
                  <p className="text-slate-600 mt-4 font-semibold">Total Item: {cart.length}</p>
                </div>
                <div className="absolute bottom-0">
                  <p className="text-slate-800 font-semibold ">Total Amount: <span className="font-bold text-black">${totalAmount}</span></p>
                  <button
                  className="text-white font-semibold bg-green-700 py-1 px-20 rounded-md uppercase mt-2"
                  >Checkout Now</button>
                </div>
              </div>
            </div>
          ):
          
          (
            <div className="flex flex-col h-full gap-y-2 justify-center items-center">
              <p>Cart Empty</p>
              <NavLink to="/">
                <button 
                className="text-white font-semibold bg-green-600 py-1 px-6 rounded-md uppercase"
                >
                  Shop Now
                </button>
              </NavLink>
            </div>
          )
        }
          
          
      </div>
  );
};

export default Cart;
