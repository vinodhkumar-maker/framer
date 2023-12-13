import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Dragpage = () => {
  return (
   <Content>
    <p>FRAMER MOTION DRAG</p>
    <motion.div className='box' >
        <motion.h1 className='drag' 
        drag
        dragConstraints={{
            top:-100,
            left:-100,
            right:100,
            bottom:100,
            spring:100,
            damping:10,
            when:'beforeChildren',
            staggerChildren:0.4,
            boxshadow:'4px 4px 10px 3px red'
        }}
        >
            Drag Me
         
        </motion.h1>
    </motion.div>

   </Content>
  )
}
export default Dragpage
const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
.box{
    width:200px;
    height:200px;
    background:#b2ebf2;
    border-radius:10px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;

}
.drag{
    display:flex;
    justify-content:center;
    align-items:center;

    cursor:grab;
    height:100px;
    width:100px;
    background:#aea1ff;
    border-radius:10px;
    border:1px solid red;
    box-shadow: 0 0 10px 3px #;
    font-size:1.5rem;
}

`