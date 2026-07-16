export default function Button({
    children,
    className = "",
    ...props
  }) {
    return (
      <button
        className={`rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_16px_40px_rgba(37,99,235,0.32)] dark:bg-blue-500 dark:shadow-[0_14px_36px_rgba(59,130,246,0.22)] dark:hover:bg-blue-400 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
