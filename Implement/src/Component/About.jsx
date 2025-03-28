import React from "react";
import "../styles/About.css"; // CSS Import

const About = () => {
  return (
    <div className="about-container">
      <h2>About Skin Cancer</h2>
      <p>
        Skin cancer is one of the most common types of cancer, caused by abnormal
        growth of skin cells. It occurs due to excessive exposure to ultraviolet
        (UV) rays from the sun or tanning beds. Early detection is crucial for
        effective treatment.
      </p>

      <h3>Types of Skin Cancer</h3>
      <ul>
        <li><b>Basal Cell Carcinoma (BCC)</b> – The most common, slow-growing, and rarely spreads.</li>
        <li><b>Squamous Cell Carcinoma (SCC)</b> – Develops in the outer layer of the skin and can spread if not treated.</li>
        <li><b>Melanoma</b> – The most aggressive form, capable of spreading quickly to other organs.</li>
      </ul>

      <h3>Signs & Symptoms</h3>
      <ul>
        <li>Unusual moles or dark patches on the skin</li>
        <li>Sores that don’t heal</li>
        <li>Itchy, scaly, or bleeding skin spots</li>
        <li>Sudden changes in skin texture or color</li>
      </ul>

      <h3>How to Prevent Skin Cancer?</h3>
      <ul>
        <li><b>Use Sunscreen</b> – SPF 30+ is essential for skin protection.</li>
        <li><b>Wear Protective Clothing</b> – Hats, sunglasses, and long sleeves help block harmful rays.</li>
        <li><b>Avoid Peak Sun Hours</b> – Stay in the shade between 10 AM – 4 PM.</li>
        <li><b>Regular Skin Checkups</b> – Early detection increases the chances of successful treatment.</li>
      </ul>

      <h3>Why SkinCheck?</h3>
      <p>
        At <b>SkinCheck</b>, we aim to raise awareness and provide resources for
        early detection and prevention of skin cancer. Your skin’s health matters —
        <b>get checked today!</b>
      </p>
    </div>
  );
};

export default About;
