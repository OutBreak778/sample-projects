import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const route = [
  {
    id: 1,
    label: "About Us",
  },
  {
    id: 2,
    label: "Waitlist",
  },
  {
    id: 3,
    label: "Cart",
  },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`py-2 z-50 flex items-center justify-between  px-6 ${
        location.pathname === "/cart" ? "border-b-2 border-[#242424]" : ""
      }`}
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="md:w-[55px] w-[32px] md:h-[45px] h-[30px] rounded-[5px]"
        />
      </Link>
      <div className="flex md:space-x-14 space-x-4 items-center font-medium md:text-[18px] text-[12px]">
        {route.map((item) => (
          <div
            key={item.id}
            className={`${
              location.pathname === "/cart" && item.id === 3
                ? "text-white underline underline-offset-8"
                : "text-gray-500 "
            }`}
          >
            {item.label}
          </div>
        ))}
        {location.pathname !== "/cart" && (
          <div className="bg-white md:py-[10.56px] py-[6px] rounded-[8.6px] text-[#070707] md:px-[38.04px] px-6">
            Buy
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
