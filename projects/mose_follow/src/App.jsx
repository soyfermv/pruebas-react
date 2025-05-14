import { useEffect, useState } from "react";

const FollowMouse = ({ position, enable, setEnable }) => {

  

  return (
    <>
      <div
        style={{
          position: "absolute",
          background: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} Seguir Puntero
      </button>
    </>
  );
};

function App() {
const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enable]);

  const [mounted, setMounted] = useState(true);
  return (
    <main>
    {mounted && <FollowMouse position={position} enable={enable} setEnable={setEnable} />}
    <button onClick={() => setMounted(!mounted)}>
      Toggle FollowMouse
    </button>
    </main>
  );
}

export default App;
