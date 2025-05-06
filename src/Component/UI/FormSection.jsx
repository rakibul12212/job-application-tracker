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
    console.log("file submitted", data);

    const existingData = JSON.parse(localStorage.getItem("FormData")) || [];
    existingData.push(data);
    localStorage.setItem("FormData", JSON.stringify(existingData));

    toast.success("Form submitted successfully");
    reset();
  };

  return (
    <div className="p-6 mt-4 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
      >
        {/* name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="Enter your name"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[a-z0-9]+@[a-z0-9.-]+.[a-z]$/,
                message: "Enter a valid email ",
              },
            })}
            placeholder="Enter your email"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        {/* number */}
        <div className="flex flex-col">
          <label htmlFor="number" className="mb-1 text-sm font-medium">
            Contact Number
          </label>
          <input
            id="number"
            type="tel"
            {...register("number", {
              required: "contact is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Contact number must be exactly 11 digits",
              },
            })}
            placeholder="Enter your number"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.number && (
            <span className="text-red-500 text-xs">
              {errors.number.message}
            </span>
          )}
        </div>

        {/* location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            {...register("location", {
              required: "location is required",
            })}
            placeholder="Enter your location"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.location && (
            <span className="text-red-500 text-xs">
              {errors.location.message}
            </span>
          )}
        </div>

        {/* dob */}
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1 text-sm font-medium">
            Date Of Birth
          </label>
          <input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.date && (
            <span className="text-red-500 text-xs">{errors.date.message}</span>
          )}
        </div>

        {/* maritial status */}
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-1 text-sm font-medium">
            marital status
          </label>
          <select
            id="status"
            {...register("status", {
              required: "this field is required",
            })}
            className="border border-gray-300 outline-none rounded p-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select a status
            </option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>

            <option value="Other">Other</option>
          </select>
          {errors.status && (
            <span className="text-red-500 text-xs">
              {errors.status.message}
            </span>
          )}
        </div>

        {/* company */}
        <div className="flex flex-col">
          <label htmlFor="company" className="mb-1 text-sm font-medium">
            Company Name
          </label>
          <input
            id="company"
            {...register("company", { required: "Name is required" })}
            placeholder="Enter Company name"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.company && (
            <span className="text-red-500 text-xs">
              {errors.company.message}
            </span>
          )}
        </div>
        {/* job title */}
        <div className="flex flex-col">
          <label htmlFor="jobTitle" className="mb-1 text-sm font-medium">
            Job Title
          </label>
          <input
            id="jobTitle"
            {...register("jobTitle", { required: "Job title is required" })}
            placeholder="Enter job title"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.jobTitle && (
            <span className="text-red-500 text-xs">
              {errors.jobTitle.message}
            </span>
          )}
        </div>

        {/* note */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="notes" className="mb-1 text-sm font-medium">
            Additional Notes
          </label>
          <textarea
            id="notes"
            rows={4}
            {...register("notes")}
            placeholder="Write something..."
            className="border border-gray-300 outline-none rounded p-2"
          />
        </div>

        {/* terms */}
        <div>
          <div className="flex flex-col ">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
                className="w-4 h-4"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          )}
        </div>
        <div className="flex justify-start md:justify-end">
          <button
            type="submit"
            className="px-16 bg-white text-black border py-2 rounded hover:bg-black hover:text-white  transition "
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormSection;
