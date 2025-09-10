// import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/image/Vector.png";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh] bg-background md:w-[500px] mx-auto py-1 px-[24px] ">
      <div className="flex flex-col justify-center items-center mt-40">
        <div className="mb-10">
          <img src={logo} alt="" className="w-[100px] h-[100px] rounded-2xl" />
        </div>
        <p className="text-center font-bold text-secondary text-[20px] mb-10 leading-[1.8]">
          Please fill out our intake form to help us match you with the perfect caregiver. Your
          journey to quality care starts here!
        </p>
        <button
          onClick={() => navigate("/term")}
          className="w-full bg-primary text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Start Booking
        </button>
      </div>
    </div>
  );
}

export default HomePage;
