import steps from "../assets/Vector (2).png"
import mango from "../assets/mango-1.png"
import location from "../assets/Icon (4).png"
import call from "../assets/Icon (3).png"
import message from "../assets/Icon (2).png"
import gseries from "../assets/Group (5).svg"
import food from "../assets/Group (4).svg"
import Food from "../assets/food.png"
import bookoff from "../assets/bookoff-corporation-logo.svg"
export default function BeforeFooter (){

    return(
        <>
<section className="before-foot">
    <div className="first-foot">
        <img src={steps} alt="" className="sizer"/> <span className="or">|</span>
         <img src={mango} alt="" className="sizer" /> <span className="or">|</span>
          <img src={food} alt="" className="sizer"/><span className="or">|</span>
           <img src={Food} alt="" className="sizer"/><span className="or">|</span>
            <img src={bookoff} alt="" className="sizer"/><span className="or">|</span>
             <img src={gseries} alt="" className="sizer"/><span className="or">|</span>

    </div>

    <section className="before-footer">
<div className="divselectop">
    <img src={location} alt="" className="witt" />
    <h5>OUR LOCATION</h5>
    <p>1901 Thornridge Cir. Shiloh, Washington  DC 20020, United States</p>

</div>

<div className="divselectop">
    <img src={call} alt="" className="witt" />
    <h5 >CALL US 27/7</h5>
    <span>(303) 555- 0105</span>
</div>

<div className="divselectops">
<img src={message} alt=""  className="witt"/>
<h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
<form action="">
<div className="form-style">
    <input type="email" placeholder="heritage644@yahoo.com"  />
<button>Subscribe</button>
</div>

</form>


</div>


    </section>
</section>
        </>
    )
}