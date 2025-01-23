const TitleSection = ({ title, description }) => {
  return (
    <div className="my-5 text-center">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto">{description}</p>
    </div>
  );
};

export default TitleSection;
