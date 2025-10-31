import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Challenges from "./pages/Challenges.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
