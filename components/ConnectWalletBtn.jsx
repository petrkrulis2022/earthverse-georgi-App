import { IoCaretForwardSharp } from "react-icons/io5";

const ConnectWalletBtn = ({ name, svg, ...props }) => {
  return (
    <button
      className="flex flex-row justify-between gap-10 items-center border-2 border-gray-200 rounded-lg p-4 bg-white shadow-md"
      {...props}
    >
      {svg}
      <h5 className="font-semibold text-blue-500">{name}</h5>
      <IoCaretForwardSharp className="text-blue-500" />
    </button>
  );
};

export default ConnectWalletBtn;
