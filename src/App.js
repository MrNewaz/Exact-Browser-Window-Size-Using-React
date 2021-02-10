import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, windowHeight]);

  return (
    <div>
      <h1>Screen Resolution</h1>
      <h2>Height:{windowHeight}</h2>
      <h2>Width:{windowWidth}</h2>
    </div>
  );
}

export default App;
