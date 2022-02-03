import { useRef } from "react";
import Todos from "../features/todo/Todos";

function App() {
  const themeRef = useRef();


  const switchToDark = () => {
    themeRef.current.className = "dark";
  };
  const switchToLight = () => {
    themeRef.current.className = "light";
  };

  return (
    <div ref={themeRef} class="h-full bg-slate-200" className="dark">
      <Todos light={switchToLight} dark={switchToDark} />
    </div>
  );
}

export default App;
