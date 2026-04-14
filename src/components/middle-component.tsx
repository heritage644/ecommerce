import third from "../assets/Icon (3).svg"
import fifth from "../assets/Icon (5).svg"
import first from "../assets/Icon (1).svg"
import fouth from "../assets/Icon (4).svg"
import group1svg from "../assets/Group (1).svg"
import discount from "../assets/Tag.png"
import quickView from "../assets/Quick View.svg"
import rating from "../assets/Rating.svg"
import addtowishlist from "../assets/Add To wishlist.svg"
import addedtocatalog from "../assets/Add To Cart (1).svg"
import addToCatalog from "../assets/Add To Cart.svg"
import apple from "../assets/Image.png"
import springonions from "../assets/Product Image (1).png"
import cabbage from "../assets/Image (1).png"
import greenPepper from "../assets/Product Image.png"
import React from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function middleComponent() {


React.useEffect(()=>{

Aos.init({
  duration:800,
  once:true,
  offset:100,
})

},[])


    
    const [borderr , setBorderr] = React.useState(false)

const clickerClick = () => {
setBorderr(!borderr)

}
 const [borderr2 , setBorderr2] = React.useState(false)

const clickerClicker = () => {
setBorderr2(!borderr2)
}
 const  [borderr3 , setBorderr3] = React.useState(false)
const clickerClicker3 = () => {
setBorderr3(!borderr3)
}

const [borderr4 , setBorderr4] = React.useState(false)
const clickerClicker4 = () => {
setBorderr4(!borderr4)

}
const [addItem, setAddItem] = React.useState(false)
const addItemTOCard = ()=> {
    setAddItem(preItem => !preItem)
}
const [addItem2, setAddItem2] = React.useState(false)
const addItemTOCard2 = ()=> {
    setAddItem2(preItem => !preItem)
}

const [addItem3, setAddItem3] = React.useState(false)
const addItemTOCard3 = ()=> {
    setAddItem3(preItem => !preItem)
}
const [addItem4, setAddItem4] = React.useState(false)
const addItemTOCard4 = ()=> {
    setAddItem4(preItem => !preItem)
}










    return(
        <>
      <section  data-aos="fade-left" data-aos-duration="1200" >
         <section className="overall">
         <section className="middle-section">

           <div className="individual-btn"> 
            <button onClick={clickerClick} className={`buttons ${borderr ? "green-border" :"buttons" }`} style={{border:"none"}}>
                <img src={third} alt="" />
                <span className="firstSpan">Free shipping</span>
                <span  className="secondSpan">free shipping with discount</span>
            </button>
           </div>
            <div className="individual-btn" >
                 <button onClick={clickerClicker} className={`buttons ${borderr2 ? "green-border" :"buttons" }`} style={{border:"none"}} > 
                <img src={fifth} alt="" />
                <span className="firstSpan">Great support 24/7</span>
                <span className="secondSpan">Instant access to contact</span>
                </button>
            </div>

             <div className="individual-btn">
                 <button onClick={clickerClicker3} className={`buttons ${borderr3 ? "green-border" :"buttons" }`} style={{border:"none"}}>
                 <img src={first} alt="" />
                 <span className="firstSpan">100% secure payment</span>
                 <span  className="secondSpan">We ensure your money is safe</span>
                 </button>
            
             </div>
                
                <div className="individual-btn">
                       <button onClick={clickerClicker4} className={`buttons ${borderr4 ? "green-border" :"buttons" }`}style={{border:"none"}} >
                 <img src={fouth} alt="" />
                 <span className="firstSpan" >Money back guaranteed</span>
                 <span  className="secondSpan">30 days money back</span>
                 </button>

                </div>

        </section>
      </section>
        {/*items list*/}



                <section className="flexer">
                   <div  data-aos="fade-left" data-aos-duration="1200"  >


                     <div className="subfeatured">
                         <div className="featured">
                        <h2>Featured Products</h2>
                        <span>View All <img src={group1svg} alt="" /> </span>
                      </div>
                    </div>

                <div className="nextsection"> 
                      <div className="color">
                        <div className="disabled"  id="hidden">
                            <img src={addtowishlist} alt="wish-list.svg" />
                        <img src={quickView} alt="quick.svg" />
                        </div>
                        

                     <div className="max">  
                         <img src={discount} alt="discount.logo"  />
                         
                         </div>
                         
                        <img src={apple} alt="" />

                        <div className="greenclass">
                           <div className="subgreenclass" >
                             <h5>Green apple</h5>
                            <span>$14.99  {" "}<s style={{color:"#960606ff" , textDecoration:"strike"}}>$20.99</s></span>
                            <img src={rating} alt="" />
                           </div>
                          <button onClick={addItemTOCard} className="catalog"> { addItem ? <img src={addedtocatalog} alt="" /> : <img src={addToCatalog} alt="" />   }</button>
                        </div>

                
                
                  </div>

                    

                    <div  className="color">

                        <div className="disabled" id="hidden">
                            <img src={addtowishlist} alt="wish-list.svg" />
                        <img src={quickView} alt="quick.svg" />

                        </div>

                        <img src={cabbage} alt="cabbage.logo" className="paddingg" />
                       <div  className="greenclass" >
                           <div className="subgreenclass">
                             <h5>Green apple</h5>
                            <span>$14.99 </span>
                            <img src={rating} alt="" />
                           </div>
                        <button onClick={addItemTOCard2} className="catalog"> { addItem2 ? <img src={addedtocatalog} alt="" /> : <img src={addToCatalog} alt="" />   }</button>
                        </div>

                      </div>

                      <div  className="color">
                        <div className="disabled"  id="hidden">
                            <img src={addtowishlist} alt="wish-list.svg" />
                        <img src={quickView} alt="quick.svg" />
                        </div>
                        <img src={greenPepper} alt="" className="padding" />
                         < div  className="greenclass">
                           <div className="subgreenclass">
                              <h5>Green apple</h5>
                            <span>$14.99 </span>
                            <img src={rating} alt="" />
                           </div>
                       <button onClick={addItemTOCard3} className="catalog"> { addItem3 ? <img src={addedtocatalog} alt="" /> : <img src={addToCatalog} alt="" />   }</button>
                           </div>
                        </div>


                        
            
                    <div  className="color">
                        <div className="disabled" id="hidden">
                            <img src={addtowishlist} alt="wish-list.svg" />
                        <img src={quickView} alt="quick.svg" />
                        </div>
                         <img src={springonions} alt="" className="padding"  />
                         < div  className="greenclass">
                            <div className="subgreenclass">
                                 <h5>Green apple</h5>
                            <span>$14.99 </span>
                            <img src={rating} alt="" />
                           </div>
                           <button onClick={addItemTOCard4} className="catalog"> { addItem4 ? <img src={addedtocatalog} alt="" /> : <img src={addToCatalog} alt="" />   }</button>
                            </div>
                        </div>


                  </div>
                

                   </div>

                </section>
       </section>
        </>
    )
}