function Card({ Nazwa, Cena, Specyfikacja, Image }) {
  return (
    <div className=" shadow-xl border-2 rounded-xl w-full bg-white m-2 overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="w-full h-64">
        <img
          src={Image}
          alt={Nazwa}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          {Nazwa}
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          {Specyfikacja}
        </p>
        <p className="text-xl font-bold text-gray-800 mb-4">{Cena} zł</p>
        <a
          href="/page/test"
          className="inline-block w-full text-center bg-blue-900 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Zobacz Więcej &gt;
        </a>
      </div>
    </div>
  );
}

export default Card;
