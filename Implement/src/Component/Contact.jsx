import React, { useState } from "react";
import "../styles/Contact.css"; // CSS Import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    cancerType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data Submitted:", formData);
    alert("Form Submitted Successfully!");
    setFormData({ name: "", cancerType: "" }); // Reset form after submit
  };

  return (
    <div className="isma-container">
      <h2 className="isma-heading">Consult With Doctor</h2>
      <form className="isma-form" onSubmit={handleSubmit}>
        <label className="isma-label">Patient Name:</label>
        <input
          className="isma-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="isma-label">Skin Cancer Type:</label>
        <select 
          className="isma-select" 
          name="cancerType" 
          value={formData.cancerType} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Cancer Type</option>
          <option value="Basal Cell Carcinoma">Basal Cell Carcinoma</option>
          <option value="Squamous Cell Carcinoma">Squamous Cell Carcinoma</option>
          <option value="Melanoma">Melanoma</option>
          <option value="Other">Other</option>
        </select>

        <button className="isma-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
