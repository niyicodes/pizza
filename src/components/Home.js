import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

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

const Home = () => {
 return (
  <motion.div
   className="home container"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ delay: 1, duration: 1.5 }}
  >
   <motion.h2>Welcome to Pizza Joint</motion.h2>
   <Link to="/base">
    <motion.button variants={buttonVariants} whileHover="hover">
     Create Your Pizza
    </motion.button>
   </Link>
   <Loader />
  </motion.div>
 );
};

export default Home;
