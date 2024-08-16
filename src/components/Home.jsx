import Button from "./Button";
import HomeImg from "../assets/home.svg";
import vector1 from "../assets/Vector 13(2).svg";
import vector2 from "../assets/Group 162527.svg";
import vector3 from "../assets/Group 162526.svg";
import vector4 from "../assets/add.svg";

function Home() {
  return (
    <div className="pt-10 flex justify-between gap-5 home max-[730px]:flex-col max-[730px]:items-center ">
      <div className="mt-20 max-w-[32rem] max-[1130px]:max-w-[25rem] max-[730px]:max-w-[36rem] max-[730px]:text-center max-[518px]:text-start max-[518px]:max-w-[25rem] flex flex-col max-[730px]:items-center">
        <h1 className="capitalize text-white font-bold text-[72px]  max-[1130px]:text-6xl max-[1130px]:leading-[60px] max-[800px]:leading-[50px] max-[975px]:text-[52px] max-[626px]:text-[42px]  leading-[80px] max-[481px]:text-[52px] max-[360px]:text-[37px]">
          build your awesome platform
        </h1>
        <p className="mt-4 mb-8  text-white opacity-70 text-lg leading-9 font-[Nunito] max-[975px]:text-base max-[975px]:leading-6">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <Button text="Our Services" />
      </div>
      <div className="relative floating h-fit ">
        <img
          src={vector1}
          className="top-20  -left-8 -translate-x-8 absolute"
        />
        <img
          src={vector2}
          className="-bottom-5 max-[975px]:-bottom-4 -left-6 absolute"
        />
        <img src={vector3} className="top-16  right-0 absolute" />
        <img src={vector4} className="bottom-6  right-0 absolute" />
        <div className="relative w-[500px] max-[1087px]:w-[450px] max-[975px]:w-[390px] max-[855px]:w-[315px]  h-[600px] overflow-hidden top-5  ">
          <div className="absolute -top-[80px] -right-[76px] max-[1087px]:-right-[50px] max-[1087px]:-top-[50px]  w-[632px] max-[1087px]:w-[550px] max-[975px]:w-[490px] max-[855px]:w-[415px] max-[855px]:-top-[0px] ">
            <img src={HomeImg} />
            <div className="cadre"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
