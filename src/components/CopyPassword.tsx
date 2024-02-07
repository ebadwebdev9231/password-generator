import { useState } from "react";

interface Props {
  password: string;
}
const CopyPassword = ({ password }: Props) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <button onClick={handleCopy} className="bg-orange-400 px-3 py-2">
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

export default CopyPassword;
