import { useCart } from "@/context-provider/cartContext";
import Header from "@/components/header";

const CartDashboard = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <>
      <Header />

      <div style={{
        paddingTop:"120px"
      }} className="min-h-screen bg-gray-50 w-full  px-4">
        <div className=" w-full mx-auto flex items-center flex-col justify-center">

          <h1 className="text-2xl font-bold mb-6">
            🛒 Your Cart
          </h1>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4 w-full h-30">

              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  {/* LEFT */}
                  <div className="flex h-30 items-center gap-4">
                    <img
                      alt={item.name}
                      src={item.image}
                      className="w-40 h-20 object-contain bg-gray-100 rounded"
                    />
                    <div>
                      <h2 className="font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-gray-500">
                        ₦ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-3">

                    {/* QUANTITY */}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-500 text-white w-20 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-600 text-white w-20 rounded"
                    >
                      +
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}

          {/* TOTAL */}
          {cart.length > 0 && (
            <div 
            style={{
              paddingTop:"50px"
            }}
            className="mt-6  text-right">
              <h2 className="text-xl text-red-500 font-bold">
                Total: ₦{" "}
                {cart
                  .reduce(
                    (acc, item) =>
                      acc + item.price * item.quantity,
                    0
                  )
                  .toLocaleString()}
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDashboard;