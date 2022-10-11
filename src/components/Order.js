import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const containerVariants = {
 init: {
  x: "100vw",
  y: "-50vh",
 },
 visible: {
  opacity: 1,
  x: 0,
  y: "-8vh",
  transition: {
   type: "spring",
   mass: 0.4,
   damping: 8,
   when: "beforeChildren",
   staggerChildren: 0.4,
  },
 },
};

const childVariants = {
 init: {
  opacity: 0,
 },
 visible: {
  opacity: 1,
 },
};

const Order = ({ pizza, setShowModal }) => {
 useEffect(() => {
  setTimeout(() => {
   setShowModal(true);
  }, 4000);
 }, [setShowModal]);
 return (
  <motion.div
   className="container order"
   variants={containerVariants}
   initial="init"
   animate="visible"
  >
   <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
   
   <motion.p variants={childVariants}>
    You ordered a {pizza.base} pizza with:
   </motion.p>
   <motion.div variants={childVariants}>
    {pizza.toppings.map((topping) => (
     <div key={topping}>{topping}</div>
    ))}
   </motion.div>
  </motion.div>
 );
};

export default Order;
