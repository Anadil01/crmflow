export default function SectionTitle({
    subtitle,
    title,
    description,
  }) {
    return (
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          {subtitle}
        </p>
  
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          {title}
        </h2>
  
        <p className="text-gray-600 mt-5 text-lg">
          {description}
        </p>
      </div>
    );
  }