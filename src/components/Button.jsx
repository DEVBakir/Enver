import Arrow from "../assets/arrow-right-up.svg";

function Button({ text }) {
  return (
    <a
      className="flex items-center w-fit py-4 px-7 gap-2 bg-[#5454D4] rounded font-[Nunito] text-lg text-white font-semibold hover:opacity-90 max-lg:text-base max-lg:px-5"
      href="#"
    >
      {text}
      <img src={Arrow} className="w-6 h-6" />
    </a>
  );
}

export default Button;
