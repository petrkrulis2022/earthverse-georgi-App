import Image from "next/image";

const MintNftd = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center gap-4 mt-28">
        <h1 className="text-4xl font-black">Mint NFTD</h1>
        <Image
          width={100}
          height={10}
          alt="BNFT Stablecoin logo"
          src="/images/about/nftd-stablecoin-logo.png"
        />
      </div>

      <div className="use-card grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint NFTD with Virtual Land NFTs
          </h4>
          <p className="text-md mb-5">
            Mint NFTD by selling Land NFTs in our virtual estate. Buyers
            purchase Land NFTs using standard stablecoin, which is then used to
            buy WETH on the open market. The WETH is staked, and the buyer
            receives staking rewards from staked WETH. An equivalent amount of
            NFTD is minted and sent to the seller`s wallet.
          </p>
        </div>
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint NFTD with Stablecoin
          </h4>
          <p className="text-md mb-5">
            Mint NFTD with your standard stablecoin and start earning RETH
            staking rewards simply by holding NFTD. Connect your wallet to our
            minting site, select the desired stablecoin amount, and press the
            MINT button to receive NFTD in your wallet. By minting NFTD, your
            stablecoin is used to purchase WETH on the open market, which is
            then staked, and the user receives staking rewards from staked WETH.
          </p>
        </div>
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint NFTD with Cash
          </h4>
          <p className="text-md mb-5">
            Connect your wallet to our fiat on-ramp and mint NFTD with your bank
            card. Choose the desired stablecoin amount, press the MINT button,
            and receive NFTD in your wallet. By minting NFTD, your card is
            charged for the amount of stablecoin minted, and the cash is used to
            buy WETH on the open market. The WETH is staked, and the user
            receives staking rewards from staked WETH.
          </p>
        </div>
      </div>

      <div className="mt-[80px]">
        <h1 className="text-4xl font-black mb-5">NFTD Redemption & Peg.</h1>
        <p className="text-md mb-5">
          NFTD can be minted with Virtual Land NFT purchases, stablecoins, or
          cash/bank cards. Each user minting stablecoin is entitled to staking
          rewards from staked WETH proportional to the amount of minted NFTD.
          The protocol`s smart contract holds a liquid staking derivative called
          RETH, which directs staking rewards only to the user. The LSD in our
          smart contract can be redeemed only by the user who wants to burn the
          stablecoin, and it is only released for redemption purposes. NFTD is
          pegged to a value of 1 USD, maintained by similar algorithms as RAI
          stablecoin. The redemption price is fixed at 1 USD, calculated by the
          ratio of the market price of RETH and WETH. Market forces and
          arbitrage incentives are in place to ensure the stability of the peg.
        </p>
      </div>
    </div>
  );
};

export default MintNftd;
