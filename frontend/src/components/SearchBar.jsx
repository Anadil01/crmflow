export default function SearchBar({
    value,
    onChange,
}) {
    return (

        <input
            value={value}
            onChange={onChange}
            placeholder="Search company or person..."
            className="
            w-full
            p-4
            rounded-xl
            border
            border-slate-300
            bg-white
            text-slate-900
            mb-6
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-100
            "
        />

    );
}
