import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { createInquiry } from "../services/inquiryApi";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      industry: "",
      companySize: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await createInquiry(data);
      toast.success(
        "Inquiry submitted successfully. Our team will reach out shortly."
      );
      reset();
    } catch (err) {
      const message =
        err.code === "ERR_NETWORK"
          ? "Could not reach the backend API. Make sure the server is running and that VITE_API_URL points to the correct address."
          : err.response?.data?.message ||
            "Something went wrong while submitting your inquiry.";

      toast.error(
        message
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-24 dark:bg-slate-950"
    >
      <Container>
        <SectionTitle
          subtitle="Contact Sales"
          title="Let's Grow Your Business Together"
          description="Tell us about your business and our team will get back to you shortly."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900 dark:shadow-slate-950/40"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Full Name"
              placeholder="John Doe"
              name="fullName"
              register={register}
              errors={errors}
              rules={{
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters",
                },
              }}
            />

            <Input
              label="Company Name"
              placeholder="ABC Pvt Ltd"
              name="companyName"
              register={register}
              errors={errors}
              rules={{
                required: "Company name is required",
              }}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@gmail.com"
              name="email"
              register={register}
              errors={errors}
              rules={{
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
            />

            <Input
              label="Phone Number"
              placeholder="+91 9876543210"
              name="phone"
              register={register}
              errors={errors}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[\d\s()-]{8,20}$/,
                  message: "Enter a valid phone number",
                },
              }}
            />

            <div>
              <label className="font-medium dark:text-slate-200">
                Country
              </label>

              <select
                {...register("country", {
                  required: "Country is required",
                })}
                className={`mt-2 w-full rounded-xl border px-4 py-3 ${
                  errors.country
                    ? "border-red-500"
                    : "border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                }`}
              >
                <option value="">Select Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>

              {errors.country && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium dark:text-slate-200">
                Industry
              </label>

              <select
                {...register("industry", {
                  required: "Industry is required",
                })}
                className={`mt-2 w-full rounded-xl border px-4 py-3 ${
                  errors.industry
                    ? "border-red-500"
                    : "border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                }`}
              >
                <option value="">Select Industry</option>
                <option>IT</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Education</option>
                <option>E-commerce</option>
              </select>

              {errors.industry && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.industry.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium dark:text-slate-200">
                Company Size
              </label>

              <select
                {...register("companySize", {
                  required: "Company size is required",
                })}
                className={`mt-2 w-full rounded-xl border px-4 py-3 ${
                  errors.companySize
                    ? "border-red-500"
                    : "border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                }`}
              >
                <option value="">Select Size</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>200+</option>
              </select>

              {errors.companySize && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.companySize.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="font-medium dark:text-slate-200">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Tell us about your requirements..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className={`mt-2 w-full rounded-xl border p-4 ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              }`}
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            className="mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Inquiry"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
