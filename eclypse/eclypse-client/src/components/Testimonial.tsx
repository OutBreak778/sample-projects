import quoteImg from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import test from "../assets/testimonial-1.svg";

const Testimonial = () => {
  return (
    <div className="w-full max-w-[1200px] h-auto md:h-[412px] mx-auto flex flex-row justify-between items-start mt-20 md:mt-36 px-4 md:px-0 relative">
      {/* Left Section */}
      <div className="max-w-[240px] md:max-w-[700px]">
        <p className="font-medium text-[9px] md:text-[13px] leading-[100%] tracking-[0.32em] mb-10 md:mb-16">
          OUR CUSTOMERS
        </p>
        <div className="flex items-start gap-4 md:gap-6">
          <span className="text-[60px] md:text-[110.84px] leading-[100%]">
            “
          </span>
          <p className="text-[17px] md:text-[40px] font-normal leading-[120%] md:leading-[109%]">
            Understated, but unforgettable. It feels like it was made for me
          </p>
        </div>
        <div className="mt-10 md:mt-12 space-y-2 md:space-y-4 ml-4 md:ml-[75px]">
          <p className="text-[#c4c4c4] text-[16px] md:text-[20px] leading-[150%]">
            Random Woman
          </p>
          <p className="font-medium text-[12px] md:text-[13px] text-[#535353] leading-[150%]">
            NY, USA
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center space-y-4 mt-10 md:mt-16">
        <div className="flex justify-between">
          <button className="bg-black text-white p-2 md:p-3 rounded-full">
            <img src={test} alt="img" className="w-5 md:w-7 h-5 md:h-5" />
          </button>

          {/* Main image */}
          <img
            src={quoteImg}
            alt="User"
            className="w-[70px] md:w-[116px] h-[70px] md:h-[116px] object-cover rounded-full ml-4 md:ml-6"
          />
        </div>

        <div className="flex flex-col items-center space-y-3 mt-3 ml-14 md:ml-[65px]">
          <img
            src={user2}
            alt="User 2"
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] object-cover rounded-full bg-neutral-800 opacity-40"
          />
          <img
            src={user3}
            alt="User 3"
            className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] object-cover rounded-full bg-neutral-800 opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
