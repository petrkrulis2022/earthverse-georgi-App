import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const TeamCard = ({
  fullName,
  role,
  srcImg,
  altImg,
  linkedinLink = "https://www.linkedin.com/feed/",
  twitterLink = "https://twitter.com/",
}) => {
  return (
    <div className="use-card mt-3 bg-white p-6 flex flex-col justify-center items-center align-middle">
      <Image
        className="h-20 w-20 rounded-full"
        src={srcImg}
        alt={altImg}
        width={80}
        height={80}
      />
      <h6 className="text-xl font-semibold my-2 text-center">{fullName}</h6>
      <p className="text-center">{role}</p>
      <div className="flex gap-3 my-4">
        <Link href={linkedinLink}>
          <FaLinkedinIn />
        </Link>
        <Link href={twitterLink}>
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
