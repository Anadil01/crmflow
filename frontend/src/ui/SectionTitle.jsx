export default function SectionTitle({
    subtitle,
    title,
    description,
  }) {
    return (
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          {subtitle}
        </p>
  
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          {title}
        </h2>
  
        <p className="mt-5 text-lg text-gray-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    );
  }
