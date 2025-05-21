import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-5 md:px-10 py-12 relative">
      <div className="my-3 border border-[#3D3D3D]" />

      <div className="flex justify-between items-start max-w-[1280px] mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-1 text-[25px] md:text-[32px] font-light">
            Eclypse
            <ArrowLeftIcon className="w-3 h-3 text-[#D4D5D9] mb-3 rotate-[135deg]" />
          </div>

          <div className="flex items-center space-x-6 mt-3">
            <div className="flex flex-col text-sm space-y-2">
              <div className="flex gap-2 md:gap-4 items-center text-[11px] md:text-[14px] text-[#ccc]">
                <span>Home</span> / <span>About</span> / <span>Buy</span>
              </div>
              <div className="flex flex-col space-y-1 items-start text-[11px] md:text-[14px] text-[#ccc]">
                <span>Our Customers / </span> <span>Contacts</span>
              </div>
            </div>
            <div className="text-left">
              <div className="uppercase text-[8px] text-[#888] tracking-widest mb-2">
                Contact
              </div>
              <div className="text-[11px] md:text-[15px] font-semibold mb-6 text-[#D4D5D9]">
                +91 123-456-7890
              </div>

              <div className="uppercase text-[8px] text-[##D4D5D9] tracking-widest mb-2">
                Email
              </div>
              <div className="text-[9px] md:text-[13px]">eclypse@gmail.com</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-2/3 md:top-1/2 right-10 bg-white text-black cursor-pointer rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center hover:scale-105 transition"
        >
          <ArrowLeftIcon className="w-4 h-4 md:w-6 md:h-6 rotate-90" />
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="text-[8px] md:text-[10px] text-right text-[#D4D5D9] mt-10 ">
        © Eclypse 2025
      </div>
    </footer>
  );
};

export default Footer;
