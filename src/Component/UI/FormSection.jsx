"use client";

import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("file submitted", data);
  };
  //   const notify = () => toast("Submitted Successfully");

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
            {...register("companyName", { required: true })}
            placeholder="Enter company name"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.companyName && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="jobTitle" className="mb-1 text-sm font-medium">
            Job Title
          </label>
          <input
            id="jobTitle"
            {...register("jobTitle", { required: true })}
            placeholder="Enter job title"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.jobTitle && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            {...register("location", { required: true })}
            placeholder="Enter location"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.location && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="applicationDate" className="mb-1 text-sm font-medium">
            Application Date
          </label>
          <input
            id="applicationDate"
            type="date"
            {...register("applicationDate", { required: true })}
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.applicationDate && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactPerson" className="mb-1 text-sm font-medium">
            Contact Person
          </label>
          <input
            id="contactPerson"
            {...register("contactPerson", { required: true })}
            placeholder="Enter contact person"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.contactPerson && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactEmail" className="mb-1 text-sm font-medium">
            Contact Email
          </label>
          <input
            id="contactEmail"
            type="email"
            {...register("contactEmail", { required: true })}
            placeholder="Enter email"
            className="border border-gray-300 outline-none rounded p-2"
          />{" "}
          {errors.contactEmail && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactNumber" className="mb-1 text-sm font-medium">
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="tel"
            {...register("contactNumber", { required: true })}
            placeholder="Enter contact number"
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.contactNumber && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="resume" className="mb-1 text-sm font-medium ">
            Upload File
          </label>
          <input
            id="resume"
            type="file"
            {...register("resume", { required: true })}
            className="border border-gray-300 outline-none rounded p-2"
          />
          {errors.resume && (
            <span className="text-red-500 text-xs">This field is required</span>
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
            // onClick={notify}
            className="w-full bg-white text-black border py-2 rounded hover:bg-black hover:text-white  transition "
          >
            Submit
          </button>
          {/* <ToastContainer /> */}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
