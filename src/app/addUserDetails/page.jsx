import FormSection from "../../Component/UI/FormSection";

const addUserDetails = () => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <p className="text-xl font-semibold border-l-2 ps-3  inline-block">
          Add User Details
        </p>
      </div>
      <FormSection />
    </div>
  );
};

export default addUserDetails;
