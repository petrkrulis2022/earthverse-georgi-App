const ImgCard = ({ isLarge, srcImg, altImg, title, description }) => {
  return isLarge ? (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl mb-5 font-medium">{title}</h2>
        <p className="text-lg mb-5 font-normal">{description}</p>
      </div>
      <div className="m-auto">
        <img src={srcImg} alt={altImg} />
      </div>
    </>
  ) : (
    <div className="mt-3 bg-gray-200 rounded-xl p-6">
      <img src={srcImg} alt={altImg} />
      <h6 className="text-[#2596be] text-lg font-semibold mt-4 mb-1">
        {title}
      </h6>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ImgCard;
