export default function DashboardStats({
    inquiries,
}) {
    return (

        <div className="my-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-900 dark:shadow-slate-950/40">

                <p className="text-slate-600 dark:text-slate-300">Total Inquiries</p>

                <h2 className="text-4xl font-bold">

                    {inquiries.length}

                </h2>

            </div>

            <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-900 dark:shadow-slate-950/40">

                <p className="text-slate-600 dark:text-slate-300">Countries</p>

                <h2 className="text-4xl font-bold">

                    {
                        new Set(
                            inquiries.map(
                                i => i.country
                            )
                        ).size
                    }

                </h2>

            </div>

            <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-900 dark:shadow-slate-950/40">

                <p className="text-slate-600 dark:text-slate-300">Industries</p>

                <h2 className="text-4xl font-bold">

                    {
                        new Set(
                            inquiries.map(
                                i => i.industry
                            )
                        ).size
                    }

                </h2>

            </div>

        </div>

    );
}
