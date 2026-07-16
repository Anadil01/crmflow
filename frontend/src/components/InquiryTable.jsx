import { FaTrash } from "react-icons/fa";

export default function InquiryTable({
  inquiries,
  loading,
  onDelete,
}) {
  if (loading) {
    return <h2 className="text-lg font-medium">Loading...</h2>;
  }

  if (!inquiries.length) {
    return (
      <div className="rounded-xl bg-white p-8 text-center text-slate-500 shadow">
        No inquiries match the current filters.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-200">
            <tr className="text-left text-sm uppercase tracking-wide text-slate-700">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Industry</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((item) => (
              <tr
                key={item._id}
                className="border-b border-slate-100 text-sm"
              >
                <td className="px-4 py-3">{item.fullName}</td>
                <td className="px-4 py-3">{item.companyName}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.industry}</td>
                <td className="px-4 py-3">{item.country}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => onDelete(item._id)}
                    className="inline-flex rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                    aria-label={`Delete inquiry from ${item.fullName}`}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
