import foodBasket from "../assets/Image (4).png"
import rightArrow from "../assets/Aoorw (1).png"
import leftArrow from "../assets/Aoorw.png"
import thirdfood from "../assets/Image (6).png"
import buttonarrow from "../assets/Group.svg"
import React from "react"


export default function TopComponent (){
const [slide, setSlide] = React.useState(true)

const changeSlide = () => {
    setSlide( !slide);
}
    return(
        <>
       <section className="topbg"   >
        
        
<div className={`background-logo-div ${slide ? "active" : "hiddenn"}`} >
            <button className="arrows" onClick={changeSlide}><img src={rightArrow} alt="" /></button>

         <div className="centered">
               <img src={foodBasket} alt="food.svg" className="foodsvg" />
           
            <div className="spacer">
               <span className="welcometoshoppery">Welcome to shoppery</span>
               <h2>Fresh & Healthy Organic Food</h2>
               <span className="spanned">Sale up to <strong> 30% off</strong></span>
               <p>Free shipping on all your order. we deliver, you enjoy</p>
              <div className="btndiv"> <button className="btn">Shop now <img src={buttonarrow}alt="" /> </button></div>
            </div>
         </div>
           <button  className="arrows" onClick={changeSlide}>  <img src={leftArrow} alt="" /></button>

        </div>



        {/*second slider*/}
 



       {/*third slider*/}
       
        
         <div className={`background-logo-div ${slide ? "hiddenn" : "active"}`}  >
            <button className="arrows" onClick={changeSlide}><img src={rightArrow} alt="" /></button>

        <div className="centered">
                <img src={thirdfood} alt="food.svg" />
           
            <div className="spacer">
               <span className="welcometoshoppery">Welcome to shoppery</span>
               <h2> Fresh & <br /> Healthy <br /> Organic Food</h2>
               <span className="spanned">Sale up to <strong> 30% off</strong></span>
               <p>Free shipping on all your order. we deliver, you enjoy</p>
              <div className="btndiv"> <button className="btn">Shop Now <img src={buttonarrow}alt="" /> </button></div>
            </div>
        </div>
           <button className="arrows" onClick={changeSlide}>  <img src={leftArrow} alt=""  /></button>

        </div>

            
      

       </section> 
      
      
        
        </>
    )
}