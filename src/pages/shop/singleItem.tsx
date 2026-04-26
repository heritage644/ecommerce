import { useAuth } from "@/context-provider/context";
import Header from "@/components/header";
import { Star } from "lucide-react";
import { useCart } from "@/context-provider/cartContext";

export default function SingleItem() {
  const { openItem } = useAuth();
  const { addToCart, removeFromCart, isInCart } = useCart();

  if (!openItem) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        No product selected
      </div>
    );
  }

  const inCart = isInCart(openItem._id);
  const image = openItem.Image || openItem.image;

  const handleCart = () => {
    if (inCart) {
      removeFromCart(openItem._id);
    } else {
      addToCart({
        _id: openItem._id,
        name: openItem.name,
        price: openItem.price,
        image
      });
    }
  };

  return (
    <>
      <Header />
       <section className=" w-full">
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50  ">
        
        <div className={`max-w-6xl w-full h-100 border-3 ${inCart ?"border-red-400" : "border-green-400"}   bg-white rounded-sm grid md:grid-cols-2 gap-10`}>

          {/* 🖼 IMAGE */}
          <div className="bg-gray-100  rounded-lg flex items-center justify-center p-6">
            <img
              src={image}
              alt={openItem.name}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400?text=Fruit";
              }}
              className="w-full h-80 object-contain"
            />
          </div>

          {/* 📦 DETAILS */}
          <div className="flex flex-col gap-10">

            <div className="flex flex-col gap-5 ">
              <h1 className="text-3xl font-bold text-gray-800">
                {openItem.name}
              </h1>

              <p className="text-gray-500 mt-3">
                {openItem.description}
              </p>

              {/* 💰 PRICE */}
              <div className="mt-5">
                <span className="text-2xl font-bold text-green-600">
                  ₦ {openItem.price.toLocaleString()}
                </span>
              </div>

              {/* ⭐ RATING */}
              <div className="flex items-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(openItem.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-gray-500 text-sm">
                  ({openItem.rating})
                </span>
              </div>
                
            </div>

            {/* 🛒 CART BUTTON */}
          <button
              onClick={handleCart}
              className={`mt-8 w-[70%] py-3 rounded-lg font-semibold text-white transition ${
                inCart
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>

          </div>
        </div>
      </div>
       </section>
    </>
  );
}