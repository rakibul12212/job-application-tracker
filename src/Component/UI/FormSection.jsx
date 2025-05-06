"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newFormData = { ...data };

    const existingData = JSON.parse(localStorage.getItem("FormData")) || [];
    existingData.push(newFormData);
    localStorage.setItem("FormData", JSON.stringify(existingData));

    toast.success("Form submitted successfully!");
    reset();
  };

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white rounded shadow-lg">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-2"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: " phone number should be 11 numbers",
              },
            })}
            placeholder="Your Phone"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            {...register("gender", { required: "Please select your gender" })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            placeholder="Your Location"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input
            {...register("company", { required: "Company name is required" })}
            placeholder="Your Company"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input
            {...register("jobTitle", { required: "Job title is required" })}
            placeholder="Your Job Title"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows="4"
            {...register("message")}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md outline-none"
          />
        </div>

        {/* Agreement */}
        <div className="md:col-span-2 flex items-center">
          <input
            type="checkbox"
            {...register("agreement", {
              required: "You must agree before submitting",
            })}
            className="h-5 w-5 mr-2"
          />
          <label className="text-sm">I agree to the terms and conditions</label>
        </div>
        {errors.agreement && (
          <p className="text-red-500 text-sm md:col-span-2">
            {errors.agreement.message}
          </p>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-10 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
