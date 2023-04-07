import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
    const tShirts=useLoaderData()
    // console.log(tShirts);

    const [cart,setCart]=useState([])

  const handleAddToCart=(tshirt)=>{
    const exist=cart.find(ts=>ts._id === tshirt._id)
    
    if(exist){
       toast.error('You have already added this tshirt')
    }
    else{

        const newCart=[...cart,tshirt]
        setCart(newCart)
    }

  }

  const handleRemoveFromCart=(id)=>{
   const remaining=cart.filter(ts=>ts._id !== id)
   setCart(remaining)
  }

    return (
        <div className='home-container'>
           <div className='t-shirts-container'>
           {
                tShirts.map(tshirt=><TShirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
           </div>

           <div className='card-container'>
                <Cart 
                handleRemoveFromCart={handleRemoveFromCart}
                cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;