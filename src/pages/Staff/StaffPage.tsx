import Dropdown from "../../components/Dropdown";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import EditStaff from "./EditStaff";
import type { StaffPageProps } from "../../lib/types/staff";
import DeleteStaff from "./DeleteStaff";
import AddStaff from "./AddStaff";
import Searchbar from "../../components/Searchbar";
import Pagination from "../../components/Pagination";

const StaffPage = () => {
  const [showAddStaff, setShowAddStaff] = useState<boolean>(false);
  const [showEditStaff, setShowEditStaff] = useState<boolean>(false);
  const [showdeleteStaff, setShowDeleteStaff] = useState<boolean>(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffPageProps | null>(
    null,
  );

  const [selectedId, setSelectdId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<StaffPageProps[]>([]);

  const [filter, setFilter] = useState({
    role: "",
    department: "",
    status: "",
    location: "",
    shift: "",
  });
  const [nlQuery, setNlQuery] = useState<string>("");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    total: 0,
    lastPage: 1,
  });

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleNaturalQuery = async () => {
    try {
      const res = await api.post("staff/ai/parse-query", { query: nlQuery });

      if (res.data.success) {
        setFilter((prev) => ({
          ...prev,
          ...res.data.filters,
        }));
      } else {
        toast.error("Failed to parse your request.");
      }
    } catch (err) {
      toast.error("AI service unavailable.");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.post("staff/getstaff", {
        role: filter.role,
        department: filter.department,
        status: filter.status,
        location: filter.location,
        shift: filter.shift,
        page: pagination.currentPage,
        per_page: pagination.perPage,
      });

      if (response.data.status === true) {
        setData(response.data.data.data);
        setPagination((prev) => ({
          ...prev,
          total: response.data.data.total,
          lastPage: response.data.data.last_page,
          currentPage: response.data.data.current_page,
        }));
      } else if (response.data.status === false) {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter, pagination.currentPage, pagination.perPage]);

  return (
    <div>
      {/* Filter Section */}
      <div className="filter-header">
        <section className="flex flex-wrap items-center gap-4">
          {/* Select Role */}
          <Dropdown
            title=""
            label="Select Role"
            name="role"
            id="role"
            onChange={handleChange}
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
            onChange={handleChange}
            options={[
              { value: "sales", label: "Sales" },
              { value: "marketing", label: "Marketing" },
              { value: "hr", label: "Human Resources" },
              { value: "it", label: "IT" },
              { value: "finance", label: "Finance" },
            ]}
          />

          {/* Sort by Status */}
          {/* <Dropdown
            title=""
            label="Sort by Status"
            name="status"
            id="status"
            onChange={handleChange}
            options={[
              { value: "active", label: "Active" },
              { value: "on_leave", label: "On Leave" },
              { value: "terminated", label: "Terminated" },
              { value: "probation", label: "Probation" },
              { value: "contract", label: "Contract" },
            ]}
          /> */}

          {/* Select Location */}
          <Dropdown
            title=""
            label="Sort by Location"
            name="location"
            id="location"
            onChange={handleChange}
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
            onChange={handleChange}
            options={[
              { value: "morning_shift", label: "Morning (8am - 4pm)" },
              { value: "evening_shift", label: "Evening (4pm - 12am)" },
              { value: "night_shift", label: "Night (12am - 8am)" },
              { value: "flexible_shift", label: "Flexible" },
            ]}
          />
        </section>
        <section>
          <div className="flex flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <Searchbar
              name="staff_search"
              type="text"
              value={nlQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNlQuery(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleNaturalQuery();
                }
              }}
            />

            {/* Add Staff Button */}
            <button
              type="button"
              onClick={() => setShowAddStaff(true)}
              className="flex h-10 flex-row items-center justify-center gap-2 truncate rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 focus:ring-2 focus:ring-black focus:outline-none sm:text-base"
            >
              <AiOutlinePlus className="text-base" />
              <span>Add Staff</span>
            </button>
          </div>
        </section>
      </div>

      {/* Table Section */}
      <section className="table-canvas">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">
                <span className="table-header-span">#</span>
              </th>

              <th className="table-header">
                <span className="table-header-span"> Name</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Email</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Phone</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">NIC</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Address</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Gender</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Birthday</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Role</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Branch</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Action</span>
              </th>
            </tr>
          </thead>

          {loading ? (
            <tbody>
              <tr>
                <td colSpan={11} className="h-64">
                  <div className="flex items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-black border-t-transparent"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((data, index) => (
                <tr className="border-shade border-b" key={index}>
                  <td className="table-data-span">{data.id}</td>

                  <td className="table-data-span">{data.name}</td>
                  <td className="table-data-span">{data.email}</td>
                  <td className="table-data-span">{data.phone}</td>
                  <td className="table-data-span">{data.nic}</td>
                  <td className="table-data-span">{data.address}</td>
                  <td className="table-data-span">
                    {data.gender == "male" ? "Male" : "Female"}
                  </td>
                  <td className="table-data-span">{data.birthday}</td>
                  <td className="table-data-span">{data.role}</td>
                  <td className="table-data-span">{data.location}</td>
                  <td className="table-data-span">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setShowEditStaff(true);
                          setSelectedStaff({
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
                        }}
                      >
                        <VscEdit />
                      </button>
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setShowDeleteStaff(true);
                          setSelectdId(data.id);
                        }}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {data.length != 0 && (
          <div className="mt-4 flex flex-col items-center justify-center">
            {/* Pagination component */}
            <Pagination
              currentPage={pagination.currentPage}
              lastPage={pagination.lastPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>

      {showAddStaff && (
        <AddStaff setShowAddStaff={setShowAddStaff} fetchData={fetchData} />
      )}
      {selectedStaff && (
        <EditStaff
          data={selectedStaff}
          showEditStaff={showEditStaff}
          setshowEditStaff={setShowEditStaff}
          setSelectedStaff={setSelectedStaff}
          fetchData={fetchData}
        />
      )}
      {showdeleteStaff && (
        <DeleteStaff
          showdeleteStaff={showdeleteStaff}
          setShowDeleteStaff={setShowDeleteStaff}
          selectedId={selectedId}
          setSelectdId={setSelectdId}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default StaffPage;
