export default function FeatureCard({
    icon,
    title,
    description,
  }) {
    return (
      <div
        className="
        bg-white
        rounded-2xl
        p-8
        shadow-sm
        hover:shadow-xl
        transition
        duration-300
        border
        "
      >
        <div className="text-blue-600 text-4xl mb-6">
          {icon}
        </div>
  
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>
  
        <p className="text-gray-600 leading-7">
          {description}
        </p>
      </div>
    );
  }