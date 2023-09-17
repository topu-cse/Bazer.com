import React from 'react';
import { useCart } from '../../../components/context/Cart';
import { FiShoppingBag} from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const Cartpage = () => {
    const [cart,setCart]=useCart()
    //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
    
    return (
        <div>
             <div>
                  <div >
                    <h1 className='flex '>< FiShoppingBag size={20} className=''/> <span className='px-2 text-[20px]'>{cart?.length  ? `${cart.length} Item`:"You don't product add" }</span></h1>
                  </div>
                  <hr className='mt-2 '/>


                  {/* Cart */}
                  <div className='mt-10'>
                    {
                        cart?.map(p=>(
                          <div className='flex justify-between '>

                            <div>
                                <img src={p.img} alt=""  className='h-[70px]'/>
                            </div>

                            <div className='mt-5 text-left'>
                                <p>{p.name}</p>
                                <p>{p.price} TK</p>
                            </div>

                            <div className='mt-5 '>
                                 {p.price} TK
                            </div>

                            <div className='mt-5 cursor-pointer'>
                                <TiDeleteOutline size={20} onClick={() => removeCartItem(p._id)}/>
                            </div>
                          </div>  
                        ))
                    }
                  </div>


                  {/* total price */}
                  <div className='text-center mt-10'>
                    <p>total price : {totalPrice()}</p>
                  </div>
                  <button className=' border-solid border-[1px] border-green-500 transition duration-700
                              text-black absolute  rounded-none mt-10
                              hover:bg-green-600 px-8 py-4'>EXPLORE PRODUCTS</button>
             </div>
        </div>
    );
};

export default Cartpage;