import { useEffect, useState } from "react";
import AddProducts from "./AddProducts";
import api from "../../utils/api";
import type { ProductProps } from "../../lib/types/product";
import ImageModal from "./ImageModal";
import EditProduct from "./EditProduct";
import { VscEdit } from "react-icons/vsc";

const ProductPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [openImageModel, setOpenImageModel] = useState<boolean>(false);
  const [openEditeModel, setOpenEditModel] = useState<boolean>(false);
  const [selectId, setSelectedId] = useState<string | null>(null);
  const [imaages, setImages] = useState<File[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null,
  );

  const filterProduct = (selectId: string) => {
    const item = products.find((item) => item.id === selectId);
    if (item) {
      setSelectedProduct(item);
    }
  };

  const fetchData = async () => {
    try {
      const res = await api.get("product/getproducts");
      if (res.data.status == true) {
        setProducts(res.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                <span className="table-header-span">Tax Rate</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Discount</span>
              </th>
              <th className="table-header">
                <span className="table-header-span">Quantity</span>
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
                  <td colSpan={9} className="h-64">
                    <div className="flex items-center justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-black border-t-transparent"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </tbody>
          ) : (
            <tbody>
              {products?.map((item, index) => (
                <tr className="border-shade border-b" key={index}>
                  <td className="table-data-span">{item.sku}</td>
                  <td className="table-data-span">{item.name}</td>
                  <td className="table-data-span">{item.price}</td>
                  <td className="table-data-span">{item.quantity}</td>
                  <td className="table-data-span">{item.tax_rate} %</td>
                  <td className="table-data-span">{item.discount}</td>
                  <td className="table-data-span">{item.quantity}</td>
                  <td className="table-data-span">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        setOpenImageModel(true);
                        setImages(item.image);
                      }}
                    >
                      View
                    </button>
                  </td>
                  <td className="table-data-span">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          if (item.id) {
                            setOpenEditModel(true);
                            filterProduct(item.id);
                          }
                        }}
                      >
                        <VscEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>

      {isAddProductOpen && (
        <AddProducts
          setIsAddProductOpen={setIsAddProductOpen}
          setLoading={setLoading}
          loading={loading}
          fetchData={fetchData}
        />
      )}

      {openImageModel && (
        <ImageModal setOpenImageModel={setOpenImageModel} images={imaages} />
      )}
      {openEditeModel && selectedProduct && (
        <EditProduct
          loading={loading}
          setOpenEditModel={setOpenEditModel}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductPage;
