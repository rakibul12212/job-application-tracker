"use client";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("file submitted", data);
    toast.success("Form submitted successfully");
  };

  return (
    <div className="p-6 mt-4 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="companyName" className="mb-1 text-sm font-medium">
            Company Name
          </label>
          <input
            id="companyName"
            {...register("companyName", {
              required: "Company Name is required",
            })}
            placeholder="Enter company name"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.companyName && (
            <span className="text-red-500 text-xs">
              {errors.companyName.message}
            </span>
          )}
        </div>

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

        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            {...register("location", { required: "Location is required" })}
            placeholder="Enter location"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.location && (
            <span className="text-red-500 text-xs">
              {errors.location.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="applicationDate" className="mb-1 text-sm font-medium">
            Application Date
          </label>
          <input
            id="applicationDate"
            type="date"
            {...register("applicationDate", { required: "Date is required" })}
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.applicationDate && (
            <span className="text-red-500 text-xs">
              {errors.applicationDate.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactPerson" className="mb-1 text-sm font-medium">
            Contact Person
          </label>
          <input
            id="contactPerson"
            {...register("contactPerson", { required: "Name is required" })}
            placeholder="Enter contact person"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.contactPerson && (
            <span className="text-red-500 text-xs">
              {errors.contactPerson.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactEmail" className="mb-1 text-sm font-medium">
            Contact Email
          </label>
          <input
            id="contactEmail"
            type="email"
            {...register("contactEmail", {
              required: "email is required",
              pattern: {
                value: /^[a-z0-9]+@[a-z0-9.-]+.[a-z]$/,
                message: "Enter a valid email ",
              },
            })}
            placeholder="Enter email"
            className="border border-gray-300 outline-none rounded p-2"
          />{" "}
          {errors.contactEmail && (
            <span className="text-red-500 text-xs">
              {errors.contactEmail.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactNumber" className="mb-1 text-sm font-medium">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="tel"
            {...register("contactNumber", {
              required: "contact is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Contact number must be exactly 11 digits",
              },
            })}
            placeholder="Enter contact number"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.contactNumber && (
            <span className="text-red-500 text-xs">
              {errors.contactNumber.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="resume" className="mb-1 text-sm font-medium ">
            Upload Resume
          </label>
          <input
            id="resume"
            type="file"
            accept="application/pdf"
            {...register("resume", { required: "pdf file is required" })}
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.resume && (
            <span className="text-red-500 text-xs">
              {errors.resume.message}
            </span>
          )}
        </div>

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

        <div className="col-span-1 md:col-span-1">
          <button
            type="submit"
            className="w-full bg-white text-black border py-2 rounded hover:bg-black hover:text-white  transition "
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
