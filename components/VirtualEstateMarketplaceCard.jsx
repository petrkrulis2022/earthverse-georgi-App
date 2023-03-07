import { DAI_ADDRESS, USDC_ADDRESS } from "../constants/index";

import { FaAngleDown } from "react-icons/fa";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

const VirtualEstateMarketplaceCard = ({
  name,
  srcImg,
  description,
  price,
  seller,
  selectedStablecoin,
  handleStablecoinChange,
  handleBuyNftLandClick,
}) => {
  const { address } = useAccount();

  return (
    <div className="bg-white shadow-lg inline overflow-hidden rounded-2xl">
      <img className="w-full" src={srcImg} alt={name} />

      <div className="w-full pt-2 pb-6 px-4">
        <div className="font-semibold text-md">
          <span>{name}</span>
          <span className="float-right">
            {(ethers.utils.formatEther(price) * 10 ** 18).toFixed(0)} NFTD
          </span>
          <p className="text-sm font-semibold text-gray-300">{description}</p>
        </div>
        <div className="flex flex-row justify-between mt-4">
          {address === seller ? (
            <div className="font-semibold text-md m-auto">
              <h1>Owner</h1>
            </div>
          ) : (
            <>
              <div className="relative text-gray-800 bg-white mr-7">
                <select
                  id="stablecoin"
                  value={selectedStablecoin}
                  className="border-blue-700 text-sm shadow appearance-none rounded-lg border w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleStablecoinChange}
                >
                  <option value="">Stablecoin</option>
                  <option value={USDC_ADDRESS}>USDC</option>
                  <option value={DAI_ADDRESS}>DAI</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                  <FaAngleDown />
                </div>
              </div>
              <button className="border border-blue-700 bg-white w-24 text-blue-700 rounded-lg font-medium mr-2">
                View
              </button>
              <button
                className="bg-blue-700 text-white w-24 rounded-lg font-medium"
                onClick={handleBuyNftLandClick}
                disabled={selectedStablecoin === "" ? true : false}
              >
                Buy
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualEstateMarketplaceCard;
