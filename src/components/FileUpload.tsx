import React, { useRef, useState } from "react";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";

interface FileUplodProps {
  setFilechange: (files: File[]) => void;
  filechange: File[];
}

const FileUpload = ({ setFilechange, filechange }: FileUplodProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSetFile, setIsSetFile] = useState<boolean>(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files) {
      setIsSetFile(true);
      setFilechange(Array.from(files));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length != 0) {
      setIsSetFile(true);
      setFilechange(Array.from(files));
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatefile = filechange.filter((_, i) => i != index);
    setFilechange(updatefile);
    setIsSetFile(updatefile.length > 0);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <label className="text-sm md:text-base">Upload Image</label>
      </div>
      <div
        className={`flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-lg border-2 p-6 transition ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-dotted border-gray-300"
        }`}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <IoFileTrayFullOutline className="h-12 w-12 text-gray-500" />
        {isSetFile ? (
          <div>
            <ul>
              {filechange.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center justify-between gap-2.5"
                >
                  <span>{item.name}</span>
                  <RiCloseCircleLine
                    className="h-4 w-4 cursor-pointer hover:text-red-600"
                    onClick={() => handleRemoveFile(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2.5">
            <h3 className="text-lg">Drag & Drop files here or</h3>
            <button
              type="button"
              className="cursor-pointer rounded bg-black px-4 py-2 text-white"
            >
              Browse Files
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
