import group1svg from "../assets/Group (1).svg"
import rightArrow from "../assets/Aoorw (1).png"
import leftArrow from "../assets/Aoorw.png"
import veggies from "../assets/Vegetable (1).png"
import fruits from "../assets/fruits 1 (1).png"
import feesh from "../assets/fish 1.png"
import meat from "../assets/meat 1 (3).png"
import snacks from "../assets/snacks 1 (1).png"
import drinks from "../assets/Filled outline.png"
import man from "../assets/Image (7).png"
import rightman from "../assets/Image (8).png"
import buttonarrow from "../assets/Group.svg"
import check from "../assets/Check.svg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { CarouselSize } from "@/useableCarousel"
import React from "react"
import { Carousel } from "./ui/carousel"
export default function SubMiddle (){

    
    React.useEffect(()=>{
    
    Aos.init({
      duration:800,
      once:true,
      offset:100,
    })
    
    },[])
    return(
        <>
    
        
        </>
    )
}