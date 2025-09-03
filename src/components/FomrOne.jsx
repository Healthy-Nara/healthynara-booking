import React, { useState } from "react";
import logo from "./../assets/image/Vector.png";

const FormOne = () => {
  // A nested component to handle the material design input field logic
  const MaterialInput = ({ id, label }) => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="relative mb-8">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={`absolute left-6 top-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
            isFocused || value ? "text-xs -top-[8px] left-6 px-1" : ""
          }`}
        >
          {label}
        </label>
      </div>
    );
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="p-4 max-w-2xl h-screen mx-auto bg-[#019177]">
      <div className="flex items-center justify-between">
        <img src={logo} alt="" className="rounded-2xl" />

        <h1 className="font-bold text-white text-[20px]">အုပ်ထိန်းသူ၏ အချက်အလက်များ</h1>
      </div>

      <div className="mt-[50px]">
        <MaterialInput id="name" label="Name" />
        <MaterialInput id="email" label="Email" />
        <MaterialInput id="phone" label="Phone" />
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
            <span>{selectedOption.label}</span>
            <span className="text-white/80">▼</span>
          </div>

          {/* Dropdown options list */}
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-2 bg-primary rounded-lg shadow-lg overflow-hidden border border-emerald-800">
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
            This is a message providing additional information or instructions for the user. It can
            be a long message that wraps to the next line.
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormOne;
