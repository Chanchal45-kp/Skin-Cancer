import React from "react";
import "../styles/Prevention.css"; // Import CSS

const Prevention = () => {
  return (
    <div className="prevention-container">
      <h2>Skin Cancer Prevention</h2>
      <p>
        Skin cancer is one of the most common types of cancer, but it is also one
        of the most preventable. Here are some essential tips to reduce your
        risk:
      </p>

      <div className="prevention-tips">
        <div className="tip">
          <h3>1. Use Sunscreen</h3>
          <p>
            Apply a broad-spectrum sunscreen with at least SPF 30 before going
            outside, even on cloudy days.
          </p>
        </div>

        <div className="tip">
          <h3>2. Avoid Peak Sun Hours</h3>
          <p>
            Try to stay in the shade between 10 AM and 4 PM when the sun's rays
            are the strongest.
          </p>
        </div>

        <div className="tip">
          <h3>3. Wear Protective Clothing</h3>
          <p>
            Cover your skin with long-sleeved shirts, wide-brimmed hats, and
            sunglasses to protect yourself from UV exposure.
          </p>
        </div>

        <div className="tip">
          <h3>4. Avoid Tanning Beds</h3>
          <p>
            Tanning beds emit harmful UV radiation that increases the risk of
            skin cancer. Avoid them at all costs.
          </p>
        </div>

        <div className="tip">
          <h3>5. Regular Skin Checks</h3>
          <p>
            Perform self-examinations and visit a dermatologist regularly for
            early detection of any unusual skin changes.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Prevention;