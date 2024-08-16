import Logo from "../assets/Logo.svg";
import Bars from "../assets/Sort.svg";

export default function NavBar({ setIsDrop, isDrop }) {
  return (
    <nav className="navbar flex justify-between">
      <div className="flex items-center gap-2">
        <img src={Logo} />
        <span className="text-white font-bold text-3xl max-[1170px]:text-2xl">
          Enver
        </span>
      </div>
      <ul className="flex items-center capitalize text-white text-lg max-[1170px]:text-base  gap-10 max-[949px]:hidden">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">service</a>
        </li>
        <li>
          <a href="#">our project</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
      </ul>
      <div className="flex items-center justify-center max-[949px]:hidden">
        <a
          href="#"
          className="text-white hover:text-[#5858d4] transition border border-white hover:border-[#5454D4] flex items-center justify-center px-2 py-3  max-[1170px]:px-0 rounded-md"
        >
          <span className="w-[141px] block text-center capitalize max-[1170px]:text-sm">
            contact us
          </span>
        </a>
      </div>
      <button className="min-[949px]:hidden relative z-30" onClick={() => setIsDrop(!isDrop)}>
        <img
          src={Bars}
          className={`w-9 transition-all duration-500 ${
            isDrop && "-rotate-90"
          }`}
        />
      </button>
    </nav>
  );
}
