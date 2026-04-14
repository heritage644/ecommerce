
type sellerproductss ={
    id: number
    image:string
    paragraph:string
pictures:string
    date: string
svgs:string
imgaing:string
}


export default function BottomComponent (props:sellerproductss){

return(
    <>


     
   <section className="bottomdivs">
    
         <div className="bottom-component-divs"  style={{backgroundImage:`url("${props.image}")`,
    }} >
        <span className="daite">{props.date}</span>
      
      
       </div>
<div className="colorriot">
  <div className="horizontal">
      <span className="spanner" ><img src={props.imgaing} alt="image.svg" className="foodadmin"/>Food</span>
    <span className="spanner"><img src={props.svgs}  alt="" className="foodadmin" />By Admin</span>
    <span className="spanner"> <img src={props.pictures} alt="" className="foodadmin" /> 65 comments </span>
  </div>
   <p> {props.paragraph}</p>
   <div>
     <span>Read More 
        
    </span>
   </div>
       </div>
   </section>


    </>
)


}