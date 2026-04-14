import newsletter from "../assets/BG (12).png"
import React from "react";

export default function popups(){
      const [showPopup, setShowPopup]=React.useState(false)
         React.useEffect(()=>{
            const alreadyClosed = localStorage.getItem("popupClosed");
                  if(alreadyClosed) return;
                      console.log("mounted")
                       const timer = setTimeout(() => { 
                       console.log("...showing popup")
                       setShowPopup(true)
           }, 3000);
                return ()=> clearTimeout(timer)
   


   }, [])

    function closePopup() {
          setShowPopup(false)
              localStorage.setItem("popupClosed", "true")
    }
            function hanflSubmit(e:React.FormEvent){
                   if (e) e.preventDefault()
    }
           if (!showPopup) return null;



    return(
<section className="overlay" id="popupOverlay">
   <div className="popupname">
       <div className="popup-div">
       <img src={newsletter} alt="news.logo"  />
             <div className="popup-divs">
        <h1>Subscribe to Our Newsletter</h1>
            <p>Subscribe to our newsletter today and save <strong>20%</strong> on your first purchase </p>
               <form action="" onSubmit={hanflSubmit}>
                  <div className="form-styles" >   <label htmlFor="">email <input type="email" /></label>
            <button >Subscribe</button>
            

            </div>
           <div className="html-for">
             
            
          <label htmlFor=""> ! <input type="checkbox" /></label>
            <label htmlFor="">Do not show this window</label>

           </div>
        </form>
        <button onClick={closePopup} className="close">close</button>
    </div>
   </div>
   </div>
</section>
    )
}