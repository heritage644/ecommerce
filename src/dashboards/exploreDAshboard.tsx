import { useAuth } from "@/context-provider/context"
import ShopNow from "@/pages/shop/ShoNow"

const ExploreDashboard = () => {
  const {openItem, setOpenItem}=useAuth()
  return (
    <div>
      <ShopNow/>
    </div>
  )
}

export default ExploreDashboard
