// import './index.css';
// import { useState } from "react";
// import BusinessForm from "./components/BusinessForm";
// import BusinessCard from "./components/BusinessCard";

// function App() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchBusinessData = async ({ name, location }) => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:4000/business-data", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, location }),
//       });
//       const result = await response.json();
//       setData({ ...result, name, location });
//     } catch (err) {
//       alert("Failed to fetch business data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const regenerateHeadline = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:4000/regenerate-headline?name=${data.name}&location=${data.location}`
//       );
//       const result = await response.json();
//       setData((prev) => ({ ...prev, headline: result.headline }));
//     } catch (err) {
//       alert("Failed to regenerate headline.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//         Mini Business Dashboard
//       </h1>

//       <BusinessForm onSubmit={fetchBusinessData} />

//       {loading && (
//         <div className="flex justify-center items-center my-4">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
//           <span className="ml-2 text-blue-500">Loading...</span>
//         </div>
//       )}

//       <BusinessCard data={data} onRegenerate={regenerateHeadline} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://backendproject-5-2osz.onrender.com/"

  const fetchBusinessData = async ({ name, location }) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location }),
      });
      const result = await res.json();
      setData({ ...result, name, location });
    } catch (err) {
      alert("Failed to fetch business data.");
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    try {
      // const res = await fetch(`${BACKEND_URL}/regenerate-headline?name=${name}&location=${location}`);
      const res = await fetch(`${BACKEND_URL}/regenerate-headline?name=${data.name}&location=${data.location}`);

      const result = await res.json();
      setData((prev) => ({ ...prev, headline: result.headline }));
    } catch (err) {
      alert("Failed to regenerate headline.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8 drop-shadow-md">🌟 Mini Business Dashboard</h1>
      <BusinessForm onSubmit={fetchBusinessData} />
      {loading ? (
        <div className="text-center mt-8">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="text-blue-700 mt-2">Loading...</p>
        </div>
      ) : (
        <BusinessCard data={data} onRegenerate={regenerateHeadline} />
      )}
    </div>
  );
}

export default App;

