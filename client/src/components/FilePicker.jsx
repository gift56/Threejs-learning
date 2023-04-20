import React from "react";
import Button from "./Button";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          text="Logo"
          handleClick={() => readFile("logo")}
          className="text-xs border border-[#EFBD48]"
        />
        <Button
          text="Full"
          handleClick={() => readFile("full")}
          className="text-xs  bg-[#EFBD48] text-white"
        />
      </div>
    </div>
  );
};

export default FilePicker;
