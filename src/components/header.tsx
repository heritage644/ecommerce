
import cart from "../assets/Cart.svg"
import heart from "../assets/Heart.svg"
import call from "../assets/PhoneCall 1.svg"
import userIcon from "../assets/user_3 1.svg"
import search from "../assets/Search.svg"
import flower from "../assets/plant 1.svg"
export default function Header (){
    return (
        <>
        <header className="header">
          <div>
              <ul className="lists">
                <li className="homelist">Home</li>
                 <li>Shop</li>
                   <li>blog</li>
                    <li>About Us</li>
            </ul>
          </div>
          <div className="header-text">
          <img src={flower} alt="flower.bg" />  <h3>Ecobazar
            </h3>
            </div>
    <div className="accessories">
    <button className="number">(219) 555-0114</button>
    <img src={search} alt="search.logo" />
    <img src={cart} alt="cart.logo" />
    <img src={userIcon} alt="user.icon" />
</div>



        </header>
        </>
    )
}