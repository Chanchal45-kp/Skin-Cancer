import React, { useState, useRef } from "react";

const Certificate = () => {
  const [name, setName] = useState("");
  const canvasRef = useRef(null);

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "Certificate.png"; // Apni PNG ka path yaha dal
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2);
    };
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={generateCertificate}>Generate Certificate</button>
      <canvas ref={canvasRef} className="Canvas"></canvas>
    </div>
  );
};

export default Certificate;
