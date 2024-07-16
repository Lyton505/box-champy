import boyFight from "./assets/boy-fight.jpg";

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
      </div>
    </div>
  );
}

export default App;
