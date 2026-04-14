import buttonarrow from "../assets/Group.svg"
import  { useEffect, useState } from "react";
export default function Topbottom(){




  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("December 31, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);





    return(
        <>
      <section className="top-bottom-section">
          <section className="top-bottom">
            <div className="top-bottom-div">
                <h1>37+</h1>
                <span>Years of hard work</span>
            </div>
            <div className="top-bottom-div" >
                <h1>500k+</h1>
                Happy Customers
            </div>
            <div className="top-bottom-div">
                <h1>28</h1>
                <span>Qualified Team Members</span>
            </div>
            <div className="top-bottom-div">
                <h1>750k+</h1>
                <span>Monthly Orders</span>
            </div>


        </section>
        {/*best seller product*/}
        <section className="bestsellerproduct">
            <div className="forRightPic">
              <span className="organic">100% ORGANIC</span>
              <h1>Fruits & Vegetable</h1>
              <span className="starting">Starting at: <strong className="price">$11.9</strong></span>
           <div>   <button className="shopnows">Shop Now <img src={buttonarrow} alt="" /></button></div>


            </div>
            <div className="forleftpic">
                  <span className="organic">SALES OFF THE WEEK</span>
              <h1>Sales of the Year</h1>
                <div className="divspan">
                  <div>  
                    <span  className="dayspan">{timeLeft.days} : <br /> </span>
                  <span className="dayspand">DAYS</span>
                  </div>
      <div>  
        <span className="dayspan" >{timeLeft.hours}  :<br /> </span>
       
      <span  className="dayspand">HRS</span>
      </div>
      <div>
          <span className="dayspan">{timeLeft.minutes}  : <br /></span>
          <span  className="dayspand">MINS</span>
      
      </div>
      <div> 
         <span  className="dayspan" >{timeLeft.seconds}  <br /></span>
         <span  className="dayspand">SECS</span>
         </div>
                
                </div>

             <div>
                 <button className="shopnows">Shop Now <img src={buttonarrow} alt="" /></button></div>
            </div>


        </section>
      </section>
        
        
        </>
    )

}