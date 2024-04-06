// ResponseBox.tsx
// ResponseBox.tsx
import React from "react";

interface ResponseBoxProps {
  response: string;
  copyToClipboard: () => void;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({
  response,
  copyToClipboard,
}) => {
  return (
    <div>
      <textarea className="textarea response-box" value={response} readOnly /> {/* Applying Bulma class for textarea styling */}
      <button className="button" onClick={copyToClipboard}> {/* Applying Bulma class for button styling */}
        Copy
      </button>
    </div>
  );
};

export default ResponseBox;

