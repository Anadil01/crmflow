export default function DashboardStats({
    inquiries,
}) {
    return (

        <div className="grid md:grid-cols-3 gap-6 my-8">

            <div className="bg-white p-6 rounded-xl shadow">

                <p>Total Inquiries</p>

                <h2 className="text-4xl font-bold">

                    {inquiries.length}

                </h2>

            </div>

            <div className="bg-white p-6 rounded-xl shadow">

                <p>Countries</p>

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

            <div className="bg-white p-6 rounded-xl shadow">

                <p>Industries</p>

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