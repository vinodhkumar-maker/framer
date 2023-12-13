import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const ScollPage = () => {
    const variants={
       initial:{
           opacity:0,
           x:-500,
           y:0,

       },
       animate:{
        opacity:1,
        x:0,
        y:0,
        transition:{
            duration:1,
            type:'spring',
            stiffness:50,
            damping:10,
            when:'beforeChildren',
            staggerChildren:0.4,
            boxshadow:'4px 4px 10px 3px red',
            repeat:Infinity,
        }
       }

    }
  return (
 <Content>
    <motion.div className='container' variants={variants} animate='animate' initial='initial'>
        <motion.p whileHover={
            {
                scale:1.2,
                textShadow:'0px 0px 8px rgb(255,255,255)',
                boxShadow:'0px 0px 8px rgb(255,255,255)',
                transition:{
                    duration:0.3,
                    yoyo:Infinity
                }
            }
  
        }>
            Biiitup
        </motion.p>

    </motion.div>

 </Content>
  )
}

export default ScollPage
const Content= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// width:100%;
// height:100vh;
.container{
    height:200px;
    width:200px;
    background:#b2ebf2;
    border-radius:10px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:1px 1px 8px red;
    border:1px solid red;
    padding:10px;
    p{
        font-size:20px;
        font-weight:bold;
        cursor:pointer;
    }
  
   
    
}

`