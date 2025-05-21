import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const Dropdown = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-[#000000] text-white px-4 py-8 pt-20 rounded-md w-full">
        <span className="text-[18px] md:text-[30px] font-normal">Size and Fit</span>
        <ArrowLeftIcon className="md:w-9 w-6 md:h-9 h-6 font-light text-gray-50 -rotate-90" />
      </div>
        <div className="my-1 border border-[#3d3d3d]" />
      <div className="flex items-center justify-between bg-[#000000] text-white px-4 py-8 rounded-md w-full">
        <span className="text-[18px] md:text-[30px] font-normal">Delivery & Returns</span>
        <ArrowLeftIcon className="md:w-9 w-6 md:h-9 h-6 ffont-light text-gray-50 -rotate-90" />
      </div>
        <div className="my-1 border border-[#3d3d3d]" />
      <div className="flex items-center justify-between bg-[#000000] text-white px-4 py-8 rounded-md w-full">
        <span className="text-[18px] md:text-[30px] font-normal">How This Was Made</span>
        <ArrowLeftIcon className="md:w-9 w-6 md:h-9 h-6 ffont-light text-gray-50 -rotate-90" />
      </div>
        <div className="my-1 border border-[#3d3d3d]" />

    </div>
  );
};

export default Dropdown;
