import ImgCard from "../components/about/ImgCard";

const AboutNftd = () => {
  const renderCommonParagraph = (text) => {
    return <p className="text-md mb-5">{text}</p>;
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap gap-12 mt-32">
        <div className="w-full sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
          <h2 className="text-4xl mb-5 font-black">What is NFTD?</h2>

          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Follow the process of minting, selling, and transferring Land NFT
            and Stablecoin:
          </h4>

          {renderCommonParagraph(
            "1. Users can claim free land in our metaverse based on their real-world geo-location."
          )}
          {renderCommonParagraph(
            "2. The claimed land is converted into a non-fungible token (NFT) stored on IPFS and listed in our virtual estate with a price tag."
          )}
          {renderCommonParagraph(
            "3. Buyers and sellers negotiate the price of the Land NFT."
          )}
          {renderCommonParagraph(
            "4. Buyers purchase the Land NFT using USDT, USDC, or any other stablecoin issued on Ethereum."
          )}
          {renderCommonParagraph(
            "5. The payment for the Land NFT is passed on to our minting smart contract, which mints an equivalent amount of our NFTD stablecoin that can be used within our virtual world and DEFI."
          )}
          {renderCommonParagraph(
            "6. Once the payment is received, our platform swaps the stablecoin for the equivalent amount of ETH using Uniswap V3 router."
          )}
          {renderCommonParagraph(
            "7. The ETH is then sent to the staking contract of Rocket Pool."
          )}
          {renderCommonParagraph(
            "8. Buyers of the Land NFT receive ownership of the virtual land and rETH (LSD or Rocket Pool) in addition to rewards from staked ETH."
          )}
          {renderCommonParagraph(
            "9. Our smart contract deposits rETH into the APWINE protocol and receives Principal token PT on our rETH, as well as Future Yield Token FYT that represents rewards for staked ETH over time."
          )}
          {renderCommonParagraph(
            "10. FYT of rETH is wrapped as a Supertoken on the Superfluid protocol, receiving rETH-FYTx, which is streamed to the owner of the Land NFT and LSD rETH."
          )}
          {renderCommonParagraph(
            "11. When the owner of the Land NFT sells the land, the streaming rewards are redirected to the new buyer of the Land NFT and the new owner of the rETH, ensuring that each user receives a fair share of rewards from the underlying asset ETH."
          )}
        </div>
        <div className="flex flex-row justify-center rounded-3xl w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
          <img src="./images/about/diagram.png" alt="Diagram" />
        </div>
      </div>

      <div className="bg-[#eaf9ff] mt-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 sm:gap-20 md:gap-30 lg:gap-60">
        <ImgCard
          isLarge
          srcImg="./images/about/nftd-stablecoin-logo.png"
          altImg="NFTD Stablecoin"
          title="REDEMPTION + PEG MECHANISM"
          description="Redemptions and peg mechanisms are in development, but we
          would like to remove staked ETH completely from the circulation, only allowing users to use its LSDs rETH to trade, redeem,
          and use our internal mechanism to peg the value of NFTD to 1
          USD."
        />
      </div>
    </div>
  );
};

export default AboutNftd;
