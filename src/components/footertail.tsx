import React from "react"

import plant from "../assets/plant 1.svg"
import faceBook from "../assets/Social Media.svg"
import instagram from "../assets/Social Media (3).svg"
import pintrest from "../assets/Social Media (2).svg"
import twitter from  "../assets/Social Media (1).svg"
import apple from "../assets/Apple---Negative 1.png"
import google  from "../assets/Icon=google-play 1.svg"
import applePay from "../assets/Method=ApplePay.svg"
import visa from "../assets/Method=Visa.svg"
import mastercard from  "../assets/Method=Mastercard.png"
import cart from "../assets/Cart (1).svg"
import discover from "../assets/Method=Discover.png"
import line from "../assets/Line 14.svg"

import Aos from "aos"
import 'aos/dist/aos.css'



export default function(){
React.useEffect(()=>{

Aos.init({
  duration:800,
  once:true,
  offset:100,
})

},[])
    return(
        


    
        <section className="  bg-black text-white flex flex-col left-0 b0ttom-0 mt-10 space-y-5 m-0 w-full "
        >
            <section className="space-y-10 sm:flex  items-center text-[11px] pt-10 sm:justify-center md:text-[16px] space-x-10">
            
                <div
                 data-aos="fade-left" data-aos-duration="1200"
                className="space-y-10 sm:space-y-2">
                    
                   <div className="flex-center">
                     <img src={plant} alt="" /> 
                     <h1>ECOBAZAR</h1>
                     </div>
                    <p className="text-center sm:w-40 md:w-50">The leading world food producing company <br />in africa and beyond</p>
                   
                    <div 
                     data-aos="fade-left" data-aos-duration="1200"
                    className="flex-center ">
                        <img src={faceBook} alt="facebool.svg" className="sm:w-7"/>
                        <img src={twitter} alt="twitter.svg" className="sm:w-7"/>
                        <img src={pintrest} alt="pintrest.svg"  className="sm:w-7"/>
                        <img src={instagram} alt="instagram.sv"  className="sm:w-7" />
                    </div>
                </div>
                {/*my account*/}

                <div
                 data-aos="fade-left" data-aos-duration="1200"
                
                className="flex flex-col items-center sm:space-y-3">
                  
                     <h2>My Account</h2>
                    <img src={line}alt="" />
                  
                    <ul className="flex flex-col items-center sm:space-y-2">
                        <li>My Account</li>
                        <li>Order History</li>
                        <li>Shoping Cart</li>
                       <li> Wishlist</li>

                    </ul>
                </div>

                {/*helps*/}
                 <div
                  data-aos="fade-left" data-aos-duration="1200"
                  className="flex flex-col items-center sm:space-y-3">
                 
                        <h2>Helps</h2>
                    <img src={line}alt="" />
                   
                    <ul className="flex flex-col items-center sm:space-y-2">
                        <li>Contacts</li>
                        <li>FAAQ</li>
                        <li>Terms & conditions</li>
                       <li> Privacy Policy</li>

                    </ul>
                </div>
                {/*proxy*/}
                 <div 
                  data-aos="fade-left" data-aos-duration="1200"
                 className="flex flex-col items-center sm:space-y-3">
               
                      <h2>Proxy</h2>
                    <img src={line}alt="" />
                 
                    <ul className="flex flex-col items-center sm:space-y-2">
                        <li>About</li>
                        <li>Product</li>
                        <li>Shop</li>
                       <li> Track Order</li>

                    </ul>
                </div>

                {/*downloads*/}
                <div 
                 data-aos="fade-left" data-aos-duration="1200"
                 className="flex flex-col items-center space-y-2">
                  
                   
                         <h2>DownLoad Mobile App</h2>
                      <img src={line}alt="" />
                   
                 
                      <section
                       data-aos="fade-left" data-aos-duration="1400"
                       className="flex flex-col items-center space-y-2 ">
                       
                     <div className="sm:flex w-30 flex flex items-center">
                        
                           <img src={apple} alt="" className="w-10 h-7" /> 
                       <span className="text-[12px]"> Download on the <strong className="apple">APPLE STORE</strong> </span>
                     
                     </div>
                      <div className="sm:flex w-30 flex flex items-center">
                          <img src={google} alt=""  />
                           <span className="text-[12px]"> Download on the <strong className="apple">Google Play</strong> </span>
                          
                      </div>
                    
                      </section>

                </div>





            </section>

            {/*copy write*/}
<section className="onehundred">
    <section className="flex flex-col space-y-2 items-center py-10 ">
    <span className="text-[14px] text-center">Ecobazarbyokechukwu eCommerce {new Date().getFullYear()}.All Rights Reserved</span>
    <div className="flex">
        <img src={applePay} alt="" />
        <img src={visa} alt="" />
        <img src={discover} alt="" />
        <img src={mastercard} alt="" />
        <img src={cart} alt="" />
        
    </div>
</section>
</section>
        </section>
    










        
    
    )
}