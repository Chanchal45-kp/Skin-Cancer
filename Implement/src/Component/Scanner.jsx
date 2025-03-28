import React, { useState, useRef, useEffect } from 'react';

import "../styles/Scanner.css";
function Scanner () {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  const constraints = {
    video: {
      width: 290,
      height: 290,
    },
  };

  // Initialize video stream
  useEffect(() => {
    const init = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (e) {
        console.error(`navigator.getUserMedia.error: ${e.toString()}`);
      }
    };

    init();
  }, []); // Empty dependency array to run only once

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const imageData = canvasRef.current.toDataURL('image/jpeg');
    setCapturedImage(imageData);
    setImageData(imageData); // Store the captured image for prediction
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target.result);
        setImageData(e.target.result); // Store uploaded image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrediction = () => {
    setLoading(true);
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageData }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPrediction(data.prediction);
        setLoading(false); // Stop loading after prediction is made
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Stop loading if there's an error
      });
  };

  return (
    <div className="App">
      <h1>CHECK YOUR SKIN </h1>

      {/* Video element for capturing image via webcam */}
      <video ref={videoRef} playsInline autoPlay></video>

      {/* Button to capture the image from the webcam */}
      <button onClick={captureImage}>Take Photo</button>

      {/* Hidden canvas to capture image */}
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>

      <div>
        {capturedImage && (
          <div>
            <img src={capturedImage} alt="Captured" width="300" />
            <button onClick={handlePrediction}>
              {loading ? 'Predicting...' : 'Predict'}
            </button>
          </div>
        )}
      </div>

      {/* Image upload input */}
      <input type="file" onChange={handleImageUpload} accept="image/*" />

      {/* Display prediction result */}
      <div>
        {prediction && !loading && (
          <div>
            <p>The model predicts the image is: {prediction}</p>
          </div>
        )}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Scanner;
