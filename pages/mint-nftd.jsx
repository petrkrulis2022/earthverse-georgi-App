import Image from "next/image";

const MintNftd = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center gap-4 mt-28">
        <h1 className="text-4xl font-black">Mint NFTD</h1>
        <Image
          width={100}
          height={10}
          alt="NFTD Stablecoin logo"
          src="/images/about/nftd-stablecoin-logo.png"
        />
      </div>

      <div className="use-card grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint NFTD with Virtual Land NFTs
          </h4>
          <p className="text-md mb-5">
            You can mint NFTD by selling Land NFTs within our virtual estate. To
            purchase Land NFTs, buyers use standard stablecoin, which is then
            utilized to purchase wETH on the open market. Once purchased, the
            wETH is staked with ROCKET POOL. Our smart contract then receives
            rETH, and starts sending staking rewards from the staked ETH to the
            buyer of the Land NFT. At the same time, an equal amount of NFTD is
            created and transferred to the seller`s wallet.
          </p>
        </div>
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint NFTD with Stablecoin
          </h4>
          <p className="text-md mb-5">
            You can earn ETH staking rewards by simply holding NFTD, which can
            be minted using your standard stablecoin. To mint NFTD, connect your
            wallet to our minting site, select the desired stablecoin amount,
            and press the MINT button to receive NFTD in your wallet. When you
            mint NFTD, your standard stablecoin is utilized to purchase wETH on
            the open market, which is then staked with ROCKET POOL. Our smart
            contract receives rETH and starts sending staking rewards from
            staked ETH to the user who minted the NFTD stablecoin.
          </p>
        </div>
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint NFTD with Cash
          </h4>
          <p className="text-md mb-5">
            You can easily mint NFTD using your bank card by connecting your
            wallet to our fiat onramp. To mint NFTD, choose the desired
            stablecoin amount, press the MINT button, and receive NFTD in your
            wallet. When you mint NFTD, your card is charged for the amount of
            stablecoin minted, and the cash is utilized to purchase wETH on the
            open market, which is then staked with ROCKET POOL. Our smart
            contract receives rETH and starts sending staking rewards from
            staked ETH to the user who minted the NFTD stablecoin.
          </p>
        </div>
      </div>

      <div className="mt-[80px]">
        <h1 className="text-4xl font-black mb-5">NFTD Redemption & Peg.</h1>
        <p className="text-md mb-5">
          NFTD can be minted with Virtual Land NFT purchases, stablecoins, or
          cash/bank cards. Each user minting stablecoin is entitled to staking
          rewards from staked ETH proportional to the amount of minted NFTD. Our
          protocol`s smart contract holds a liquid staking derivative of ROCKET
          POOL Protocol called rETH, directing staking rewards only to the user.
          The LSD in our smart contract can be redeemed only by the user who
          wants to burn the stablecoin, and it is only released for redemption
          purposes. NFTD is pegged to a value of 1 USD, maintained by similar
          algorithms as RAI stablecoin. The redemption price is fixed at 1 USD,
          calculated by the ratio of the market price of rETH and ETH. Market
          forces and arbitrage incentives are in place to ensure the stability
          of the peg.
        </p>
      </div>
    </div>
  );
};

export default MintNftd;
