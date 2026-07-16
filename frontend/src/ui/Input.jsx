export default function Input({
  label,
  type = "text",
  placeholder,
  register,
  name,
  errors,
  rules,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`border rounded-xl px-4 py-3 outline-none transition ${
          errors[name]
            ? "border-red-500"
            : "border-gray-300 focus:border-blue-600"
        }`}
      />

      {errors[name] && (
        <p className="text-sm text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}
