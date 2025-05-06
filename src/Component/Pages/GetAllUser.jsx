"use client";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const GetAllUser = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("FormData")) || [];
    setFormData(storedData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    localStorage.setItem("FormData", JSON.stringify(updatedData));
    setFormData(updatedData);
  };

  return (
    <div>
      <section className="px-6 py-8 bg-gray-50 min-h-screen">
        <div className="border-l-4 border-black pl-4 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            All User Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formData.map((user, index) => {
            const {
              name,
              email,
              phone,
              gender,
              location,
              date,
              company,
              jobTitle,
              message,
            } = user;

            return (
              <div
                key={index}
                className="border p-5 bg-white shadow rounded-lg relative"
              >
                <div className="absolute top-3 right-3 flex gap-2">
                  <button onClick={() => handleDelete(index)} title="Delete">
                    <MdDelete
                      size={20}
                      className="text-red-500 hover:text-red-700"
                    />
                  </button>
                  <button title="Edit (not implemented)">
                    <CiEdit
                      size={20}
                      className="text-gray-500 hover:text-black"
                    />
                  </button>
                </div>

                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <span className="font-semibold">Name:</span> {name}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {phone}
                  </p>
                  <p>
                    <span className="font-semibold">Gender:</span> {gender}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> {location}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span> {date}
                  </p>
                  <p>
                    <span className="font-semibold">Company:</span> {company}
                  </p>
                  <p>
                    <span className="font-semibold">Job Title:</span> {jobTitle}
                  </p>
                  <p>
                    <span className="font-semibold">Message:</span> {message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GetAllUser;
