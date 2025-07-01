import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import toast from "react-hot-toast";
import api from "../../utils/api";

interface AddStaffProps {
  setShowAddStaff: (value: boolean) => void;
  fetchData: () => void;
}

const AddStaff = ({ setShowAddStaff, fetchData }: AddStaffProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    nic: "",
    gender: "",
    birthday: "",
    address: "",
    role: "",
    location: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("staff/addstaff", {
        name: value.name,
        email: value.email,
        phone: value.phone,
        nic: value.nic,
        gender: value.gender,
        birthday: value.birthday,
        address: value.address,
        role: value.role,
        location: value.location,
        password: value.password,
        password_confirmation: value.password_confirmation,
      });
      setShowAddStaff(false);
      if (response.data.status === true) {
        toast.success(response.data.message);
      } else if (response.data.status === false) {
        toast.error(response.data.message);
      }
      setValue({
        id: "",
        name: "",
        email: "",
        phone: "",
        nic: "",
        gender: "",
        birthday: "",
        address: "",
        role: "",
        location: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;
        Object.keys(validationErrors).forEach((field) => {
          toast.error(validationErrors[field][0]);
        });
      } else {
        toast.error("Something went wrong, please try again!");
      }
    } finally {
      setLoading(false);
      fetchData();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="popup-backdrop">
      <div className="popup">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">Add Staff</h3>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-3xl"
            onClick={() => setShowAddStaff(false)}
          />
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <section className="flex flex-row gap-5">
            <div className="relative flex flex-col gap-1.5">
              <Input
                name={"name"}
                type="text"
                label="Name"
                onChange={handleChange}
                required
              />
              <Input
                name={"phone"}
                type="text"
                label="Phone Number"
                onChange={handleChange}
                required
              />

              <div className="relative">
                <Dropdown
                  title="Gender"
                  label="Select Gender"
                  name="gender"
                  id="gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                name={"address"}
                type="text"
                label="Address"
                onChange={handleChange}
                required
              />

              <Dropdown
                title="Location"
                label="Select Location"
                name="location"
                id="location"
                options={[
                  { value: "Head Office", label: "Head Office" },
                  { value: "Colombo Branch", label: "Colombo Branch" },
                  { value: "Kandy Branch", label: "Kandy Branch" },
                  { value: "Galle Branch", label: "Galle Branch" },
                  { value: "Jaffna Branch", label: "Jaffna Branch" },
                ]}
                onChange={handleChange}
                required
              />

              <Input
                name={"password"}
                type="password"
                label="Password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex flex-col gap-1.5">
              <Input
                name={"email"}
                type="email"
                label="Email"
                onChange={handleChange}
                required
              />
              <Input
                name={"nic"}
                type="text"
                label="NIC"
                onChange={handleChange}
                required
              />
              <Input
                name={"birthday"}
                type="date"
                label="Birthdate"
                onChange={handleChange}
                required
              />

              <Dropdown
                title="Role"
                label="Select Role"
                name="role"
                id="role"
                options={[
                  { value: "Admin", label: "admin" },
                  { value: "Cashier", label: "cashier" },
                  { value: "Manager", label: "manager" },
                  { value: "Supervisr", label: "supervisor" },
                  { value: "Accountant", label: "accountant" },
                ]}
                onChange={handleChange}
                required
              />

              <Input
                name={"password_confirmation"}
                type="password"
                label="Confrim Password"
                onChange={handleChange}
                required
              />
            </div>
          </section>
          <section>
            <button
              type="submit"
              className={`bg-primarytext h-12 w-full rounded-xl border-none text-sm font-bold text-white outline-none ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v4m0 8v4m8-8h-4m-8 0H4"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
