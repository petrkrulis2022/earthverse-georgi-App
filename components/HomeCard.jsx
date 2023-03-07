import ReusableButton from "./ReusableButton";

const HomeCard = ({ srcImg, altImg, title, description, href, textBtn }) => {
  return (
    <div className="card text-center flex flex-col items-center w-80">
      <div className="h-44 w-44 rounded-full bg-blue-300 flex flex-row items-center justify-center p-4 transition duration-200 hover:scale-110">
        <img className="object-cover" src={srcImg} alt={altImg} />
      </div>
      <h6 className="text-2xl mt-5 mb-8 font-medium">{title}</h6>
      {description}
      <ReusableButton href={href} text={textBtn} />
    </div>
  );
};

export default HomeCard;
