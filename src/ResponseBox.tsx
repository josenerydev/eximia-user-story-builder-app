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
      <textarea value={response} readOnly className="response-box" />
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default ResponseBox;
