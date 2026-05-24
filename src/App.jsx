// Main app — sets up all page routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Import all pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Prediction from "./pages/Prediction";
import Upload from "./pages/Upload";
import Reports from "./pages/Reports";
import Research from "./pages/Research";
import Heatmap from "./pages/Heatmap";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/research" element={<Research />} />
          <Route path="/heatmap" element={<Heatmap />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}