import {
  HiMoon,
  HiSun,
} from "react-icons/hi";

export default function ThemeToggle({
  theme,
  onToggle,
}) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${
        isDark ? "light" : "dark"
      } mode`}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700/80 dark:bg-slate-900/75 dark:text-slate-100 dark:shadow-[0_16px_50px_rgba(2,6,23,0.55)] dark:hover:border-blue-500/40 dark:hover:text-blue-200"
    >
      {isDark ? (
        <HiSun className="text-lg text-amber-400" />
      ) : (
        <HiMoon className="text-lg text-slate-700" />
      )}

      <span>{isDark ? "Light" : "Dark"} Mode</span>
    </button>
  );
}
