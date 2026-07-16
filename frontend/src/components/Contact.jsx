import { useState } from "react";
import { useForm } from "react-hook-form";

import { createInquiry } from "../services/inquiryApi";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

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
    setSubmitStatus({
      type: "",
      message: "",
    });

    try {
      await createInquiry(data);
      setSubmitStatus({
        type: "success",
        message:
          "Inquiry submitted successfully. Our team will reach out shortly.",
      });
      reset();
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          err.response?.data?.message ||
          "Something went wrong while submitting your inquiry.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <Container>
        <SectionTitle
          subtitle="Contact Sales"
          title="Let's Grow Your Business Together"
          description="Tell us about your business and our team will get back to you shortly."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg"
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
              <label className="font-medium">
                Country
              </label>

              <select
                {...register("country", {
                  required: "Country is required",
                })}
                className={`mt-2 w-full rounded-xl border px-4 py-3 ${
                  errors.country
                    ? "border-red-500"
                    : "border-gray-300"
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
              <label className="font-medium">
                Industry
              </label>

              <select
                {...register("industry", {
                  required: "Industry is required",
                })}
                className={`mt-2 w-full rounded-xl border px-4 py-3 ${
                  errors.industry
                    ? "border-red-500"
                    : "border-gray-300"
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
              <label className="font-medium">
                Company Size
              </label>

              <select
                {...register("companySize", {
                  required: "Company size is required",
                })}
                className={`mt-2 w-full rounded-xl border px-4 py-3 ${
                  errors.companySize
                    ? "border-red-500"
                    : "border-gray-300"
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
            <label className="font-medium">
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
                  : "border-gray-300"
              }`}
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {submitStatus.message && (
            <p
              className={`mt-6 rounded-xl px-4 py-3 text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {submitStatus.message}
            </p>
          )}

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
