import React, { useState } from "react";
import AddProducts from "./AddProducts";

const ProductPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="filter-header">
        <section>
          <button
            type="button"
            className="flex h-10 cursor-pointer flex-row items-center justify-center gap-2 truncate rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 focus:ring-2 focus:ring-black focus:outline-none sm:text-base"
            onClick={() => setIsAddProductOpen(true)}
          >
            Add Products
          </button>
        </section>
      </div>
      <section className="table-canvas">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">
                <span className="table-header-span">SKU</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Name</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Price</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Quantity</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Barcode</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Image</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Action</span>
              </th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tbody>
                <tr>
                  <td colSpan={7} className="h-64">
                    <div className="flex items-center justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-black border-t-transparent"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </tbody>
          ) : (
            <tbody></tbody>
          )}
        </table>
      </section>

      {isAddProductOpen && (
        <AddProducts
          setIsAddProductOpen={setIsAddProductOpen}
          setLoading={setLoading}
          loading={loading}
          // fetchData = {fetchData}
        />
      )}
    </div>
  );
};

export default ProductPage;
