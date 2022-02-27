import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home--container">
        <img className="home--image" src="https://m.media-amazon.com/images/I/71KjJC3iWfL._SX3740_.jpg" alt="" />

         <div className="home--row">
         <Product 
            id="01"
            title="Acer Nitro 5 Gaming Laptop"
            price={99999}
            image="https://m.media-amazon.com/images/I/61aJKuSrOhL._SL1024_.jpg"
         />

         <Product 
            id="02"
            title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
            price={119900}
            image="https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg"
         />
          <Product 
            id="03"
            title="Ant Esports H1100 Pro RGB Wired Over-Ear Gaming Headset"
            price={874}
            image="https://m.media-amazon.com/images/I/71pBDZibhXL._SL1500_.jpg"
         />
          <Product 
            id="04"
            title="Beats Studio Buds – True Wireless Noise Cancelling Earbuds"
            price={7699}
            image="https://m.media-amazon.com/images/I/51klpJqbRMS._SL1500_.jpg"
         />
         
         </div>

         <div className="home--row">

         <Product 
            id="05"
            title="boAt Stone 1200 14W Bluetooth Speaker"
            price={3299}
            image="https://m.media-amazon.com/images/I/61vuhPqnVaL._SL1500_.jpg"
         />
         <Product 
            id="06"
            title="OZJI Men's Basketball Casual Boots"
            price={660}
            image="https://m.media-amazon.com/images/I/614+cjRAPwL._UL1500_.jpg"
         />
         <Product 
            id="07"
            title="Honor 2 BT Watch 2 with Battery- Charcoal Black"
            price={10199}
            image="https://m.media-amazon.com/images/I/61W4meSdVQL._SL1000_.jpg"
         />
         
        

         </div>
         <div className="home--row">
         <Product 
            id="09"
            title="Redmi 108 cm (43 inches) Full HD Smart LED TV"
            price={23999}
            image="https://m.media-amazon.com/images/I/71F0j4xzGiL._SL1500_.jpg"
         />
         <Product 
            id="09"
            title="Single Seater Sofa for Living Room"
            price={18005}
            image="https://m.media-amazon.com/images/I/51dzjjlaUsL.jpg"
         />

         </div>


        </div>
    </div>
  )
}

export default Home