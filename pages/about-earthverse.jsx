import ImgCard from "../components/about/ImgCard";

const AboutEarthverse = () => {
  const renderCommonParagraph = (text) => {
    return <p className="text-md mb-5">{text}</p>;
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap gap-12 mt-32">
        <div className="bg-[#eaf9ff] flex flex-row justify-center rounded-3xl w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
          <img
            className="w-80 h-80"
            src="./images/about/wireframe-globe.png"
            alt="wireframe globe"
          />
        </div>
        <div className="w-full sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
          <h2 className="text-4xl mb-5 font-black">What is E[AR]th?</h2>
          {renderCommonParagraph(
            "E[AR]th is an NFT Earth on Blockchain, a decentralized infrastructure that gives users the ability to create, build, play, and trade in their own metaverse."
          )}
          {renderCommonParagraph(
            "Powered by an interest bearing stablecoin and backed by virtual world assets, E[AR]th is an open-source canvas for users and developers alike."
          )}
        </div>
      </div>
      <div className="mt-10">
        <h5 className="text-3xl font-semibold mb-4">
          Why should I use E[AR]th?
        </h5>
        <div className="use-card grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
          <ImgCard
            srcImg="./images/about/open-source.png"
            altImg="Open Source"
            title="Open Source"
            description="Powered by EVM compatible blockchains, users and developers are
              encouraged to create, build, and improve upon E[AR]TH."
          />
          <ImgCard
            srcImg="./images/about/permissionless.png"
            altImg="Permissionless"
            title="Permissionless"
            description="With a decentralized platform, users don’t have to seek permission
            to carry out actions in E[AR]TH."
          />
          <ImgCard
            srcImg="./images/about/decentralized.png"
            altImg="Decentralized"
            title="Decentralized"
            description="The blockchain minimizes the need of trust to the centralized
            authorities, and this metaverse proposes to be the same at it's
            core."
          />

          <ImgCard
            srcImg="./images/about/immutable.png"
            altImg="Immutable"
            title="Immutable"
            description="The E[AR]th metaverse poses as a fair world, run by the code and
            not by humans subject to biases."
          />
          <ImgCard
            srcImg="./images/about/censorship-resistances.png"
            altImg="Censorship Resistances"
            title="Censorship Resistances"
            description="DAO-run means not depending on personal wealth to be in charge of
            decisions about the function of the metaverse and its course."
          />
          <ImgCard
            srcImg="./images/about/freedom.png"
            altImg="Freedom"
            title="Freedom"
            description="Open to developers and users, cross chain, to freely create their
            own games, NFTs, and world by developing on owned land."
          />
        </div>
      </div>

      <div className="bg-[#eaf9ff] mt-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 sm:gap-20 md:gap-30 lg:gap-60">
        <ImgCard
          isLarge
          srcImg="./images/about/mobile-proof-of-location.png"
          altImg="Proof of Location"
          title="Proof of Location"
          description="Unlike other virtual worlds, E[AR]th prevents users from simply
          purchasing unclaimed land. Acquiring free land is done strictly via
          user’s proof of location, meaning to acquire land, users have to be
          physically present at that location in the real world."
        />
      </div>

      <div className="bg-[#d8e9f0] grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 sm:gap-20 md:gap-30 lg:gap-60">
        <ImgCard
          isLarge
          srcImg="./images/about/mobile-move-to-acquire.png"
          altImg="Move to Acquire"
          title="Move to Acquire"
          description="Initial ownership of the land would be based on user-generated
          content only. This allows anyone to own virtual world assets
          regardless of their financial status, giving users a fair
          opportunity to own part of the virtual world. Users can then freely
          trade with other users and build upon this land, creating meaningful
          bonds between users."
        />
      </div>

      <div className="bg-[#eaf9ff] grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 xs:gap-20 sm:gap-20 md:gap-30 lg:gap-60">
        <ImgCard
          isLarge
          srcImg="./images/about/mobile-build-to-earn.png"
          altImg="Build to Earn"
          title="Build to Earn"
          description="Giving users a fair opportunity to own a piece of virtual land
        allows initial land ownership to be based not on the financial power
        of the user, but on the input each user is willing to invest. This
        allows for increased user accessibility and for decentralization to
        be the main aspect of the virtual world."
        />
      </div>
    </div>
  );
};

export default AboutEarthverse;
