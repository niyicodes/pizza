import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const backdrop = {
 init:{
  opacity:0
 },
 visible:{
  opacity:1
 }
}

const modalVariant ={
 init:{
  y:'-100vh'
  ,opacity:0
 },
 visible:{
  opacity:1,
  y:'200px',
  transition:{
   delay: .5
  }
 }
}


const Modal = ({showModal, setShowModal}) => {
 return (
  <AnimatePresence exitBeforeEnter>
   {
    showModal && (
     <motion.div className='backdrop'
     variants={backdrop}
     initial='init'
     animate='visible'
     exit='hidden'
     >
     <motion.div className='modal' variants={modalVariant}>
      <p>Order another pizza by clicking the button below</p>
      <Link to='/base'>
       <button onClick={() => setShowModal(false)}>Start</button>
      </Link>
     </motion.div>
     </motion.div>
    )
   }
  </AnimatePresence>
 )
}

export default Modal