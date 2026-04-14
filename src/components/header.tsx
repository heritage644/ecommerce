
import cart from "../assets/Cart.svg"
import heart from "../assets/Heart.svg"
import call from "../assets/PhoneCall 1.svg"
import { Link } from "react-router-dom"
import userIcon from "../assets/user_3 1.svg"
import { useNavigate } from "react-router-dom"
import search from "../assets/Search.svg"
import flower from "../assets/plant 1.svg"
export default function Header (){
    const navigate = useNavigate()
    return (
        <>
        <header className="header">
          <div>
              <ul className="lists">
                <li className="homelist">Home</li>
                 <Link to=""> <li>blog</li></Link>
                  <Link to="/about" className="hover:border-b border-green-400 transition duration-300"> <li>About</li></Link>
            </ul>
      </div>
               <div className="header-text">
              <h3 className="flex  items-center justify-center ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </h3> 
         </div>
       
    <div className="accessories">
    <button className="number">(219) 555-0114</button>
    <img className="hover:scale-110 transition duration-300" src={search} alt="search.logo" />
    <button onClick={()=>navigate("/cart")} className="hover:scale-110 transition duration-300 "> <img src={cart} alt="cart.logo" /></button>
   <button onClick={()=>navigate("/signUp")} className="hover:bg-gray-300 rounded-full duration-200 "> <img src={userIcon} alt="user.icon" /></button>
</div>



        </header>
        </>
    )
}