import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Input from "../../components/Input";

const StaffPage = () => {
  const [showAddStaff, setShowAddStaff] = useState<boolean>(false);
  return (
    <div>
      {/* Filter Section */}
      <section className="filter-header">
        <Dropdown
          title="Select Role"
          element={[
            { text: "Admin", value: "admin" },
            { text: "Cashier", value: "cashier" },
            { text: "Manager", value: "manager" },
            { text: "Supervisor", value: "supervisor" },
            { text: "Accountant", value: "accountant" },
          ]}
        />

        <Dropdown
          title="Filter by Department"
          element={[
            { text: "Sales", value: "sales" },
            { text: "Marketing", value: "marketing" },
            { text: "Human Resources", value: "hr" },
            { text: "IT", value: "it" },
            { text: "Finance", value: "finance" },
          ]}
        />

        <Dropdown
          title="Sort by Status"
          element={[
            { text: "Active", value: "active" },
            { text: "On Leave", value: "on_leave" },
            { text: "Terminated", value: "terminated" },
            { text: "Probation", value: "probation" },
            { text: "Contract", value: "contract" },
          ]}
        />

        <Dropdown
          title="Select Location"
          element={[
            { text: "Head Office", value: "ho" },
            { text: "Colombo Branch", value: "colombo_br" },
            { text: "Kandy Branch", value: "kandy_br" },
            { text: "Galle Branch", value: "galle_br" },
            { text: "Jaffna Branch", value: "jaffna_br" },
          ]}
        />

        <Dropdown
          title="Filter by Shift"
          element={[
            { text: "Morning (8am - 4pm)", value: "morning_shift" },
            { text: "Evening (4pm - 12am)", value: "evening_shift" },
            { text: "Night (12am - 8am)", value: "night_shift" },
            { text: "Flexible", value: "flexible_shift" },
          ]}
        />

        <button
          className="bg-shade text-primarytext flex h-10 w-auto cursor-pointer flex-row items-center justify-center gap-2 truncate rounded-full px-4 py-2 text-left text-sm sm:text-base"
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
            <div className="mb-2 flex flex-row items-center justify-between border-b-2 border-gray-200 pb-2">
              <div>
                <h3 className="text-primarytext text-sm font-normal sm:text-base md:text-lg">
                  Title
                </h3>
              </div>

              <button
                className="cursor-pointer"
                onClick={() => setShowAddStaff(false)}
              >
                <IoIosClose className="text-3xl" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Input name={"name"} type="text" lable="Name" />
                <Input name={"phone"} type="text" lable="Phone Number" />

                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-sm md:text-base">Select Gender</label>
                  <Dropdown
                    title="gender"
                    element={[
                      { text: "Male", value: "male" },
                      { text: "Female", value: "female" },
                    ]}
                  />
                </div>
                <Input name={"address"} type="text" lable="Address" />

                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-sm md:text-base">
                    Select Location
                  </label>
                  <Dropdown
                    title="Select Location"
                    element={[
                      { text: "Head Office", value: "ho" },
                      { text: "Colombo Branch", value: "colombo_br" },
                      { text: "Kandy Branch", value: "kandy_br" },
                      { text: "Galle Branch", value: "galle_br" },
                      { text: "Jaffna Branch", value: "jaffna_br" },
                    ]}
                  />
                </div>
                <Input name={"password"} type="password" lable="Password" />
              </div>
              <div className="flex flex-col gap-2">
                <Input name={"email"} type="email" lable="Email" />
                <Input name={"nic"} type="text" lable="NIC" />
                <Input name={"birthdate"} type="date" lable="Birthdate" />
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-sm md:text-base">Select Role</label>
                  <Dropdown
                    title="Select Role"
                    element={[
                      { text: "Admin", value: "admin" },
                      { text: "Cashier", value: "cashier" },
                      { text: "Manager", value: "manager" },
                      { text: "Supervisr", value: "supervisor" },
                      { text: "Accountant", value: "accountant" },
                    ]}
                  />
                </div>
                <Input
                  name={"confrim_password"}
                  type="password"
                  lable="Confrim Password"
                />
              </div>
            </div>
            <div className="mt-2.5 flex flex-row justify-end">
              <button className="button">Add Staff</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffPage;
