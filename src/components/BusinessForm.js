// import { useState } from "react";

// const BusinessForm = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   const nameTrimmed = name.trim();
//   const locationTrimmed = location.trim();

//   // Check for empty fields
//   if (!nameTrimmed || !locationTrimmed) {
//     alert("Both Business Name and Location are required.");
//     return;
//   }

//   // Check for alphabetic characters only (with spaces allowed)
//   const alphabetRegex = /^[a-zA-Z\s&.,'-]+$/;

//   if (!alphabetRegex.test(nameTrimmed)) {
//     alert("Business Name must contain only letters and spaces.");
//     return;
//   }

//   if (!alphabetRegex.test(locationTrimmed)) {
//     alert("Location must contain only letters and spaces.");
//     return;
//   }

//   // If all good, send to backend
//   onSubmit({ name: nameTrimmed, location: locationTrimmed });
// };


//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md"
//     >
//       <h2 className="text-xl font-bold text-gray-700 mb-4">Business Info</h2>
//       <input
//         type="text"
//         placeholder="Business Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="w-full mb-3 p-2 border border-gray-300 rounded"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="w-full mb-4 p-2 border border-gray-300 rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default BusinessForm;

import { useState } from "react";

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const alphabetRegex = /^[a-zA-Z\s&.,'-]+$/;

    if (!name.trim() || !location.trim()) {
      alert("Both fields are required.");
      return;
    }

    if (!alphabetRegex.test(name.trim()) || !alphabetRegex.test(location.trim())) {
      alert("Only alphabets, spaces, and '& . , - ' are allowed.");
      return;
    }

    onSubmit({ name: name.trim(), location: location.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-xl space-y-5">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Business Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="e.g., Cake & Co"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="e.g., Mumbai"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Get Business Insights
      </button>
    </form>
  );
}

export default BusinessForm;

