import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ParticlesBg from "../ui/ParticlesBg";
import { useTheme } from "../../context/ThemeContext";

export default function Layout({ children, title }) {
  const { isDark } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ background: isDark ? "#020408" : "#f5f0e8" }}
    >
      <ParticlesBg />
      <Sidebar />
      <div className="ml-64 pt-16 min-h-screen relative z-10">
        <Navbar title={title} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}