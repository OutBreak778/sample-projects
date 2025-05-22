import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import FeatuedSection from "./components/FeatuedSection";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import Testimonial from "./components/Testimonial";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="z-10 fixed top-0 left-0 w-full backdrop-blur-lg bg-black/40 md:px-12">
          <Navbar />
        </div>
        <div className="mt-[107px]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <FeatuedSection />
                  <ProductSection />
                  <Dropdown />
                  <Testimonial />
                  <Footer />
                </>
              }
            />
            <Route path="/cart" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
