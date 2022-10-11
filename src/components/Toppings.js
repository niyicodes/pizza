import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  init:{
    x: "100vw", 
    y: "-50vh"
  },
  visible:{
    opacity:1,
    x: 0,
     y: "-8vh" ,
    transition:{ type: "spring", delay: 0.2 }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    transition:{
      // helps in repeating
      yoyo: 10,
      duration: .3
    }
  },
};



const Toppings = ({ addTopping, pizza }) => {
 let toppings = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
 ];

 

 return (
  <motion.div
   className="toppings container"
   variants={containerVariants}
   initial='init'
   animate='visible'
  >
   <h3>Step 2: Choose Toppings</h3>
   <ul>
    {toppings.map((topping) => {
     let spanClass = pizza.toppings.includes(topping) ? "active" : "";
     return (
      <motion.li
       key={topping}
       onClick={() => addTopping(topping)}
       whileHover={{
        scale: 1.3,
        originX: 0,
        color: "#f8e112",
       }}
       transition={{ type: "spring", stiffness: 150 }}
      >
       <span className={spanClass}>{topping}</span>
      </motion.li>
     );
    })}
   </ul>

   <Link to="/order">
    <motion.button
    variants={buttonVariants}
     whileHover='hover'
    >
     Order
    </motion.button>
   </Link>
  </motion.div>
 );
};

export default Toppings;
