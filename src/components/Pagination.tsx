import React from "react";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(lastPage, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-md px-3 py-1 ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-200"
            : "bg-shade hover:bg-gray-200"
        }`}
      >
        Previous
      </button>

      {/* First Page */}
      {currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`rounded-md px-3 py-1 ${
              currentPage === 1
                ? "bg-black text-white"
                : "bg-shade hover:bg-gray-200"
            }`}
          >
            1
          </button>
          {currentPage > 4 && <span className="px-2">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-md px-3 py-1 ${
            currentPage === page
              ? "bg-black text-white"
              : "bg-shade hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < lastPage - 2 && (
        <>
          {currentPage < lastPage - 3 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(lastPage)}
            className={`rounded-md px-3 py-1 ${
              currentPage === lastPage
                ? "bg-black text-white"
                : "bg-shade hover:bg-gray-200"
            }`}
          >
            {lastPage}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
        className={`rounded-md px-3 py-1 ${
          currentPage === lastPage
            ? "cursor-not-allowed bg-gray-200"
            : "bg-shade hover:bg-gray-200"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
