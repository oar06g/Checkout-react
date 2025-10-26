import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1414] relative overflow-hidden">
      {/* خلفيات دوائر */}
      <div className="absolute -left-40 top-1/4 w-80 h-80 bg-[#f7b500] rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -right-40 bottom-0 w-80 h-80 bg-[#ff3b3b] rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-white rounded-full blur-3xl opacity-70"></div>

      {/* الكارت الرئيسي */}
      <div className="relative z-10 bg-[#2d2424]/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl w-[900px] flex overflow-hidden p-8">
        {/* القسم الأيسر */}
        <div className="w-1/2 pr-8 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-[#f7b500] mb-2">Duvera</h1>
          <p className="text-sm text-gray-300 mb-6">Ecommerce Store</p>

          <img
            src="/product.png"
            alt="VR Controller"
            className="w-64 h-64 object-contain mb-4 transition-transform hover:scale-105 duration-300"
          />
          <p className="text-gray-400 text-xs">Roll Over Image To Zoom In</p>
        </div>

        {/* القسم الأيمن */}
        <div className="w-1/2 bg-[#1f1818]/70 rounded-xl p-6 flex flex-col justify-between">
          {/* شريط البحث */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 bg-[#342c2c] px-3 py-2 rounded-lg">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm outline-none text-gray-200"
              />
            </div>
            <div className="flex gap-3">
              <FaUser className="text-gray-400 text-lg cursor-pointer" />
              <FaShoppingCart className="text-gray-400 text-lg cursor-pointer" />
            </div>
          </div>

          {/* نموذج الدفع */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Checkout</h2>
              <span className="text-[#f7b500] font-bold">290$</span>
            </div>

            <input
              className="w-full bg-[#342c2c] p-2 rounded-lg mb-2 text-sm outline-none"
              placeholder="Cardholder Name"
            />
            <input
              className="w-full bg-[#342c2c] p-2 rounded-lg mb-2 text-sm outline-none"
              placeholder="Card Number"
            />
            <div className="flex gap-2 mb-2">
              <input
                className="w-1/2 bg-[#342c2c] p-2 rounded-lg text-sm outline-none"
                placeholder="MM / YY"
              />
              <input
                className="w-1/2 bg-[#342c2c] p-2 rounded-lg text-sm outline-none"
                placeholder="CVV"
              />
            </div>

            <div className="text-gray-400 text-sm mb-4">
              <p>Balance Amount: <span className="float-right text-gray-200">200$</span></p>
              <p>VAT (21%): <span className="float-right text-gray-200">90$</span></p>
              <hr className="border-gray-600 my-2" />
              <p>Total: <span className="float-right text-[#f7b500] font-bold">290$</span></p>
            </div>

            <button className="w-full bg-[#f7b500] text-black font-semibold py-2 rounded-lg hover:bg-[#e1a900] transition">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}