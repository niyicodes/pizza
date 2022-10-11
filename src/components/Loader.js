import { motion, MotionPlugins } from 'framer-motion'
import React from 'react'

const loaderVariants={
 annimateOne:{
  x:[-20,20],
  y:[0, -30],
  transition:{
   x:{
    yoyo:Infinity,
    duration:0.5
   },
   y:{
    yoyo:Infinity,
    duration:0.25,
    ease: 'easeOut'
   }
  }
 }
}


const Loader = () => {
 return (
  <div>
   <motion.div className='loader' variants={loaderVariants} animate='animationOne'>

   </motion.div>
  </div>
 )
}

export default Loader