import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const RotatePage = () => {
    return (
        <Container>
            <motion.div className='rotate'
                initial={{
                    rotate: 0,
                    borderRadius: '20px',
                    backgroundColor: 'pink',
                    width: 200,
                    height: 200,
                    boxShadow: '4px 4px 10px 3px red'
                }}
                animate={{
                    rotate: 360,
                    borderRadius: '0%',
                    backgroundColor: 'blue',
                    width: 300,
                    height: 300,
                    boxShadow: '4px 4px 10px 10px red',
                    border: '2px solid white'
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 1,
                    ease: 'easeInOut'
                }}
                rotate={360}
            >
                Biiit Up
            </motion.div>
            <motion.div className='scroll'
            initial={{
                opacity:0,  
                x:500,
                y:-500,         
             }}
             animate={{
                opacity:1,
                x:0,
                y:0,
                opacity:1,
                transition:{
                    duration:2,
                    damping:5,
                    type:'spring',
                    staggerChildren:1,
                    repeat:Infinity,
                    boxShadow:'4px 4px 10px 10px red',
                }
             }}
            >
                Biiit Up

            </motion.div>
        </Container>
    )
}

export default RotatePage
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:10px;
margin-bottom:10px;

.rotate{
    width:200px;
    height:200px;
    background-color:pink;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    font-weight:bold;
    font-size:20px;
    }
    .scroll{
        margin:80px;
        width:200px;
       
    height:200px;
    background-color:pink;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:red;
    font-weight:bold;
    font-size:20px;
    box-shadow:1px 1px 8px blue;
    }
}

`