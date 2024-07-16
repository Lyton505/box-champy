import boyFight from "./assets/boy-fight.jpg";
import logo from "./assets/logo-red.png";

function App() {
  return (
    <div className={"w-lvw h-lvh"}>
      <div
        className={`relative flex items-end justify-end text-white bg-black text-2xl w-lvw h-3/5`}
      >
        <img
          src={boyFight}
          className={"object-fill w-auto h-full z-10"}
          alt="Fighter boy"
        />
        <div className="absolute top-0 left-0 w-full h-full gradient-hero z-20"></div>
        <div
          className={
            "absolute w-full flex flex-row top-2 text-lg z-40 justify-between p-4"
          }
        >
          <div>
            <img src={logo} alt="Logo" className={"w-12"} />
          </div>
          <div className={"flex flex-row items-center "}>
            <ul className={"flex flex-row gap-4 m-0 p-0 list-none"}>
              <li>Home</li>
              <li>About</li>
              <li>Locations</li>
              <li>Contact</li>
            </ul>
            <button
              className={"ml-4 bg-red-700 p-1.5"}
              style={{ borderRadius: "2px" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
