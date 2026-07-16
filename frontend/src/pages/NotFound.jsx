export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center dark:bg-slate-950">
      <h1 className="text-8xl font-bold text-slate-900 dark:text-white">
        404
      </h1>

      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Page not found
      </p>
    </div>
  );
}
