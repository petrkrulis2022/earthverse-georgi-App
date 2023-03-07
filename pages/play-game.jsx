import Link from "next/link";

const PlayGame = () => {
  const renderCommonParagraph = (text) => {
    return <p className="text-md mb-5">{text}</p>;
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap gap-12 mt-32">
        <div className="bg-[#eaf9ff] flex flex-row justify-center rounded-3xl w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
          <img
            className="rounded-3xl"
            src="./images/game/logo.jpg"
            alt="Game logo"
          />
        </div>
        <div className="w-full sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
          <h2 className="text-4xl mb-5 font-black">E[AR]TH GAME</h2>

          <h3 className="text-[#597dff] text-lg mb-5 font-black">
            USER OWNERSHIP OF DIGITAL EXPERIENCES
          </h3>
          {renderCommonParagraph(
            "Our platform aims to provide a space where users can have immersive game play as well as an opportunity to access Web3, crypto, gaming, meeting with teams, and much more using the combination of Virtual Reality and Augmented Reality in hand to create first-hand immersive gameplay."
          )}
          {renderCommonParagraph(
            "The key feature is to allow developers to take advantage of the leading decentralized, permissionless architecture that enables them and users of their games and applications to take ownership of their digital experiences."
          )}
          {renderCommonParagraph(
            "This is aligned with the game concept within the wider ecosystem of E(AR)TH that seeks to build a meta-verse of 3D, VR and AR apps and games including world-building and proof of location virtual land acquisition."
          )}
        </div>
      </div>

      <div className="bg-[#eaf9ff] mt-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 sm:gap-20 md:gap-5 lg:gap-15">
        <div className="flex flex-col justify-center">
          <img src="./images/game/play-game.png" alt="Cars Game" />
        </div>
        <div className="mt-5 md:mt-0">
          <img src="./images/game/cars-game.jpg" alt="Play Game" />
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="https://gateway.ipfscdn.io/ipfs/QmYP81EGKSevaANmhfagVe7zjUDPJ8mvwyoNFRKSbQJ893/"
          className="mt-8 inline-block rounded-md bg-indigo-800 text-md py-4 px-10 font-semibold text-white shadow-sm"
        >
          Play The E[AR]TH GAME
        </Link>
      </div>
    </div>
  );
};

export default PlayGame;
