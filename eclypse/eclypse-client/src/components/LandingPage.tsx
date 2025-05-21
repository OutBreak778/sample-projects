import vid from "../assets/landing-video-eclypse.mov";

const LandingPage = () => {
  return (
    <div>
      <div className="font-normal md:text-[99px] text-[30px] text-white flex justify-between relative my-2 px-3">
        <div className="flex">
          <p>Eclypse</p>
          <p className="md:text-[40px] text-[10px] font-extralight md:mt-10 mt-2">®</p>
        </div>
        {/* <div className="flex items-center space-x-0.5 justify-center right-1 bottom-4">
          <p className="md:text-sm text-[12px]">©</p> <p className="text-white font-medium md:text-[13px] text-[11px]">2025</p>
        </div> */}
      </div>
      {/* <div className="flex justify-end space-y-0 items-center space-x-0.5 text-muted">
      </div> */}
      <div className="relative md:w-full w-[400px] md:h-[510px] h-[350px] mb-12 ">
        <video
          className="w-full h-full rounded-[5px] object-cover"
          src={vid}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="shadow-[inset_-50px_-35px_83px_50px_rgba(0,_0,_0,_0.2)] absolute top-0 left-0 w-full h-full pointer-events-none z-10 "></div>
        <div className="absolute bottom-5 right-4 md:text-[34.22px] text-[14px] font-normal text-white">
          A silhouette worth remembering
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
