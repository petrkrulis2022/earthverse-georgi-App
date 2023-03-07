import Link from "next/link";

const ReusableButton = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="mt-6 inline-block rounded-md bg-indigo-800 text-md py-1 px-4 font-semibold text-white shadow-sm"
    >
      {text}
    </Link>
  );
};

export default ReusableButton;
