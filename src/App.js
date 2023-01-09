import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages";

import { Contact } from "./pages/Contact";
import View from "./pages/view";
import { Navbar } from "./components/Navbar";
import Create from "./pages/create";
import Store from "./store/store";

function App() {
  return (
    <div>
      <Store>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/index" element={<Index />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view/:bookId" element={<View />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
