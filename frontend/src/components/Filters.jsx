export default function Filters({
    industries = [],
    countries = [],
    industry,
    country,
    onIndustryChange,
    onCountryChange,
}) {
    return (
        <div className="grid md:grid-cols-2 gap-4 mb-6">

            <select
                value={industry}
                onChange={onIndustryChange}
                className="border p-3 rounded-xl"
            >
                <option value="">All Industries</option>

                {industries.map((item) => (
                    <option key={item}>
                        {item}
                    </option>
                ))}

            </select>

            <select
                value={country}
                onChange={onCountryChange}
                className="border p-3 rounded-xl"
            >
                <option value="">All Countries</option>

                {countries.map((item) => (
                    <option key={item}>
                        {item}
                    </option>
                ))}

            </select>

        </div>
    );
}