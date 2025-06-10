import { IoIosSearch } from "react-icons/io";

const Topselling = () => {
  return (
    <div className="w-1/3 rounded-xl bg-white shadow-lg">
      <header className="flex flex-row items-center justify-between p-5">
        <h2 className="text-primarytext text-lg sm:text-xl md:text-2xl">
          Top Selling Products
        </h2>
        <div className="bg-shade text-primarytext flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 text-xl">
          <IoIosSearch />
        </div>
      </header>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="rounded-2xl bg-white p-2 text-base font-normal">
              <span className="inline-block w-full rounded-full px-8 py-2 text-center shadow-sm">
                Image
              </span>
            </th>
            <th className="rounded-2xl bg-white p-2 text-base font-normal">
              <span className="inline-block w-full rounded-full px-8 py-2 text-center shadow-sm">
                Product Name
              </span>
            </th>
            <th className="rounded-2xl bg-white p-2 text-base font-normal">
              <span className="inline-block w-full rounded-full px-8 py-2 text-center shadow-sm">
                Selling
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-gray-200">
            <td className="py-4 text-center">
              <img
                src="https://picsum.photos/200"
                alt="Product"
                className="mx-auto h-16 w-16 rounded-xl bg-gray-200 p-2"
              />
            </td>
            <td className="py-4 text-center">
              <h4 className="text-sm font-medium text-gray-800">
                Product Name
              </h4>
              <h5 className="text-xs text-gray-500">Category</h5>
            </td>
            <td className="py-4 text-center">
              <span className="text-primarytext text-sm font-semibold">
                183
              </span>
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td className="py-4 text-center">
              <img
                src="https://picsum.photos/200"
                alt="Product"
                className="mx-auto h-16 w-16 rounded-xl bg-gray-200 p-2"
              />
            </td>
            <td className="py-4 text-center">
              <h4 className="text-sm font-medium text-gray-800">
                Product Name
              </h4>
              <h5 className="text-xs text-gray-500">Category</h5>
            </td>
            <td className="py-4 text-center">
              <span className="text-primarytext text-sm font-semibold">
                183
              </span>
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td className="py-4 text-center">
              <img
                src="https://picsum.photos/200"
                alt="Product"
                className="mx-auto h-16 w-16 rounded-xl bg-gray-200 p-2"
              />
            </td>
            <td className="py-4 text-center">
              <h4 className="text-sm font-medium text-gray-800">
                Product Name
              </h4>
              <h5 className="text-xs text-gray-500">Category</h5>
            </td>
            <td className="py-4 text-center">
              <span className="text-primarytext text-sm font-semibold">
                183
              </span>
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td className="py-4 text-center">
              <img
                src="https://picsum.photos/200"
                alt="Product"
                className="mx-auto h-16 w-16 rounded-xl bg-gray-100 p-2"
              />
            </td>
            <td className="py-4 text-center">
              <h4 className="text-sm font-medium text-gray-800">
                Product Name
              </h4>
              <h5 className="text-xs text-gray-500">Category</h5>
            </td>
            <td className="py-4 text-center">
              <span className="text-primarytext text-sm font-semibold">
                183
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Topselling;
