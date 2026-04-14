import appleImage from "./assets/Image (11).png"
import chinesse from "./assets/Image (12).png"
import rating from "./assets/Rating.svg"
import greenLettus from ".//assets/Image (13).png"
import corn from "./assets/Image (15).png"
import pepper from "./assets/Image (14).png"
import addToCard from "./assets/Add To Cart.svg"
import addedToCart from "./assets/Add To Cart (1).svg"
type sellerproduct ={
    id: number
    image:any
    price:string
    name: string
    rating:any
    addToCart:any
    addedToCart:any

}

const sellerProducts:sellerproduct[] = [
    
    {
id:1,
image:appleImage,
name: "Green Apple",
price:" $14.99" ,
rating: rating,
addToCart:addToCard,
addedToCart:addedToCart

},
   
    {
id:2,
image:chinesse,
name: "Chinesse Cabbage",
price:" $14.49" ,
rating: rating,
addToCart:addToCard,
addedToCart:addedToCart

},
   
    {
id:3,
image:greenLettus,
name: "Green Lettuce",
price:" $13.99" ,
rating: rating,
addToCart:addToCard,
addedToCart:addedToCart

},
   
    {
id:4,
image:pepper,
name: "Green Chilli",
price:" $24.99" ,
rating: rating,
addToCart:addToCard,
addedToCart:addedToCart

},
   
    {
id:5,
image:corn,
name: "Yellow Corn",
price:" $19.99" ,
rating: rating,
addToCart:addToCard,
addedToCart:addedToCart

},



]
export default sellerProducts