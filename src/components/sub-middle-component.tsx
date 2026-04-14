import group1svg from "../assets/Group (1).svg"
import rightArrow from "../assets/Aoorw (1).png"
import leftArrow from "../assets/Aoorw.png"
import veggies from "../assets/Vegetable (1).png"
import fruits from "../assets/fruits 1 (1).png"
import feesh from "../assets/fish 1.png"
import meat from "../assets/meat 1 (3).png"
import snacks from "../assets/snacks 1 (1).png"
import drinks from "../assets/Filled outline.png"
import man from "../assets/Image (7).png"
import rightman from "../assets/Image (8).png"
import buttonarrow from "../assets/Group.svg"
import check from "../assets/Check.svg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import React from "react"
export default function SubMiddle (){

    
    React.useEffect(()=>{
    
    Aos.init({
      duration:800,
      once:true,
      offset:100,
    })
    
    },[])
    return(
        <>
       <section className="sub-third-category">
         <section className="sub-third">
              <div   data-aos="fade-left" data-aos-duration="1200" >
                 <div className="classic">
                <h2>Shop by Top Categories</h2>
                <span>View All <img src={group1svg} alt="" /></span>
            
               </div>
             {/*ist card*/}
        
             <div className="categories">
                <div>
                <img src={rightArrow} alt="" />

                </div >
             <div className="design">
                <img src={veggies}alt="" />
                <h4>Vegetables</h4>
                <span>100 products</span>


              </div>
              <div className="design">
                <img src={fruits}alt="" />
                <h4>Fresh Fruits</h4>
                <span>137 products</span>


              </div>
              <div className="design">
                <img src={feesh}alt="" />
                <h4>Fish</h4>
                <span>34 products</span>


              </div>
             <div className="design">
                
                <img src={meat}alt="" />
                <h4>Meat</h4>
                <span>165 products</span>


               </div>
             <div className="design" style={{padding:"50px 30px"}}>
                
                <img src={drinks}alt="" style={{width:"80px"}} />
                <h4>Water and Drinks</h4>
                <span>48 products</span>


             </div>
              <div className="design">
                
                <img src={snacks}alt="" />
                <h4>Snacks</h4>
                <span>166 products</span>


              </div>
              <div>
                <img src={leftArrow} alt="" />
  
              </div >
               </div>
              </div>
            
         </section>
{/*end of first sub section*/}
<section data-aos="fade-left" data-aos-duration="1200" >
    <section className="last-sub-section">
<img src={rightman} alt="right.svg" />
<img src={man} alt="man.logo" />
<div className="last-classe">
    <h1 className="headertxt">100% Trusted <br/> Organic Food Store</h1>
<div className="checked">
    <img src={check} alt="" />
    <p><strong>Healthy & natural food for lovers of healthy food.</strong> <br />
Ut quis tempus erat. Phasellus euismod  bibendum magna non <br />tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
</div>

<div className="checked">
    <img src={check} alt="" />
    <p><strong>Every day fresh and quality products for you.</strong> <br />
Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.</p>
</div>
<div ><button className="shopnow"><span className="buttonss">Shop Now <img src={buttonarrow } alt="" /> </span></button></div>

</div>

</section>
</section>

        </section>
        
        </>
    )
}