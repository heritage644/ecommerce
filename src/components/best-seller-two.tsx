import React from "react"
type sellerproductt ={
    ids: number
    images:any
    prices:string
    names: string
    ratings:any
     addToCards:any
    addedToCarts:any
    whishlist:any,
quickView:any

}
       
       
      
       

export default function Bestsellertwo(props:sellerproductt){
  const [add, setAdd] = React.useState(false)
  const [popup, setPopUp] = React.useState("")
  function clicker() {
    setAdd((prev) => {
      if (prev) {
        setPopUp("❌ Removed from Cart")
      } else {
        setPopUp("✅ Added to Cart")
      }
      return !prev // toggle the add state correctly
    })
  }

  React.useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => {
        setPopUp("")
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [popup])





    return(
        <>
      <section > 
        <div className="hreed">
            <div className="hreed-backup">
                <img src={props.images} alt="" />
                <div className="flexing">
                   <span className="hreed-name"> {props.names}</span>
                   <span className="hreed-price"> {props.prices}</span>
                  <img src={props.ratings} alt=""  className="hreed-rate"/>
                  <div className="faded">
                   <button onClick={clicker} className="addtocartbtn">
              {add ? (
                <img src={props.addedToCarts} alt="" className="addtocart" />
              ) : (
                <img src={props.addToCards} alt="" className="addtocart" />
              )}
            </button>
                    <button><img src={props.quickView} alt="" />{""}</button>
                    <button><img src={props.whishlist} alt="" />{""}</button>
                  </div>
                  
                </div>
            </div>

        </div>
        <div></div>
        <div>
     {popup && <div className="popup">{popup}</div>}
        </div>




      </section>
        </>
    )
}