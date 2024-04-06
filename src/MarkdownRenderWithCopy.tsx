import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy, IoIosCheckmarkCircleOutline } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MarkdownRenderWithCopy = ({ markdownText }: { markdownText: string }) => {
  const [copied, setCopied] = useState(false);

  const notify = () => {
    toast("Copied to clipboard!");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="markdown-container">
      <div className="copy-button-container">
        <CopyToClipboard text={markdownText} onCopy={notify}>
          <button className="button">
            {copied ? (
              <IoIosCheckmarkCircleOutline className="icon-check" />
            ) : (
              <IoIosCopy className="icon-copy" />
            )}
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        language="markdown"
        style={vs2015}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
        showInlineLineNumbers={false}
        wordWrap="break-word"
      >
        {markdownText}
      </SyntaxHighlighter>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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
