import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Input from "../../components/Input";

const StaffPage = () => {
  const [showAddStaff, setShowAddStaff] = useState<boolean>(true);
  return (
    <div>
      {/* Filter Section */}
      <section className="filter-header flex flex-wrap items-center gap-4">
        {/* Select Role */}
        <Dropdown
          title=""
          label="Select Role"
          name="role"
          id="role"
          options={[
            { value: "admin", label: "Admin" },
            { value: "cashier", label: "Cashier" },
            { value: "manager", label: "Manager" },
            { value: "supervisor", label: "Supervisor" },
            { value: "accountant", label: "Accountant" },
          ]}
        />

        {/* Filter by Department */}
        <Dropdown
          title=""
          label="Filter by Department"
          name="department"
          id="department"
          options={[
            { value: "sales", label: "Sales" },
            { value: "marketing", label: "Marketing" },
            { value: "hr", label: "Human Resources" },
            { value: "it", label: "IT" },
            { value: "finance", label: "Finance" },
          ]}
        />

        {/* Sort by Status */}
        <Dropdown
          title=""
          label="Sort by Status"
          name="status"
          id="status"
          options={[
            { value: "active", label: "Active" },
            { value: "on_leave", label: "On Leave" },
            { value: "terminated", label: "Terminated" },
            { value: "probation", label: "Probation" },
            { value: "contract", label: "Contract" },
          ]}
        />

        {/* Select Location */}
        <Dropdown
          title=""
          label="Sort by Location"
          name="location"
          id="location"
          options={[
            { value: "ho", label: "Head Office" },
            { value: "colombo_br", label: "Colombo Branch" },
            { value: "kandy_br", label: "Kandy Branch" },
            { value: "galle_br", label: "Galle Branch" },
            { value: "jaffna_br", label: "Jaffna Branch" },
          ]}
        />

        {/* Filter by Shift */}
        <Dropdown
          title=""
          label="Filter by Shift"
          name="shift"
          id="shift"
          options={[
            { value: "morning_shift", label: "Morning (8am - 4pm)" },
            { value: "evening_shift", label: "Evening (4pm - 12am)" },
            { value: "night_shift", label: "Night (12am - 8am)" },
            { value: "flexible_shift", label: "Flexible" },
          ]}
        />

        {/* Add Staff Button */}
        <button
          className="bg-shade text-primarytext flex h-10 w-auto cursor-pointer flex-row items-center justify-center gap-2 truncate rounded-full px-4 py-2 text-sm sm:text-base"
          onClick={() => setShowAddStaff(true)}
        >
          <AiOutlinePlus />
          <span>Add Staff</span>
        </button>
      </section>

      {/* Table Section */}
      <section className="table-canvas">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">
                <span className="table-header-span">#</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Date & Time</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Customer Name</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-shade border-b">
              <td className="table-data-span">1</td>
              <td className="table-data-span">2025-06-11 10:30 AM</td>
              <td className="table-data-span">Kavindu Perera</td>
              <td className="table-data-span">Active</td>
            </tr>
            <tr className="border-shade border-b">
              <td className="table-data-span">2</td>
              <td className="table-data-span">2025-06-10 2:45 PM</td>
              <td className="table-data-span">Nimesha Silva</td>
              <td className="table-data-span">On Leave</td>
            </tr>
            <tr className="border-shade border-b">
              <td className="table-data-span">3</td>
              <td className="table-data-span">2025-06-09 9:15 AM</td>
              <td className="table-data-span">Janith Fernando</td>
              <td className="table-data-span">Probation</td>
            </tr>
          </tbody>
        </table>
      </section>

      {showAddStaff && (
        <div className="popup-backdrop">
          <div className="popup">
            <div className="flex flex-row items-center justify-between">
              <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">Title</h3>
              <IoMdCloseCircleOutline
                className="cursor-pointer text-3xl"
                onClick={() => setShowAddStaff(false)}
              />
            </div>
            <form className="flex flex-col gap-5">
              <section className="flex flex-row gap-5">
                <div className="relative flex flex-col gap-1.5">
                  <Input name={"name"} type="text" lable="Name" />
                  <Input name={"phone"} type="text" lable="Phone Number" />

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
                    />
                  </div>

                  <Input name={"address"} type="text" lable="Address" />

                  <Dropdown
                    title="Location"
                    label="Select Location"
                    name="location"
                    id="location"
                    options={[
                      { value: "Head Office", label: "ho" },
                      { value: "Colombo Branch", label: "colombo_br" },
                      { value: "Kandy Branch", label: "kandy_br" },
                      { value: "Galle Branch", label: "galle_br" },
                      { value: "Jaffna Branch", label: "jaffna_br" },
                    ]}
                  />

                  <Input name={"password"} type="password" lable="Password" />
                </div>
                <div className="relative flex flex-col gap-1.5">
                  <Input name={"email"} type="email" lable="Email" />
                  <Input name={"nic"} type="text" lable="NIC" />
                  <Input name={"birthdate"} type="date" lable="Birthdate" />

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
                  />

                  <Input
                    name={"confrim_password"}
                    type="password"
                    lable="Confrim Password"
                  />
                </div>
              </section>
              <section>
                <button
                  type="submit"
                  className="bg-primarytext h-12 w-full cursor-pointer rounded-xl border-none text-sm font-bold text-white outline-none"
                >
                  Submit
                </button>
              </section>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffPage;
