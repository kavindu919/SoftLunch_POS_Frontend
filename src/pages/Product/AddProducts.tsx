import React, { useState } from "react";
import type { ProductProps } from "../../lib/types/product";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import FileUpload from "../../components/FileUpload";

interface AddProductsProps {
  setIsAddProductOpen: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  loading: boolean;
}

const AddProducts = ({
  setIsAddProductOpen,
  setLoading,
  loading,
}: AddProductsProps) => {
  const [addProducs, setAddProducts] = useState<ProductProps>({
    name: "",
    sku: "",
    description: "",
    price: 0,
    cost: 0,
    tax_rate: 0,
    discount: 0,
    quantity: 0,
    image: [],
    is_active: true,
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [filechange, setFilechange] = useState<File[]>([]);

  const [step, setStep] = useState<number>(1);

  const prevstep = () => setStep((prev) => prev - 1);

  const formData = new FormData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setAddProducts({
      ...addProducs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const htmlDescription = draftToHtml(
        convertToRaw(editorState.getCurrentContent()),
      );

      formData.append("name", addProducs.name);
      formData.append("sku", addProducs.sku);
      formData.append("price", addProducs.price.toString());
      formData.append("cost", addProducs.cost.toString());
      formData.append("tax_rate", addProducs.tax_rate.toString());
      formData.append("discount", addProducs.discount.toString());
      formData.append("quantity", addProducs.quantity.toString());
      formData.append("is_active", addProducs.is_active ? "1" : "0");
      formData.append("description", htmlDescription);

      filechange.forEach((file) => {
        formData.append("image[]", file);
      });

      const res = await api.post("product/addproduct", formData);
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
    } finally {
      setLoading(false);
    }
  };
  console.log(addProducs);
  return (
    <div className="popup-backdrop">
      <div className="popup">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">
            Add Products
          </h3>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-3xl"
            onClick={() => setIsAddProductOpen(false)}
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
                    value={addProducs.name}
                    required
                    onChange={handleChange}
                  />

                  <Input
                    name="price"
                    type="number"
                    label="Price"
                    value={addProducs.price}
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
                    value={addProducs.tax_rate}
                    required
                    onChange={handleChange}
                  />
                  <Input
                    name="quantity"
                    type="number"
                    label="Quantity"
                    value={addProducs.quantity}
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
                    value={addProducs.sku}
                    required
                    onChange={handleChange}
                  />
                  <Input
                    name="cost"
                    type="number"
                    label="Cost"
                    value={addProducs.cost}
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
                    value={addProducs.discount}
                    required
                    onChange={handleChange}
                  />
                  <Dropdown
                    title="Active State"
                    label="Select State"
                    name="is_active"
                    id="is_active"
                    onChange={handleChange}
                    value={addProducs.is_active ? "1" : "0"}
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
              />
            )}
            {step === 2 && (
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarClassName=""
                wrapperClassName="w-full sm:w-[36rem] md:w-[40rem] lg:w-[44rem] border border-solid border-gray-300 rounded-lg bg-shade focus-within:border-primarytext"
                editorClassName="min-h-[150px] px-3 py-2 text-sm md:text-base focus:outline-none"
                placeholder="Enter product description..."
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
  );
};

export default AddProducts;
