import { IoMdCloseCircleOutline } from "react-icons/io";

interface ImageModalProps {
  setOpenImageModel: (value: boolean) => void;
  images: File[];
}

const ImageModal = ({ setOpenImageModel, images }: ImageModalProps) => {
  const parsedImages: string[] =
    typeof images === "string" ? JSON.parse(images) : images;

  return (
    <div className="popup-backdrop">
      <div className="popup">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-5 text-4xl text-[1.3rem] font-bold">
            Product Images
          </h3>
          <IoMdCloseCircleOutline
            className="cursor-pointer text-3xl"
            onClick={() => setOpenImageModel(false)}
          />
        </div>
        <div className="mt-3.5 flex flex-row gap-2">
          {parsedImages.map((item, index) => (
            <img
              key={index}
              src={`http://localhost:8000/storage/${item}`}
              alt="product images"
              className="h-2/3 w-md rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
