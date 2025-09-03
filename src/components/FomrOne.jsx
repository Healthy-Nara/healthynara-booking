import React, { useState } from "react";
import logo from "./../assets/image/Vector.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const options = [
  { label: "ဗုဒ္ဓဘာသာ", value: "Buddhist" },
  { label: "ခရစ်ယာန်", value: "Christian" },
  { label: "ဟိန္ဒူ", value: "Hindu" },
  { label: "Islam", value: "Islam" },
  { label: "Other", value: "Other" },
];

const FormOne = () => {
  const navigate = useNavigate();
  const [parentName, setParentName] = useState("");
  const [id, setId] = useState("");
  const [isFocused, setIsFocused] = useState({
    parentName: false,
    contactNumber: false,
    township: false,
    address: false,
    religion: false,
    nearestBusStop: false,
    durationOfBusStopToHome: false,
  });
  const [contactNumber, setContactNumber] = useState("");
  const [township, setTownship] = useState("");
  const [address, setAddress] = useState("");
  const [religion, setReligon] = useState("");
  const [nearestBusStop, setNearestBusStop] = useState("");
  const [durationOfBusStopToHome, setDurationOfBusStopToHome] = useState("5min");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setReligon(option.value);
    setIsDropdownOpen(false);
  };

  const addFormOne = async () => {
    const formData = {
      parentName,
      contactNumber,
      township,
      address,
      religion: religion ? religion : "Other",
      nearestBusStop,
      durationOfBusStopToHome,
    };
    console.log(formData);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}api/v1/parent`, formData);
    console.log(res.data.data._id);
    if (res.data.code === 201) {
      navigate(`/form-two/${res.data.data._id}`);
    }
  };

  return (
    <div>
      <div className="pt-4 px-4 pb-5 mx-auto bg-[#019177]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="rounded-2xl" />

          <h1 className="font-bold text-white text-[20px]">အုပ်ထိန်းသူ၏ အချက်အလက်များ</h1>
        </div>

        <div className="mt-[50px]">
          <div className="relative mb-8">
            <input
              type="text"
              id="parentName"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, parentName: true })}
              onBlur={() => setIsFocused({ ...isFocused, parentName: false })}
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
              placeholder=" "
            />
            <label
              htmlFor="parentName"
              className={`absolute left-6 top-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
                isFocused.parentName || parentName ? "text-xs -top-[9px] left-6 px-1" : ""
              }`}
            >
              အုပ်ထိန်းသူအမည်
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, contactNumber: true })}
              onBlur={() => setIsFocused({ ...isFocused, contactNumber: false })}
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
              placeholder=" "
            />
            <label
              htmlFor="contactNumber"
              className={`absolute left-6 top-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
                isFocused.contactNumber || contactNumber ? "text-xs -top-[9px] left-6 px-1" : ""
              }`}
            >
              ဆက်သွယ်ရန် ဖုန်းနံပါတ်
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, address: true })}
              onBlur={() => setIsFocused({ ...isFocused, address: false })}
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
              placeholder=" "
            />
            <label
              htmlFor="address"
              className={`absolute left-6 top-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
                isFocused.address || address ? "text-xs -top-[9px] left-6 px-1" : ""
              }`}
            >
              နေရပ်လိပ်စာ အတိအကျ
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              id="township"
              value={township}
              onChange={(e) => setTownship(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, township: true })}
              onBlur={() => setIsFocused({ ...isFocused, township: false })}
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
              placeholder=" "
            />
            <label
              htmlFor="township"
              className={`absolute left-6 top-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
                isFocused.township || township ? "text-xs -top-[9px] left-6 px-1" : ""
              }`}
            >
              နေထိုင်ရာမြို့နယ်
            </label>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              id="nearestBusStop"
              value={nearestBusStop}
              onChange={(e) => setNearestBusStop(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, nearestBusStop: true })}
              onBlur={() => setIsFocused({ ...isFocused, nearestBusStop: false })}
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
              placeholder=" "
            />
            <label
              htmlFor="nearestBusStop"
              className={`absolute left-6 top-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
                isFocused.nearestBusStop || nearestBusStop ? "text-xs -top-[9px] left-6 px-1" : ""
              }`}
            >
              နီးစပ်ရာ ကားမှတ်တိူင်
            </label>
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="p-6 rounded-3xl bg-primary border-2 border-white shadow-lg relative">
          <h3 className="text-white text-lg font-semibold mb-4">Choose from the options below:</h3>

          <div className="relative mb-4">
            {/* Dropdown trigger button */}
            <div
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md focus:bg-emerald-800 focus:border-emerald-700 focus:shadow-lg outline-none cursor-pointer flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{religion || "Select Religion"}</span>
              <span className="text-white/80">▼</span>
            </div>

            {/* Dropdown options list */}
            {isDropdownOpen && (
              <div className="w-full mt-2 bg-primary rounded-lg shadow-lg overflow-hidden border border-emerald-800">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="p-4 cursor-pointer hover:bg-emerald-600 transition-colors duration-200 text-white"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-white text-sm leading-relaxed mt-4 flex items-start">
            <span className="text-xl mr-2">i</span>
            <span>
              This is a message providing additional information or instructions for the user. It
              can be a long message that wraps to the next line.
            </span>
          </p>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white h-[100px]  flex items-center gap-5 px-5">
        {/* <button className="p-5 border-2 border-primary w-full text-primary font-bold rounded-xl active:bg-gray-200">
          Back to Home
        </button> */}
        <button
          onClick={addFormOne}
          className="bg-primary p-5 w-full text-white font-bold rounded-xl active:bg-secondary"
        >
          ရှေ့ဆက်မယ်
        </button>
      </div>
    </div>
  );
};

export default FormOne;
