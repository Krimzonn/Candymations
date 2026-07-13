import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AnimationDetail from "./pages/AnimationDetail";

function App() {
  return (
    <div className="min-h-screen bg-cc-bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/animations/:slug" element={<AnimationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
