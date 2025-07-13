import { IoMdCloseCircleOutline } from "react-icons/io";
import type { ProductProps } from "../../lib/types/product";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import React, { useState } from "react";
import api from "../../utils/api";
import toast from "react-hot-toast";
import FileUpload from "../../components/FileUpload";
import Textarea from "../../components/Textarea";

interface EditProductProps {
  selectedProduct: ProductProps;
  loading: boolean;
  setOpenEditModel: (value: boolean) => void;
}

const EditProduct = ({
  selectedProduct,
  loading,
  setOpenEditModel,
}: EditProductProps) => {
  const [step, setStep] = useState<number>(1);
  const [editProducts, setEditProducts] = useState<ProductProps>({
    ...selectedProduct,
  });
  const [filechange, setFilechange] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setEditProducts({
      ...editProducts,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editProducts.name);
      formData.append("sku", editProducts.sku);
      formData.append("description", editProducts.description);
      formData.append("price", editProducts.price.toString());
      formData.append("cost", editProducts.cost.toString());
      formData.append("tax_rate", editProducts.tax_rate.toString());
      formData.append("discount", editProducts.discount.toString());
      formData.append("quantity", editProducts.quantity.toString());
      formData.append("is_active", editProducts.is_active ? "1" : "0");
      filechange.forEach((file, index) => {
        formData.append(`image[${index}]`, file);
      });
      const res = await api.post("/product/editproduct", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.status == true) {
        toast.success(res.data.message);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        const validationErrors = error.response.data.errors;
        Object.keys(validationErrors).forEach((field) => {
          toast.error(validationErrors[field][0]);
        });
      } else {
        toast.error("Something went wrong, please try again!");
      }
    }
  };

  return (
    <div className="popup-backdrop">
      <div className="popup">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">
              Edit Products
            </h3>
            <IoMdCloseCircleOutline
              className="cursor-pointer text-3xl"
              onClick={() => {
                setOpenEditModel(false);
              }}
            />
          </div>
          <div className="mb-5 flex w-fit items-center gap-4">
            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-lg font-medium text-white"
              onClick={() => setStep(1)}
            >
              <span>1</span>
            </button>
            <hr className="w-10 border-t-4 border-dotted border-black" />
            <button
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-lg font-medium text-white"
              onClick={() => setStep(2)}
            >
              <span>2</span>
            </button>
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <section className="flex flex-row gap-5">
              <div className="relative flex flex-col gap-1.5">
                {step === 1 && (
                  <div>
                    <Input
                      name="name"
                      type="text"
                      label="Name"
                      value={editProducts.name}
                      required
                      onChange={handleChange}
                    />

                    <Input
                      name="price"
                      type="number"
                      label="Price"
                      value={editProducts.price}
                      required
                      onChange={handleChange}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <Input
                      name="tax_rate"
                      type="number"
                      label="Tax Rate"
                      value={editProducts.tax_rate}
                      required
                      onChange={handleChange}
                    />
                    <Input
                      name="quantity"
                      type="number"
                      label="Quantity"
                      value={editProducts.quantity}
                      required
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>
              <div className="relative flex flex-col gap-1.5">
                {step === 1 && (
                  <div>
                    <Input
                      name="sku"
                      type="text"
                      label="SKU"
                      value={editProducts.sku}
                      required
                      onChange={handleChange}
                    />
                    <Input
                      name="cost"
                      type="number"
                      label="Cost"
                      value={editProducts.cost}
                      required
                      onChange={handleChange}
                    />
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <Input
                      name="discount"
                      type="number"
                      label="Discount"
                      value={editProducts.discount}
                      required
                      onChange={handleChange}
                    />
                    <Dropdown
                      title="Active State"
                      label="Select State"
                      name="is_active"
                      id="is_active"
                      onChange={handleChange}
                      value={editProducts.is_active ? "1" : "0"}
                      options={[
                        { value: "1", label: "True" },
                        { value: "0", label: "False" },
                      ]}
                    />
                  </div>
                )}
              </div>
            </section>
            <section className="flex w-full flex-col gap-2.5">
              {step === 1 && (
                <FileUpload
                  setFilechange={setFilechange}
                  filechange={filechange}
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                />
              )}
              {step === 2 && (
                <Textarea
                  name="description"
                  label="Description"
                  value={editProducts.description}
                  onChange={handleChange}
                />
              )}
            </section>
            <section>
              {step === 1 && (
                <button
                  type="button"
                  className={`bg-primarytext h-12 w-full rounded-xl border-none text-sm font-bold text-white outline-none ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                  onClick={() => setStep((prev) => prev + 1)}
                >
                  Next
                </button>
              )}
              {step === 2 && (
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
                    <span>Submit</span>
                  )}
                </button>
              )}
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
