import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";
import type { StaffPageProps } from "../../lib/types/staff";

interface EditStaffProps {
  data: StaffPageProps;
  showEditStaff: boolean;
  setshowEditStaff: (value: boolean) => void;
  setSelectedStaff: React.Dispatch<React.SetStateAction<StaffPageProps | null>>;
  fetchData: () => void;
}

const EditStaff: React.FC<EditStaffProps> = ({
  data,
  showEditStaff,
  setshowEditStaff,
  setSelectedStaff,
  fetchData,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState({
    id: data.id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    nic: data.nic,
    gender: data.gender,
    birthday: data.birthday,
    address: data.address,
    role: data.role,
    location: data.location,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("staff/editstaff", {
        id: value.id,
        name: value.name,
        email: value.email,
        phone: value.phone,
        nic: value.nic,
        gender: value.gender,
        birthday: value.birthday,
        address: value.address,
        role: value.role,
        location: value.location,
      });

      if (response.data.status === true) {
        toast.success(response.data.message);
      } else if (response.data.status === false) {
        toast.error(response.data.message);
      }
      fetchData();
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
      setshowEditStaff(false);
    }
  };

  return (
    showEditStaff && (
      <div className="popup-backdrop">
        <div className="popup">
          <div className="flex flex-row items-center justify-between">
            <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">
              Edit Staff Details
            </h3>
            <IoMdCloseCircleOutline
              className="cursor-pointer text-3xl"
              onClick={() => {
                setshowEditStaff(false);
                setSelectedStaff(null);
              }}
            />
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <section className="flex flex-row gap-5">
              <div className="relative flex flex-col gap-1.5">
                <Input
                  name={"name"}
                  value={value.name}
                  type="text"
                  label="Name"
                  onChange={handleChange}
                  required
                />
                <Input
                  name={"phone"}
                  value={value.phone}
                  type="text"
                  label="phone Number"
                  onChange={handleChange}
                  required
                />

                <div className="relative">
                  <Dropdown
                    title="Gender"
                    label="Select Gender"
                    name="gender"
                    value={value.gender}
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
                  value={value.address}
                  type="text"
                  label="Address"
                  onChange={handleChange}
                  required
                />

                <Dropdown
                  title="Location"
                  label="Select Location"
                  name="location"
                  value={value.location}
                  id="location"
                  options={[
                    { value: "Head Office", label: "ho" },
                    { value: "Colombo Branch", label: "colombo_br" },
                    { value: "Kandy Branch", label: "kandy_br" },
                    { value: "Galle Branch", label: "galle_br" },
                    { value: "Jaffna Branch", label: "jaffna_br" },
                  ]}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative flex flex-col gap-1.5">
                <Input
                  name={"email"}
                  value={value.email}
                  type="email"
                  label="Email"
                  onChange={handleChange}
                  required
                />
                <Input
                  name={"nic"}
                  value={value.nic}
                  type="text"
                  label="NIC"
                  onChange={handleChange}
                  required
                />
                <Input
                  name={"birthday"}
                  value={value.birthday}
                  type="date"
                  label="Birthdate"
                  onChange={handleChange}
                  required
                />

                <Dropdown
                  title="Role"
                  label="Select Role"
                  name="role"
                  value={value.role}
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
                  <span>Save</span>
                )}
              </button>
            </section>
          </form>
        </div>
      </div>
    )
  );
};

export default EditStaff;
