import vid from "../assets/product-vid.mp4";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import { Link } from "react-router-dom";

const img = [
  {
    id: 1,
    label: "product 1",
    src: product1,
  },
  {
    id: 2,
    label: "product 2",
    src: product2,
  },
  {
    id: 3,
    label: "product 3",
    src: product3,
  },
];

const size = [
  {
    id: 1,
    size: "XS",
  },
  {
    id: 2,
    size: "S",
  },
  {
    id: 3,
    size: "M",
  },
  {
    id: 4,
    size: "L",
  },
  {
    id: 5,
    size: "XL",
  },
];

const ProductSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row mb-10">
      {/* Left Side */}
      <video
        className="w-full lg:w-[900px] h-[300px] lg:h-[850px] object-cover"
        src={vid}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Right Side */}
      <div className="w-full lg:max-w-3xl px-4 md:px-8 lg:px-10 py-4 bg-white text-[#070707]">
        <div className="w-full lg:w-[550px] flex items-center">
          <article className="text-[14px] hidden md:block md:text-[15px] font-medium leading-tight my-6 tracking-normal">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </article>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center gap-2 items-center">
          {img.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt={item.label}
                className="w-[115px] h-[120px] md:w-[180px] md:h-[170px]  "
              />
            </div>
          ))}
        </div>

        <div className="my-8 border border-[#d9d9d9]" />

        {/* Price section */}
        <div className="flex flex-row items-center space-x-2">
          <p className="text-[28px] sm:text-[35px] font-medium">₹7,999</p>
          <p className="text-gray-600 font-normal text-[14px] sm:text-[15px] mt-2 sm:mt-5">
            MRP incl. of all taxes
          </p>
        </div>

        {/* Size selection */}
        <div className="flex flex-row items-center space-x-3 mt-6">
          <p className="font-medium text-gray-500 text-[16px] sm:text-[20px]">
            Please select a size
          </p>
          <p className="font-medium text-gray-500 text-[14px] sm:text-[15px] underline">
            Size chart
          </p>
        </div>

        <div className="flex flex-wrap gap-[10px] mt-4 sm:mt-6">
          {size.map((item) => (
            <label key={item.id} className="cursor-pointer">
              <input type="checkbox" className="peer hidden" />
              <div className="min-w-[60px] md:min-w-[90px] md:px-4 md:py-2 p-2 bg-[#d9d9d9] rounded-md text-center text-[#767676] font-medium transition-colors peer-checked:bg-black peer-checked:text-white">
                {item.size}
              </div>
            </label>
          ))}
        </div>

        <div className="my-8 border border-[#d9d9d9]" />

        {/* Button section */}
        <div className="w-full flex flex-col sm:flex-row items-center mt-12 gap-4">
          <div className="w-full sm:w-1/3 border-[2px] rounded-md px-4 py-3 text-center border-[#c3c3c3]">
            Add to Cart
          </div>
          <Link
            to={"/checkout"}
            className="w-full sm:w-2/3 px-4 py-3 text-center bg-black text-white rounded-[8.6px]"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
