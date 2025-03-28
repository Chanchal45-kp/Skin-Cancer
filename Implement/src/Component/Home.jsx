import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Home.css";
function Home(){

  const navigate= useNavigate();
  const handle =() =>{
    navigate("/Skin-Check");
  }
 return (
  <>
      <div className="content">
        <div className="text-section">
          <h1 className="title">Check your skin today</h1>
          <p className="description">A Skin Exam. It's the Best Way To Protect Yourself.</p>
          <button  onClick={handle} className="btn">CHECK YOUR SKIN NOW</button>
        </div>
        
        <div className="image-section">
          <img src="skin.png" alt="Skin Check" className="skin-image" />
        </div>
      </div>
    
     </>
 )

}
export default Home;