import { useState, useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AnimationDetail from "./pages/AnimationDetail";
import CandyCurtain from "./components/CandyCurtain";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [curtainPhase, setCurtainPhase] = useState(null);
  const timers = useRef([]);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      return;
    }

    timers.current.forEach(clearTimeout);
    setCurtainPhase("in");

    timers.current.push(
      setTimeout(() => {
        setDisplayLocation(location);
        setCurtainPhase("out");
      }, 1200),

      setTimeout(() => {
        setCurtainPhase(null);
      }, 1600),
    );

    return () => timers.current.forEach(clearTimeout);
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen bg-cc-bg">
      <Navbar />

      {curtainPhase && <CandyCurtain phase={curtainPhase} />}
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/animations/:slug" element={<AnimationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
