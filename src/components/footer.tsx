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










export default function Footer (){

    return(
              <section className="gap-10  bg-black text-white h-80 w-full flex flex-col items-center justify-center   "
        >
            <section className="    flex items-center justify-center gap-30 w-full text-[16px] ">
            
                <div
                 data-aos="fade-left" data-aos-duration="1200"
                className="flex flex-col gap-3 items-start">
                    
                   <div className="flex  gap-2">
                     <img src={plant} alt="" /> 
                     <h1>ECOBAZAR</h1>
                     </div>
                      <p className="text-start md:w-50">
                        The leading world food producing company <br />in africa and beyond</p>
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
                
                className="flex flex-col gap-3 items-start">
                  
                     <h2>My Account</h2>
                    <img src={line}alt="" />
                  
                    <ul className="flex flex-col gap-2 items-start ">
                        <li>My Account</li>
                        <li>Order History</li>
                        <li>Shoping Cart</li>
                       <li> Wishlist</li>

                    </ul>
                </div>

                {/*helps*/}
                 <div
                  data-aos="fade-left" data-aos-duration="1200"
                  className="flex flex-col gap-3 items-start">
                 
                        <h2>Helps</h2>
                    <img src={line}alt="" />
                   
                    <ul className="flex flex-col items-start gap-2">
                        <li>Contacts</li>
                        <li>FAAQ</li>
                        <li>Terms & conditions</li>
                       <li> Privacy Policy</li>

                    </ul>
                </div>
                {/*proxy*/}
                 <div 
                  data-aos="fade-left" data-aos-duration="1200"
                 className="flex flex-col gap-3 items-start">
               
                      <h2>Proxy</h2>
                    <img src={line}alt="" />
                 
                    <ul className="flex flex-col items-start gap-2">
                        <li>About</li>
                        <li>Product</li>
                        <li>Shop</li>
                       <li> Track Order</li>

                    </ul>
                </div>

                {/*downloads*/}
                <div 
                 data-aos="fade-left" data-aos-duration="1200"
                 className="flex flex-col gap-3 items-start">
                  
                   
                         <h2>DownLoad Mobile App</h2>
                      <img src={line}alt="" />
                   
                 
                     <section
  data-aos="fade-left"
  data-aos-duration="1400"
  className="flex flex-col items-center gap-10"
>
 <div>
     {/* Apple */}
  <div className="flex items-center gap-3  px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition">
    <img src={apple} alt="Apple Store" className="w-6 h-6" />
    <span className="text-xs leading-tight">
      Download on the <br />
      <strong className="text-sm">App Store</strong>
    </span>
  </div>

  {/* Google */}
  <div className="flex items-center gap-3   px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition">
    <img src={google} alt="Google Play" className="w-6 h-6" />
    <span className="text-xs leading-tight">
      Get it on <br />
      <strong className="text-sm">Google Play</strong>
    </span>
  </div>
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