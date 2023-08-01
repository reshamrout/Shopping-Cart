import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Card = (props) => {
    let post=props.post;
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();
    

    function addToCart(){
        dispatch(add(post));
        toast.success("Item Added To Cart");
    }

    function removeFromCart(){
        dispatch(remove(post.id))
        toast.error("Item Removed From Cart")
    }

  return (
    <div className='flex flex-col items-center border shadow-md rounded-xl  justify-between hover:scale-110 
    transition duration-300 ease-in gap-4  mt-10 ml-5 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>

       <div className=''>
        <p className='text-gray-700 font-semibold text-left text-lg w-40 truncate mt-1'>{post.title}</p>
       </div>

       <div>
        <p className='text-gray-400 w-40 font-normal text-left text-[10px]'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
       </div>

       <div className='h-[180px]'>
        <img src={post.image} className='w-full h-full'/>
       </div>

       <div className='flex justify-between items-center w-full gap-10 mt-5 p-4'>
            <div>
                <p className='text-green-600 text-semibold'>${post.price}</p>
            </div>
                 
           
                {
                    cart.some((p)=>p.id == post.id) ?
                        (
                            <button
                            className='hover:text-white text-[10px] hover:bg-gray-700 border-2 text-gray-700
                             border-gray-700 rounded-full p-1 uppercase px-3 font-semibold transition duration-200 ease-in'
                            onClick={removeFromCart}
                            >Remove Item</button>
                        ):
                        (
                            <button
                            className='hover:text-white text-[10px] hover:bg-gray-700 border-2
                             border-gray-700 rounded-full p-1 uppercase px-2 font-semibold transition duration-200 ease-in'
                            onClick={addToCart}
                            >Add  To Cart</button>
                        ) 
                }
            
       </div>

    </div>
  )
}

export default Card