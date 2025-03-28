import React, { useState } from "react";
import "../styles/Consult.css"; // Import CSS file

const Consult = () => {
  const [selectedCancer, setSelectedCancer] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const cancerTypes = [
    "Actinic Keratosis",
    "Basal Cell Carcinoma",
    "Benign Keratosis-like Lesions",
    "Dermatofibroma",
    "Melanoma",
    "Melanocytic Nevi",
    "Vascular Lesions"
  ];

  const locations = ["Delhi", "Noida", "Gurugram", "Ghaziabad"];

  const handleSearch = async () => {
    if (!selectedLocation) {
      alert("Please select a location!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/hospitals?location=${selectedLocation}`);
      const data = await response.json();
      setHospitals(data);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  return (
    <div className="container1">
      <h2>Select Skin Cancer Type</h2>
      <select value={selectedCancer} onChange={(e) => setSelectedCancer(e.target.value)}>
        <option value="">--Select Cancer Type--</option>
        {cancerTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <h2>Select Location</h2>
      <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="">--Select Location--</option>
        {locations.map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <button onClick={handleSearch} className="btn">Find Hospitals</button>

      <div>
        <h3>Recommended Hospitals</h3>
        <ul>
          {hospitals.length > 0 ? (
            hospitals.map((hospital, index) => (
              <li key={index}>
                <strong>{hospital.name}</strong> - {hospital.contact}
              </li>
            ))
          ) : (
            <p>No hospitals found.</p>
          )}
        </ul>
      </div>
    </div>
  );
  
};

export default Consult;
