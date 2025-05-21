import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderPage";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className=" text-[#000000] mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-8 flex text-white">
          <Link to={"/"} className="flex items-center text-xl font-medium">
            <ArrowLeftIcon className="mr-2 w-5 h-5 space-x-5 " />
          </Link>
            <span>Shipping Address</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <AddressForm />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
  )
}

export default Checkout