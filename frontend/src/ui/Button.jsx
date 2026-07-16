export default function Button({
    children,
    className = "",
    ...props
  }) {
    return (
      <button
        className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition font-semibold ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }