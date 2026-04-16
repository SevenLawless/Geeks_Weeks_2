function Card({ icon, title, description }) {
    return (
      <div className="bg-white p-6 rounded shadow text-center">
        <div className="text-4xl text-red-500 mb-4 flex justify-center">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  
  export default Card;