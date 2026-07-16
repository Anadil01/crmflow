import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  deleteInquiry,
  getInquiries,
} from "../services/inquiryApi";
import DashboardStats from "../components/DashboardStats";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import InquiryTable from "../components/InquiryTable";

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);

    try {
      const res = await getInquiries();
      setInquiries(res.data.data);
      setError("");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to load inquiries right now.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this inquiry?")) {
      return;
    }

    setDeleteError("");

    const deleteToastId = toast.loading(
      "Deleting inquiry..."
    );

    try {
      await deleteInquiry(id);
      setInquiries((current) =>
        current.filter((item) => item._id !== id)
      );
      toast.success("Inquiry deleted successfully.", {
        id: deleteToastId,
      });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to delete this inquiry.";
      setDeleteError(message);
      toast.error(message, {
        id: deleteToastId,
      });
    }
  };

  const industries = [
    ...new Set(inquiries.map((item) => item.industry)),
  ];

  const countries = [
    ...new Set(inquiries.map((item) => item.country)),
  ];

  const filteredData = inquiries.filter((item) => {
    const matchesSearch = [
      item.fullName,
      item.companyName,
      item.email,
    ].some((value) =>
      value
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    const matchesIndustry =
      !selectedIndustry ||
      item.industry === selectedIndustry;

    const matchesCountry =
      !selectedCountry ||
      item.country === selectedCountry;

    return (
      matchesSearch &&
      matchesIndustry &&
      matchesCountry
    );
  });

  return (
    <div className="min-h-screen bg-slate-100 p-4 dark:bg-slate-950 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold md:text-4xl">
          CRMFlow Dashboard
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Review, search, and manage incoming sales inquiries.
        </p>

        <DashboardStats inquiries={filteredData} />

        <SearchBar
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        <Filters
          industries={industries}
          countries={countries}
          industry={selectedIndustry}
          country={selectedCountry}
          onIndustryChange={(event) =>
            setSelectedIndustry(event.target.value)
          }
          onCountryChange={(event) =>
            setSelectedCountry(event.target.value)
          }
        />

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </div>
        )}

        {deleteError && (
          <div className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {deleteError}
          </div>
        )}

        <InquiryTable
          inquiries={filteredData}
          loading={loading}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
