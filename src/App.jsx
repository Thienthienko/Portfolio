import { Outlet } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { LightModeContext } from "./components/ThemeContext";

function App() {
  const { lightMode } = useContext(LightModeContext);
  return (
    <>
      <div className={`app ${lightMode !== false && "light-theme"}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
