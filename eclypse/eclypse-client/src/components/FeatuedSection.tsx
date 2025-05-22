import { ArrowRightIcon } from "@heroicons/react/16/solid";
import vid from "../assets/bento-vid-1.mp4";
import img1 from "../assets/bento-grid-2.jpg";
import img2 from "../assets/bento-grid-3.jpg";
import img3 from "../assets/bento-grid-4.jpg";
import img4 from "../assets/logo.jpg";

const FeatuedSection = () => {
  return (
    <div className="mb-10 z-10">
      <div className="md:max-w-3xl max-w-[370px] md:text-[38px] text-[20px] md:mt-48 mt-32 mb-10 -tracking-tight leading-tight">
        Rooted in a philosophy of quiet luxury, our garments are designed to
        speak softly in cut, in movement, in presence.
      </div>
      <div className="flex md:mt-20 mt-12 border-b items-end border-white w-fit">
        <p className="md:text-[22px] text-[18px] leading-normal">
          Learn more about Eclypse
        </p>
        <ArrowRightIcon className="md:w-6 w-5 md:h-6 h-5 ml-1 -rotate-45" />
      </div>
      {/* Featured product */}
      <div className="w-full h-fit mt-24 md:mt-32">
        {/* Top grid */}
        <div className="flex w-full space-x-5 space-y-4">
          <div className="relative md:w-2/3 w-full h-auto ">
            <video
              className="md:w-[880px]  h-[370px] rounded-[5px] object-cover"
              src={vid}
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <div className="hover:absolute hidden bottom-5 right-4 text-[34.22px] font-normal text-white">
              A silhouette worth remembering
            </div>
          </div>
          <div className="relative md:w-1/3 w-0 h-auto group">
            <img
              src={img1}
              alt="image"
              className="w-[420px] h-[370px] z-10 rounded-[5px] object-cover"
            />
            <div className="hidden md:block absolute inset-0 delay-150 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[5px] z-20"></div>

            <div className="hidden md:block absolute px-3 bottom-5  right-4 text-[34.22px] font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              Premium wool blend in signature vermilion Discreet side pocked
              with clean finish
            </div>
          </div>
        </div>
        {/* Bottom grid */}
        <div className="flex space-x-4">
          <div className="relative w-1/3 h-auto group">
            <img
              src={img2}
              alt="image"
              className="md:w-[420px] w-[170px] md:h-[370px] h-[180px] rounded-[5px] object-cover absolute"
            />
            <div className="hidden md:block absolute inset-0 delay-150 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[5px] z-20"></div>

            <div className="hidden md:block absolute px-3 bottom-5  leading-tight right-4 text-[34.22px] font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              Discreet side pocked with clean finish Hand made and assembles in
              small batches
            </div>
          </div>
          <div className="relative w-1/3 h-auto group">
            <img
              src={img3}
              alt="image"
              className="md:w-[420px] w-[170px] md:h-[370px] h-[180px] rounded-[5px] object-cover absolute"
            />
            <div className="hidden md:block absolute inset-0 delay-150 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[5px] z-20"></div>

            <div className="hidden md:block absolute px-3 bottom-5  right-4 text-[34.22px] font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 leading-tight">
              Hand made and assembles in small batches
            </div>
          </div>
          <div className="relative w-1/3 h-auto group">
            <img
              src={img4}
              alt="image"
              className="md:w-[420px] w-[170px] md:h-[370px] h-[180px] group-hover:opacity-0 z-10 rounded-[5px] object-cover"
            />
            <div className="absolute inset-0 delay-150 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[5px] z-20"></div>
            <div className="absolute px-3 bottom-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[34.22px] font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <p className="flex items-center justify-center text-6xl">
                <span>Eclyse </span>
                <span className="text-3xl">®</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:my-36 my-24 md:text-[42px] text-[22px]">Silhouette No. 1 – Vermilion</div>
      </div>
    </div>
  );
};

export default FeatuedSection;
