import { useAuth } from "@/context-provider/context"
import ShopNow from "@/pages/shop/ShoNow"
import SingleItem from "@/pages/shop/singleItem"
const ExploreDashboard = () => {
  const {openItem}=useAuth()
  return (
    <div>
     <ShopNow/> 
    </div>
  )
}

export default ExploreDashboard
