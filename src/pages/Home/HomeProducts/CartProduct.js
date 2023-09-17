import React  from 'react';
import { useCart } from '../../../components/context/Cart';
import toast from 'react-hot-toast';

const CartProduct = ({modalproducts}) => {
    const [cart,setCart]=useCart()
    if (!modalproducts) {
        return null; // Return early or display an error message
      }
     
    //   const { name, price,img,id } = modalproducts;
    return (
        <div>
            <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal  ">
                <div className="modal-box relative ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img    src={modalproducts.img}alt="" />
                    <div className='text-center'>
                    <h3 className="text-lg font-bold">{modalproducts.name}</h3>
                    <h3 className="text-lg font-bold">price: ${modalproducts.price}</h3>
                    <h3 className="text-lg font-bold">id:{modalproducts.id}</h3>
                    <button onClick={() => {
                        setCart([...cart, modalproducts]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, modalproducts])
                        );
                        toast.success("Item Added to cart");
                      }}
                     className='border-solid border-[1px] border-black-200 
                           px-[30px] mt-3  py-4 bg-green-500
                               '>Add Cart</button>
                    </div>
                   
                   
                    
                </div>
            </div>
        </>
        </div>
    );
};

export default CartProduct;