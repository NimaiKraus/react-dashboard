import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from "./components/components_index";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  Editor,
} from "./pages/pages_index";

import { useStateContext } from "./contexts/stateContexts";

function App() {
  const { isMenuActive, setIsSettingMenuOpen, isSettingMenuOpen, currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'overflow-hidden h-screen dark' : 'overflow-hidden h-screen'}>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content={"Settings"}>
              <button
                className="button text-3xl text-white hover:bg-black p-3"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setIsSettingMenuOpen(!isSettingMenuOpen)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {isMenuActive && (
            <div className="w-72 bg-main-bg min-h-screen dark:bg-main-dark-bg sidebar dark:border-r-1">
              <Sidebar />
            </div>
          )}
          <div className="w-full h-screen overflow-scroll">
            <div
              className="navbar fixed md:static w-full bg-light-gray dark:bg-main-dark-bg p-1"
              style={{ boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)" }}
            >
              <Navbar />
            </div>
            <div>
              {isSettingMenuOpen && <ThemeSettings />}
            </div>

            <Routes>
              {/* DASHBOARD  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* PAGES  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* APPS  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />

              {/* CHARTS  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
            <Footer />  
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
