import { Navbar, Sidebar } from "./components";
import {
  About,
  Login,
  Home,
  UseStateHook,
  UseContextHook,
  UseEffectHook,
  HtmlInputs,
} from "./pages";
import { Academind } from "./academind";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex h-screen flex-col">
          <Navbar />
          <div className="flex flex-grow">
            <Sidebar className={"w-64"} />

            <main className="flex-grow p-4 ">
              <nav>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/usestate" element={<UseStateHook />} />
                  <Route path="/useeffect" element={<UseEffectHook />} />
                  <Route path="/usecontext" element={<UseContextHook />} />
                  <Route path="/html" element={<HtmlInputs />} />
                  <Route path="/academind" element={<Academind />} />
                </Routes>
              </nav>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
