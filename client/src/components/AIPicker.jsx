import React from "react";
import Button from "./Button";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea resize-none"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Button
            text="Asking AI..."
            className="text-xs  border border-[#EFBD48]"
          />
        ) : (
          <>
            <Button
              text="AI Logo"
              handleClick={() => handleSubmit("logo")}
              className="text-xs  border border-[#EFBD48]"
            />

            <Button
              text="AI Full"
              handleClick={() => handleSubmit("full")}
              className="text-xs  bg-[#EFBD48] text-white"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
