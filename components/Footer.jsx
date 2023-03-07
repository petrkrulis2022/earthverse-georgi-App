import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="flex flex-row flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap py-4 justify-between items-center shadow-inner pl-8 md:px-[90px]">
        <div className="flex flex-row justify-center items-center">
          <Link href="/">
            <Image
              className="inline-block"
              src="/images/logo.png"
              alt="E(AR)TH - NFT EARTH ON ETHEREUM"
              width={70}
              height={10}
            />
          </Link>

          <span className="ml-16 text-xs font-normal">
            E[AR]TH 2023 - ALL rights reserved
          </span>
        </div>
        <ul className="flex flex-row flex-wrap list-none md:space-x-14 md:gap-x-0 gap-y-1 gap-x-10">
          <li className="pt-4 md:pt-0 cursor-pointer text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="pt-4 md:pt-0 cursor-pointer text-sm">
            <Link href="/about-earthverse">About E(AR)TH</Link>
          </li>
          <li className="pt-4 md:pt-0 cursor-pointer text-sm">
            <Link href="/about-nftd">About NFTD</Link>
          </li>
          <li className="pt-4 md:pt-0 cursor-pointer text-sm">
            <Link href="/our-team">Our Team</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
