import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const GetAllUser = () => {
  return (
    <section className="px-6 py-8 bg-gray-50 min-h-screen">
      <div className="border-l-4 border-black pl-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          All User Details
        </h2>
      </div>

      <div className="border p-5 ">
        <p className="flex items-center justify-end gap-x-2 px-2">
          <span>
            <MdDelete size={24} className="text-red-500 hover:text-red-700" />
          </span>
          <span>
            <CiEdit size={24} className="text-gray-500 hover:text-black" />
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base ">
          <p>
            <span className="font-semibold">Company Name:</span>
          </p>
          <p>
            <span className="font-semibold">Job Title:</span>
          </p>
          <p>
            <span className="font-semibold">Company Location:</span>
          </p>
          <p>
            <span className="font-semibold">Application Date:</span>
          </p>
          <p>
            <span className="font-semibold">Contact Person:</span>
          </p>
          <p>
            <span className="font-semibold">Contact Email:</span>
          </p>
          <p>
            <span className="font-semibold">Contact Number:</span>
          </p>
          <p>
            <span className="font-semibold">Source:</span>
          </p>
          <p className="sm:col-span-2">
            <span className="font-semibold">Note:</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetAllUser;
