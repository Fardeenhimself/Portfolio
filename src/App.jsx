import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased bg-white">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
