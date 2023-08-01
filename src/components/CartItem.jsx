import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = (props) => {
  const dispatch = useDispatch();

  let item= props.item;

  function removeItem(){
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }

  return (

    <div>
      <div className='flex space-y-2 mb-8 mt-8 ml-4'>
        <div className='h-[180px] w-[150px] mr-8 '>
          <img src={item.image} className='h-full w-full'/>
        </div>

        <div className='flex flex-col gap-3 justify-center'>
          <p className='text-gray-700 font-semibold text-left w-80 text-md mt-1'>{item.title}</p>
          <p className='text-gray-800 font-normal w-80 text-left text-[12px]'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
          
          <div className='flex justify-between'>
            <p className='text-green-600 font-bold text-md'>${item.price}</p>

            <div onClick={removeItem}
            className='text-red-500 bg-red-200 rounded-full p-2'
            >
                <AiFillDelete/>
            </div>
              
          </div>
        </div>
      </div>
      <div className='w-full bg-slate-500 h-[2px] rounded-full'></div>
    </div>



  );
};

export default CartItem;
