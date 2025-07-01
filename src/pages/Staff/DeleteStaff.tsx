import { IoMdCloseCircleOutline } from "react-icons/io";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { useState } from "react";
interface DeleteStaffProps {
  showdeleteStaff: boolean;
  selectedId: string | null;
  setShowDeleteStaff: (value: boolean) => void;
  setSelectdId: (value: string | null) => void;
  fetchData: () => void;
}

const DeleteStaff = ({
  showdeleteStaff,
  setShowDeleteStaff,
  selectedId,
  setSelectdId,
  fetchData,
}: DeleteStaffProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("staff/deletestaff", {
        id: selectedId,
      });
      if (response.data.status == true) {
        toast.success(response.data.message);
      } else if (response.data.status == false) {
        toast.error(response.data.message);
      }
      fetchData();
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setSelectdId(null);
      setShowDeleteStaff(false);
      setLoading(false);
    }
  };

  return (
    showdeleteStaff && (
      <div>
        <div className="popup-backdrop">
          <div className="popup">
            <div className="flex flex-row items-center justify-between">
              <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">
                Delete Staff
              </h3>
              <IoMdCloseCircleOutline
                className="cursor-pointer text-3xl"
                onClick={() => {
                  setShowDeleteStaff(false);
                  setSelectdId(null);
                }}
              />
            </div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <h3 className="mt-3.5 text-base">
                Are you sure? This action will permanently delete the record.
              </h3>
              <div className="flex flex-row items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectdId(null);
                    setShowDeleteStaff(false);
                  }}
                  className="flex h-10 w-auto cursor-pointer flex-row items-center justify-center gap-2 truncate rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-black focus:ring-2 sm:text-base"
                >
                  Cancel
                </button>
                <button type="submit" className="button" disabled={loading}>
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
                    <span>Delete</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteStaff;
