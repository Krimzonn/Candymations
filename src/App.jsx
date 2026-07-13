import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AnimationDetail from "./pages/AnimationDetail";

function App() {
  return (
    <div className="min-h-screen bg-cc-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/animations/:slug" element={<AnimationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
