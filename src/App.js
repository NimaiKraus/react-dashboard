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
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages/pages_index";
function App() {
  const isMenuActive = true;
  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content={"Settings"}>
              <button
                className="button text-3xl text-white hover:bg-black p-3"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {isMenuActive && (
            <div className="w-72 bg-black min-h-screen dark:bg-main-dark-bg fixed sidebar text-white">
              {/* <div className="navbar md:static w-full bg-main-bg dark:bg-main-dark-bg fixed">
                <Navbar />
              </div> */}
              <Sidebar />
              <div>
                <Routes>
                  {/* DASHBOARD  */}
                  <Route path="/" element={(<Ecommerce />)} />
                  <Route path="/ecommerce" element={(<Ecommerce />)} />

                  {/* PAGES  */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* APPS  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* CHARTS  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
