export default function FeatureCard({
    icon,
    title,
    description,
  }) {
    return (
      <div
        className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition
        duration-300
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:shadow-slate-950/40
        "
      >
        <div className="text-blue-600 text-4xl mb-6">
          {icon}
        </div>
  
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>
  
        <p className="text-gray-600 leading-7 dark:text-slate-300">
          {description}
        </p>
      </div>
    );
  }
