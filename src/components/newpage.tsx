import carts from "../assets/Cart.svg"
import heart from "../assets/Heart.svg"
import call from "../assets/PhoneCall 1.svg"
import userIcon from "../assets/user_3 1.svg"
import search from "../assets/Search.svg"
import flower from "../assets/plant 1.svg"
import { motion } from "framer-motion" 
import React from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

import Footertail from "./footertail"
export default function Header (){
React.useEffect(()=>{

Aos.init({
  duration:800,
  once:true,
  offset:100,
})

},[])

    return(
    
    

        <>
        <header className="flex  justify-between items-center w-full bg-white
        sm:space-x-10
         md:space-x-30
        py-10 px-10
        lg:justify-between
        ">
      


          

         
          <div className="flex flex-col space-y-1 sm:hidden ">
            <motion.div 
            initial={{scale:0.4, rotate:0}}
            animate={{scale:1, rotate:360}}
            transition={{duration:0.5}}
            className="h-[3px] w-5 bg-green">
                
            </motion.div>
            <motion.div 
             initial={{scale:0.4}}
            animate={{scale:1 }}
            transition={{duration:0.5}}
            className="h-[3px] w-4 bg-green">

            </motion.div>
            <motion.div
             initial={{scale:0.4 }}
            animate={{scale:1}}
            transition={{duration:0.5}} 
            className="h-[3px] w-3 bg-green">

            </motion.div>


          </div>
       



          <div className="flex justify-center items-center ">
          <img src={flower} alt="flower.bg" />  <h3>Ecobazar
            </h3>
            </div>
 
           <div className="flex-center p">
            <img src={carts} alt="" />
         
 </div>
     
         

<motion.div
initial={{ opacity:0, x:-100 }}
animate={{ opacity:1, x:0}}
transition={{ duration:0.5 }}
className="sm:flex-center space-x-3 hidden "
>
    <img src={call}alt="call.svg" className="w-4"/>
    <span className="text-[10px] w-20">(219) 555-0114</span>
    <img src={search} alt="search.logo" className="w-4" />
    <img src={heart} alt="heart.logo"  className="w-4" />
    <img src={carts} alt="cart.logo"  className="w-4"/>
    <img src={userIcon} alt="user.icon"  className="w-4" />
</motion.div>




        </header>

{/*body*/}






































{/*body*/}


      <Footertail/>
        </>
    

  
    )
}