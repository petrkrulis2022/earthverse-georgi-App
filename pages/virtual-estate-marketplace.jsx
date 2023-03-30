import {
  EARTHVERSE_DEPOSIT_ADDRESS,
  EARTHVERSE_MARKETPLACE_ADDRESS,
  NFT_LAND_ADDRESS,
} from "../constants/index";
import { useCallback, useEffect, useState } from "react";

import ERC20Json from "../contractsData/ERC20ABI.json";
import EarthverseDepositJson from "../contractsData/EarthverseDepositABI.json";
import EarthverseMarketplaceJson from "../contractsData/EarthverseMarketplaceABI.json";
import Loading from "../components/Loading";
import NFTLandJson from "../contractsData/NFTLandABI.json";
import VirtualEstateMarketplaceCard from "../components/VirtualEstateMarketplaceCard";
import { ethers } from "ethers";
import { useSigner } from "wagmi";

const VirtualEstateMarketplace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: signer } = useSigner();
  const [nftLandItems, setNftLandItems] = useState([]);
  const [selectedStablecoin, setSelectedStablecoin] = useState("");

  const handleStablecoinChange = (event) => {
    setSelectedStablecoin(event.target.value);
  };

  const loadMarketplaceItems = useCallback(async () => {
    const earthverseMarketplace = new ethers.Contract(
      EARTHVERSE_MARKETPLACE_ADDRESS,
      EarthverseMarketplaceJson.abi,
      signer
    );

    const nftLand = new ethers.Contract(
      NFT_LAND_ADDRESS,
      NFTLandJson.abi,
      signer
    );

    const itemCount = await earthverseMarketplace.itemCount();
    let nftLandItemsClone = [];

    for (let i = 1; i <= itemCount; i++) {
      const nftLandItem = await earthverseMarketplace.listing(i);

      const uri = await nftLand.tokenURI(nftLandItem.tokenId);
      const response = await fetch(uri);
      const metadata = await response.json();

      nftLandItemsClone.push({
        id: nftLandItem.id,
        price: nftLandItem.price,
        seller: nftLandItem.seller,
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
      });
    }

    setIsLoading(false);
    setNftLandItems(nftLandItemsClone.reverse());
  }, [signer]);

  const handleBuyNftLandClick = async (nftLandItem) => {
    const selectedStablecoinContract = new ethers.Contract(
      selectedStablecoin,
      ERC20Json.abi,
      signer
    );
    const decimals = Number(await selectedStablecoinContract.decimals());

    await (
      await selectedStablecoinContract.approve(
        EARTHVERSE_DEPOSIT_ADDRESS,
        ethers.utils.parseUnits(nftLandItem.price.toString(), decimals)
      )
    ).wait();

    const earthverseDepositContract = new ethers.Contract(
      EARTHVERSE_DEPOSIT_ADDRESS,
      EarthverseDepositJson.abi,
      signer
    );

    await (
      await earthverseDepositContract.depositRPAndSendNFTLand(
        selectedStablecoin,
        ethers.utils.parseUnits(nftLandItem.price.toString(), decimals),
        nftLandItem.id,
        decimals
      )
    ).wait();

    loadMarketplaceItems();
  };

  useEffect(() => {
    if (!signer) return;

    loadMarketplaceItems();
  }, [loadMarketplaceItems, signer]);

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-8 mt-24">
      <h1 className="text-4xl font-black mt-28">Virtual Estate Marketplace</h1>
      <div className="bg-gray-200 mt-8">
        <img src="./images/virtual-estate.jpeg" alt="Virtual Estate" />
      </div>

      <div className="mt-8">
        <form className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Search:
            </label>
            <input
              className="text-sm shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Coordinates, NFT ID, Country, etc."
            />
          </div>

          <fieldset>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Sort By:
            </label>
            <div className="relative text-gray-800 bg-white">
              <select
                className="text-sm shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="whatever"
                id="frm-whatever"
              >
                <option value="">Please choose&hellip;</option>
                <option value="1">Item 1</option>
                <option value="2">Item 2</option>
                <option value="3">Item 3</option>
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Filter By Country:
            </label>
            <div className="relative text-gray-800 bg-white">
              <select
                className="text-sm shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="whatever"
                id="frm-whatever"
              >
                <option value="">Please choose&hellip;</option>
                <option value="1">Item 1</option>
                <option value="2">Item 2</option>
                <option value="3">Item 3</option>
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </fieldset>
        </form>
        {nftLandItems?.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 ">
            {nftLandItems.map((item, idx) => (
              <VirtualEstateMarketplaceCard
                key={idx}
                name={item.name}
                srcImg={item.image}
                description={item.description}
                price={item.price}
                seller={item.seller}
                selectedStablecoin={selectedStablecoin}
                handleStablecoinChange={handleStablecoinChange}
                handleBuyNftLandClick={() => handleBuyNftLandClick(item)}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2>No listed assets</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualEstateMarketplace;
