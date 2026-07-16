export default function Filters({
    industries = [],
    countries = [],
    industry,
    country,
    onIndustryChange,
    onCountryChange,
}) {
    return (
        <div className="mb-6 grid gap-4 md:grid-cols-2">

            <select
                value={industry}
                onChange={onIndustryChange}
                className="rounded-xl border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
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
                className="rounded-xl border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
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
