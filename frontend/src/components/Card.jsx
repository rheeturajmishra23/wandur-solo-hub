
const Card = ({ image, title, text }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden m-5">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Card;
