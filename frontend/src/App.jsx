import "./App.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("crmflow-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
    localStorage.setItem("crmflow-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            borderRadius: "16px",
            background:
              theme === "dark" ? "#0f172a" : "#ffffff",
            color:
              theme === "dark" ? "#f8fafc" : "#0f172a",
            border:
              theme === "dark"
                ? "1px solid #334155"
                : "1px solid #e2e8f0",
          },
          success: {
            style: {
              background: "#166534",
              color: "#f8fafc",
            },
          },
          error: {
            style: {
              background: "#991b1b",
              color: "#f8fafc",
            },
          },
        }}
      />

      <ThemeToggle
        theme={theme}
        onToggle={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark"
              ? "light"
              : "dark"
          )
        }
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
