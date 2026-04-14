import quote from "../assets/Vector (1).png"
import rating from "../assets/Rating.png"
import robert from "../assets/Image (30).png"
import dianne from "../assets/Image (31).png"
import eleanor from "../assets/Image (29).png"
import rightArrow from "../assets/Aoorw (1).png"
import leftArrow from "../assets/Aoorw.png"
export default function NewBottom(){
    return(<>
        <section className="biggest-section">
            <section className="newButtonbackgrounds">
               <div className="testimonials">
              <div>
                <span>TESTIMONIALS</span>
                <h1>What Our Customers Say</h1>
              </div>

                <div> <img src={rightArrow} alt="" />
                <img src={leftArrow} alt="" /></div>
            </div>

           <section className="newbottombackground">

         
            
           <section className="quoting">
            
                <img src={quote} alt=""className="imge" />
                <p>Pellentesque eu nibh eget mauris congue mattis 
                    mattis nec tellus. Phasellus imperdiet elit eu magna
                     dictum, bibendum cursus velit sodales. Donec sed 
                     neque eget</p>
                <div className="robertfox">
                  
                    <div className="vixen">
                         <img src={robert} alt="" />
                      <div className="foxx">
                    <h4>Robert Fox</h4>
                    <span>Customer</span>
                   </div>
                    </div>

                    <img src={rating} alt="" className="rattling" />

                </div>
            
          
           </section>
{/*eleanor*/}
             
           <section className="quoting">
            
                <img src={quote} alt=""className="imge" />
                <p>Pellentesque eu nibh eget mauris congue mattis 
                    mattis nec tellus. Phasellus imperdiet elit eu magna
                     dictum, bibendum cursus velit sodales. Donec sed 
                     neque eget</p>
                <div className="robertfox">
                  
                    <div className="vixen">
                         <img src={dianne} alt="" />
                      <div className="foxx">
                    <h4>Dianne Russels</h4>
                    <span>Customer</span>
                   </div>
                    </div>

                    <img src={rating} alt="" className="rattling" />

                </div>
            
          
           </section>

{/*dianne*/}
  
           <section className="quoting">
            
                <img src={quote} alt=""className="imge" />
                <p>Pellentesque eu nibh eget mauris congue mattis 
                   mattis nec tellus. Phasellus imperdiet elit eu magna
                     dictum, bibendum cursus velit sodales. Donec sed 
                     neque eget</p>
                <div className="robertfox">
                  
                    <div className="vixen">
                         <img src={eleanor} alt="" />
                      <div className="foxx">
                    <h4>Eleanor Pena</h4>
                    <span>Customer</span>
                   </div>
                    </div>

                    <img src={rating} alt="" className="rattling" />

                </div>
            
          
           </section>
           </section>
        </section>
        </section>
        </>
    )
}