import { useEffect, useState } from "react";
import { ChevronRight, Star, TrendingDown } from "lucide-react";
import Header from "@/components/header";
import flower from "../../assets/plant 1.svg"
import addToCatalog from "../../assets/Add To Cart.svg"
import quickView from "../../assets/Quick View.svg"
import addedtocatalog from "../../assets/Add To Cart (1).svg"
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  Image: string;
  rating: number;
  originalPrice?: number;
  discount?: number;
  badge?: string;
}
import { useCart } from "@/context-provider/cartContext";
export default function ShopNow() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [added, setAddedToCart] = useState<Product[]>([]);
  
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products/fruits", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setProducts(data);
        console.log(data.Image);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


const { addToCart, removeFromCart, isInCart } = useCart();

  // Calculate discount percentage
  const getDiscountPercent = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinners"></div>
      </div>
    );
  }
  const handleCart = (product: Product, inCart: boolean) => {
    if (inCart) {
      removeFromCart(product._id);
    } else {
      addToCart({ _id: product._id, name: product.name, price: product.price, image: product.Image });
    }
  }
  return (
    <>  
      <Header />

    <div style={{
        paddingTop:"120px"
    }} className="min-h-screen flex flex-col items-center  gap-20 bg-gray-50">
      {/* Limited Stock Deals Section */}
      <section className="bg-white mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800">
               <h3 className="flex text-orange-400 items-center justify-center ">F<img src={flower} alt="flower.bg" /> ESH </h3>  Deals Today
            </h2>
            <button className="flex items-center gap-2 text-[#F57C00] font-semibold hover:gap-3 transition-all">
              See All
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Products Grid */}
          <div style={{
            paddingTop:"20px"
          }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.slice(0, 6).map((product) => {
              const discountPercent = product.originalPrice
                ? getDiscountPercent(product.price, product.originalPrice)
                : 0;
              const inCart = isInCart(product._id);

              return (
                <div 
                style={{
                    paddingTop:"10px"
                }}
                  key={product._id}
                  className="h-80 border-3 border-green-400 rounded-sm bg-grey-100
                  
                  overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group relative"
                >
                  {/* Discount Badge */}
                  {discountPercent > 0 && (
                    <div className="absolute top-2 left-2 bg-[#F57C00] text-white px-2 py-1 rounded text-xs font-bold z-10">
                      -{discountPercent}%
                    </div>
                  )}

                  {/* Product Badge */}
                  {product.badge && (
                    <div className="absolute top-2 right-2 z-10">
                      <img
                        src={product.badge}
                        alt="badge"
                        className="w-12 h-12"
                      />
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative bg-gray-100 aspect-square flex items-center justify-center p-4">
                    <img
                      src={product.Image}
                      alt={product.name}
                      className="w-full h-full object-contain  transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div 
                  style={{
                    paddingLeft:"20px"
                }}
                  className=" space-y-2">
                    {/* Product Name */}
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px]">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₦ {product.price.toLocaleString()}
                        </span>
                      </div>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₦ {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs flex items-center justify-between gap-10 full text-gray-500">

                        ({product.rating})

                        <button onClick={()=>handleCart(product, inCart)}> {inCart ? <img className="w-7" src={addedtocatalog} alt="quickview" /> : <img className="w-7" src={addToCatalog} alt="quickview" />} </button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Organic Fruits Section */}
      <section className=" mb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex gap-3 items-center text-gray-800">
              Top Organic  <h3 className="flex text-orange-400 items-center justify-center ">F<img src={flower} alt="flower.bg" /> uits </h3> 
            </h2>
            <button className="flex items-center gap-2 text-[#F57C00] font-semibold hover:gap-3 transition-all">
              See All
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Products Grid */}
          <div 
           style={{
        paddingTop:"20px"
    }} 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.slice(6, 12).map((product) => {
              const discountPercent = product.originalPrice
                ? getDiscountPercent(product.price, product.originalPrice)
                : 0;
                const inCart = isInCart(product._id);
              return (
                <div
                 style={{
                    paddingTop:"10px"
                }}
                  key={product._id}
                  className="bg-gray-100 h-80 border-3 border-orange-400 rounded-sm overflow-hidden
                   hover:shadow-xl transition-shadow duration-300 cursor-pointer group relative"
                >
                  {/* Discount Badge */}
                  {discountPercent > 0 && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold z-10">
                      -{discountPercent}%
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative bg-grey-100 aspect-square flex items-center justify-center p-4">
                    <img
                      src={product.Image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div style={{
                    paddingLeft:"20px"
                  }} className="p-3 space-y-2">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px]">
                      {product.name}
                    </h3>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₦ {product.price.toLocaleString()}
                        </span>
                      </div>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₦ {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs flex items-center gap-10 text-gray-500">
                        ({product.rating})
                         <button onClick={()=>handleCart(product, inCart)}> {inCart ? <img className="w-7" src={addedtocatalog} alt="quickview" /> : <img className="w-7" src={addToCatalog} alt="quickview" />} </button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="bg-gradient-to-r w-full h-20 flex items-center justify-center from-orange-400 to-white mb-6">
        <div className="max-w-7xl mx-auto px-4 py-8 text-white text-center">
          <div className="flex items-center justify-start  gap-2 mb-2">
            <TrendingDown size={24} className="text-red-600" />
            <h2 className="text-3xl text-gray-600 font-bold">Flash Sale  <strong className="text-red-500"> -50% Off!</strong></h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">Limited time offer on fresh organic fruits</p>
          
        </div>
      </section>

      {/* All Products Grid */}
      
      <section className="">
        
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            All Fresh Fruits
          </h2>

          <div
          style={{
            paddingTop:"20px"
          }}
          className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-4">
            
            {products.map((product) => {
              const inCart = isInCart(product._id);
              return (

              <div
            style=  {{
            paddingTop:"20px"

          }}
          
                key={product._id}
                className="bg-gray-100 border-3 border-orange-400 h-80 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative bg-gray-50 aspect-square flex items-center justify-center p-4">
                  <img
                    src={product.Image}
                    alt={product.name}
                    className="w-full h-full bg-gray-100   object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div   style =  {{
                 paddingLeft:"20px"
                 }} 
                 className="p-3 space-y-2">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₦ {product.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs flex items-center gap-10 text-gray-500">
                      ({product.rating})
                        <button onClick={()=>handleCart(product, inCart)}> {inCart ? <img className="w-7" src={addedtocatalog} alt="quickview" /> : <img className="w-7" src={addToCatalog} alt="quickview" />} </button>
                      
                    </span>
                  </div>
                </div>
              </div>);
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}