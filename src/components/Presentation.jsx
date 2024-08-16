import meetImg from "../assets/meet.png";
import buttonPlay from "../assets/button-play.svg";

function Presentation() {
  return (
    <div className="mt-24 mb-24">
      <div className="flex mb-9 max-[992px]:flex-col max-[992px]:items-center max-[992px]:text-center">
        <h2 className="capitalize text-white font-bold leading-[75px] text-[52px] max-[1080px]:text-[46px] max-[650px]:text-[40px]">
          Why Enver Is The Best Choice?
        </h2>
        <p className="mt-4 mb-8  text-white opacity-70 text-lg leading-9 font-[Nunito] max-[1080px]:pt-1 ">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div className="relative">
        <img src={meetImg} className="w-[90%] mx-auto max-[650px]:w-[100%]" />
        <button className="p-10 flex items-center justify-center bg-[#5454D4] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={buttonPlay} />
        </button>
      </div>
    </div>
  );
}

export default Presentation;
