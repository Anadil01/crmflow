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
            mb-6
            "
        />

    );
}