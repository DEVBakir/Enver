import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <>
      <div className="overflow-hidden min-[1900px]:w-[60%] min-[1500px]:w-[72%] max-[1499.5px]:px-[120px] mx-auto  max-[1325px]:px-[60px] max-[855px]:px-[30px] pt-[30px] ">
        <ul
          className={`navbar h-[0] overflow-hidden text-[27px] gap-3 capitalize text-white flex flex-col items-center transition-all duration-700 ${
            isDrop && "h-[237px]"
          }`}
        >
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
        <NavBar isDrop={isDrop} setIsDrop={setIsDrop} />
        <Home />
        <div className="rec"></div>
      </div>
    </>
  );
}

export default App;
