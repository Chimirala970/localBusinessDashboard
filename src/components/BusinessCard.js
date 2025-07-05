const BusinessCard = ({ data, onRegenerate }) => {
  if (!data) return null;

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-green-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-green-800 mb-2">
        {data.name} – {data.location}
      </h2>
      <p className="text-gray-700 mb-1">⭐ Rating: {data.rating}</p>
      <p className="text-gray-700 mb-3">📝 Reviews: {data.reviews}</p>
      <p className="italic text-gray-600 mb-4">"{data.headline}"</p>
      <button
        onClick={onRegenerate}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;

// function BusinessCard({ data, onRegenerate }) {
//   if (!data) return null;

//   return (
//     <div className="max-w-xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6 space-y-4 text-center">
//       <h2 className="text-2xl font-bold text-blue-700">{data.name}</h2>
//       <p className="text-gray-600 italic">{data.location}</p>
//       <div className="flex justify-center gap-6 text-lg font-semibold text-slate-700">
//         <span>⭐ {data.rating}</span>
//         <span>📝 {data.reviews} Reviews</span>
//       </div>
//       <div className="bg-gray-100 p-4 rounded-md text-gray-800 font-medium">
//         “{data.headline}”
//       </div>
//       <button
//         onClick={onRegenerate}
//         className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
//       >
//         🔄 Regenerate SEO Headline
//       </button>
//     </div>
//   );
// }

// export default BusinessCard;

