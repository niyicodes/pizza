import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  init:{
    opacity: 0,
    x: '100vw'
  },
  visible:{
    opacity:1,
    x: 0,
    transition:{
      type: "spring", 
      delay: 0.2 
    }
  }
}
const nextVariants = {
  init:{
    x: '-100vw'
  },
  visible:{
    x: 0,
    transition:{
      delay: 0.2, 
      type: "spring", 
      stiffness: 100
    }
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

const Base = ({ addBase, pizza }) => {
 const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

 return (
  <motion.div
   className="base container"
   variants={containerVariants}
   initial='init'
   animate='visible'
  >
   <h3>Step 1: Choose Your Base</h3>
   <ul>
    {bases.map((base) => {
     let spanClass = pizza.base === base ? "active" : "";
     return (
      <motion.li
       key={base}
       onClick={() => addBase(base)}
       whileHover={{
        scale: 1.3,
        originX: 0,
        color: "#f8e112",
       }}
       transition={{ type: "spring", stiffness: 300 }}
      >
       <span className={spanClass}>{base}</span>
      </motion.li>
     );
    })}
   </ul>

   {pizza.base && (
    <motion.div
     className="next"
     variants={nextVariants}
    >
     <Link to="/toppings">
      <motion.button
      variants={buttonVariants}
       whileHover='hover'
      >
       Next
      </motion.button>
     </Link>
    </motion.div>
   )}
  </motion.div>
 );
};

export default Base;
