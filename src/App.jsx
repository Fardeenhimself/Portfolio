import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <Router>
      <div data-theme={theme} className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full flex flex-col sm:flex-row subpixel-antialiased">
                <Sidebar />
                <Home />
              </div>
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
