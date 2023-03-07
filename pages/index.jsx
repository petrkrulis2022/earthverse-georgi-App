import "leaflet/dist/leaflet.css";

import HomeCard from "../components/HomeCard";
import React from "react";

export default function Home() {
  const renderCommonParagraph = (text) => {
    return <p className="text-lg mb-5">{text}</p>;
  };

  return (
    <>
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-top mt-16 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(./images/home/banner.png)" }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-black text-center">
          A New World Awaits
        </h1>
        <p className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center mt-3 leading-snug font-medium">
          Create . Build . Play in your own <br />
          metaverse
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row flex-wrap justify-center gap-20 mt-16">
          <HomeCard
            srcImg="./images/home/proof-of-location.png"
            altImg="Proof of Location"
            title="Proof of Location"
            description="Proof of location in the real world allows you to acquire virtual
            world assets, which can be explored and built upon in the E[AR]TH
            game."
            href="/play-game"
            textBtn="Play E[AR]TH"
          />

          <HomeCard
            srcImg="./images/home/move-to-acquire.png"
            altImg="Move to Acquire"
            title="Move to Acquire"
            description="Initial land ownership is based on the input users are willing to
            invest, physically by exploring locations in the real world to
            acquire assets and digitally."
            href="/claim-free-land"
            textBtn="Claim Free Land"
          />

          <HomeCard
            srcImg="./images/home/build-to-earn.png"
            altImg="Build to Earn"
            title="Build to Earn"
            description="The decentralized platform gives users increased accessibility of
            fair opportunities to earn, build, trade, and play with virtual
            world assets."
            href="/create-vr-model"
            textBtn="Create AR/VR World"
          />
        </div>

        <div className="bg-[#eaf9ff] grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 sm:gap-20 md:gap-30 lg:gap-60 mt-16">
          <div className="my-auto">
            <h2 className="text-3xl mb-5 font-medium">Discover E[AR]th</h2>
            {renderCommonParagraph(
              "E[AR]th, a virtual world that is a replica of our Planet Earth, is a world-building VR and AR platform based on democratization and powered by EVM compatible blockchains."
            )}
            {renderCommonParagraph(
              " With the ability to create both user-generated and business-generated content, E[AR]th caters to different user needs all while providing reliability enabled by the use of a yield bearing stablecoin backed by virtual world assets and staked ETH."
            )}
          </div>
          <div className="mx-auto">
            <img
              src="./images/home/dicover-earth.png"
              alt="Dicover Earth"
              width="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
