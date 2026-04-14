import React from "react"

type sellerproduct = {
  id: number
  image: any
  price: string
  name: string
  rating: any
  addToCard: any
  addedToCart: any
  newProduct: any
}

export default function Bestsellertwo(props: sellerproduct) {
  const [add, setAdd] = React.useState(false)
  const [popup, setPopUp] = React.useState("")

  function clicker() {
    setAdd((prev) => {
      if (prev) {
        setPopUp("❌ Removed from Cart")
      } else {
        setPopUp("✅ Added to Cart")
      }
      return !prev 
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

  return (
    <>
      <section className="best-seller">
        <div className="best-sold">
          <img src={props.image} alt="" />
          <div className="clexxed-row">
            <div className="flexxed-sold">
              <span className="props-seller">{props.name}</span>
              <span>{props.price}</span>
              <img src={props.rating} alt="" />
            </div>

            <button onClick={clicker} className="addtocartbtn">
              {add ? (
                <img src={props.addedToCart} alt="" className="addtocart" />
              ) : (
                <img src={props.addToCard} alt="" className="addtocart" />
              )}
            </button>
          </div>

          {popup && <div className="popup">{popup}</div>}
        </div>
      </section>
    </>
  )
}