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
      <section className="relative mb-1.5 flex flex-wrap items-center gap-4 rounded-t-xl bg-white px-4 py-2">
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
          className="bg-shade text-primarytext flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 text-xl"
          onClick={() => setShowAddStaff(true)}
        >
          <AiOutlinePlus />
        </button>
      </section>

      {/* Table Section */}
      <section className="w-full rounded-b-xl bg-white p-4 shadow">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                <span className="bg-shade rounded-xl px-4 py-2">#</span>
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                <span className="bg-shade rounded-xl px-4 py-2">
                  Date & Time
                </span>
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                <span className="bg-shade rounded-xl px-4 py-2">
                  Customer Name
                </span>
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                <span className="bg-shade rounded-xl px-4 py-2">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-shade border-b">
              <td className="px-4 py-3 text-center text-sm text-gray-800">1</td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                2025-06-11 10:30 AM
              </td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                Kavindu Perera
              </td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                Active
              </td>
            </tr>
            <tr className="border-shade border-b">
              <td className="px-4 py-3 text-center text-sm text-gray-800">2</td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                2025-06-10 2:45 PM
              </td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                Nimesha Silva
              </td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                On Leave
              </td>
            </tr>
            <tr className="border-shade border-b">
              <td className="px-4 py-3 text-center text-sm text-gray-800">3</td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                2025-06-09 9:15 AM
              </td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                Janith Fernando
              </td>
              <td className="px-4 py-3 text-center text-sm text-gray-800">
                Probation
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {showAddStaff && (
        <div className="max-w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow">
          <div className="flex flex-row items-center justify-between border-b-2">
            <div>
              <h3>Title</h3>
            </div>

            <button
              className="cursor-pointer"
              onClick={() => setShowAddStaff(false)}
            >
              <IoIosClose className="text-3xl" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input name={"name"} type="text" lable="Name" />
              <Input name={"phone"} type="text" lable="Phone Number" />

              <Dropdown
                title="gender"
                element={[
                  { text: "Male", value: "male" },
                  { text: "Female", value: "female" },
                ]}
              />
              <Input name={"address"} type="text" lable="Address" />

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
              <Input name={"password"} type="password" lable="Password" />
            </div>
            <div>
              <Input name={"email"} type="email" lable="Email" />
              <Input name={"nic"} type="text" lable="NIC" />
              <Input name={"birthdate"} type="date" lable="Birthdate" />
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
              <Input
                name={"confrim_password"}
                type="password"
                lable="Confrim Password"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffPage;
