import appleImage from "./assets/Image (16).png"
import chinesse from "./assets/Image (17).png"
import rating from "./assets/Rating.svg"
import eggPlant from "./assets/Image (19).png"
import springOnions from "./assets/Image (20).png"
import tomatoes from "./assets/Image (21).png"
import addToCard from "./assets/Add To Cart.svg"
import addedToCart from "./assets/Add To Cart (1).svg"
import bigPotatoes from "./assets/Image (22).png"
import corns from "./assets/Image (23).png"
import couliflower from "./assets/Image (24).png"
import greenLetuce from "./assets/Image (18).png"
import wishlist from "./assets/Add To wishlist.svg"
import quickView from "./assets/Quick View.svg"




type sellerproductt ={
    ids: number
    images:any
    prices:string
    names: string
    ratings:any
    addToCarts:any
    addedToCarts:any
    whishlist:any
    quickView:any

}

const gridProduct:sellerproductt[] = [
    
    {
ids:1,
images:appleImage,
names: "Green Apple",
prices:" $14.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
   
    {
ids:2,
images:chinesse,
names: "Indian Orange",
prices:" $14.49" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
   
    {
ids:3,
images:greenLetuce,
names: "Green Lettuce",
prices:" $13.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
   
    {
ids:4,
images:eggPlant,
names: "Egg Plant",
prices:" $24.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
   
    {
ids:5,
images:springOnions,
names: "Spring Onions",
prices:" $19.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
    {
ids:6,
images:tomatoes,
names: "Red Tomatoes",
prices:" $19.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
    {
ids:7,
images:bigPotatoes,
names: "Big Potatoes",
prices:" $19.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
    {
ids:8,
images:corns,
names: "Corn",
prices:" $19.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},
    {
ids:9,
images:couliflower,
names: "Fresh Couliflower",
prices:" $19.99" ,
ratings: rating,
addToCarts:addToCard,
addedToCarts:addedToCart,
whishlist:wishlist,
quickView:quickView

},



]
export default gridProduct