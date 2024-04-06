import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MarkdownRenderWithCopy = ({ markdownText }: { markdownText: string }) => {
  const [copied, setCopied] = useState(false);

  const notify = () => {
    toast("Copied to clipboard!");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className="markdown-render-container">
      <div className="markdown-content">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
      <CopyToClipboard text={markdownText} onCopy={notify}>
        <button className="copy-button">
          {copied ? (
            <IoIosCheckmarkCircleOutline className="icon-check" />
          ) : (
            <IoIosCopy className="icon-copy" />
          )}
        </button>
      </CopyToClipboard>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MarkdownRenderWithCopy;
