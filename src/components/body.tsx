import Header from "./header"
import TopComponent from "./top-components"
import MiddleComponent from "./middle-component"
import SubMiddle from "./sub-middle-component"
import Topbottom from "./top-bottom-section"
import Bestseller from "./best-seller-product"
import sellerProducts from "../food"
import nextarrow from "../assets/Group (1).svg"
import gridProduct from "../grid-orders"
import Bestsellertwo from "./best-seller-two"
import group1svg from "../assets/Group (1).svg"
import blog from "../blog"
import BottomComponent from "./bottom-component"
import NewBottom from "./new-bottom-componene"
import BeforeFooter from "./before-footer"
import Footer from "./footer"
import Popups from "./popup"
export default function Body (){







const blogArrayList = blog.map((blogList)=>{
    return(
<BottomComponent
key={blogList.id}
image={blogList.clearimage}
paragraph={blogList.paragraph}
pictures={blogList.smallpicture}
date={blogList.date}
svgs={blogList.userIcon}
imgaing={blogList.tagImg}
id={blogList.id}

/>
)})


const secondMappedSeller = gridProduct.map((newGrid)=>{
return (
    <Bestsellertwo
    key={newGrid.ids}
    images={newGrid.images}
      names={newGrid.names}
        prices={newGrid.prices}
        ratings={newGrid.ratings}
        addToCards={newGrid.addToCarts}
        addedToCarts ={newGrid.addedToCarts}
        ids={newGrid.ids}
        whishlist={newGrid.whishlist}
        quickView={newGrid.quickView}
    
    />
)
})





    const mappedBestseller = sellerProducts.map((newProduct)=>{
       return(
         <Bestseller
        key= {newProduct.id}
        image ={newProduct.image}
        name={newProduct.name}
        price={newProduct.price}
        rating={newProduct.rating}
        addToCard={newProduct.addToCart}
        addedToCart ={newProduct.addedToCart}
        id={newProduct.id}
        newProduct={newProduct}


        />
       );
       });
    
    return(

<>
<Header/>
<TopComponent/>
<Popups/>
<MiddleComponent/>
<SubMiddle/>
<Topbottom/>




<div className="flexd" >
 <div className="seller-flex"> 
      <h1>Best seller Products</h1>
    <p>view All <img src={nextarrow} alt="" />
    </p>
    </div>
    <div style={{display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"20px",
width:"100%",
height:"400px"

}}>
    {mappedBestseller}
</div>
</div>

<section className="main-overall">
    <div className="overall-flexer">
<div className="over-all-header">    <h1>Hot deals</h1>
    <h1>Best Seller</h1>
    <h1>Top Rated</h1>
    </div>


    <div className="jsx-grid" style={{display:"grid",
 gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
gap:"15px",


}}>
    {secondMappedSeller}
   
</div>

</div>
<div className="rect">
<span>HOT SALE</span>
<h1><strong>Save 37% </strong>on <br /> Every Order</h1>
<div>
    <button className="btnbtn">Shop Now <img src={group1svg} alt="" />
</button></div>
</div>
</section>

  

<section className="bottom-comp-sec">
<div className="blogdiv">
    <span className="blogspan">BLOG</span>
    <h1>Latest News</h1>
</div>
    <div className="bottom-component-div" >
    
    {blogArrayList} 

</div>
</section>
      <NewBottom/>
<BeforeFooter/>
<Footer/>
</>
    )
}