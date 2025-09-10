import React, { useState } from "react";
import logo from "./../assets/image/Vector.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const options = [
  { label: "ယောက်ကျားလေး", value: "Male" },
  { label: "မိန်းကလေး", value: "Female" },
];

const FormTwo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [childName, setChildName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState("");
  const [hasInfectiousDisease, setHasInfectiousDisease] = useState(false);

  const [isFocused, setIsFocused] = useState({
    childName: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setGender(option.value);
    setIsDropdownOpen(false);
  };

  // console.log(dayjs(birthDate).format("MM/DD/YYYY"));

  const addFormTwo = async () => {
    const formData = {
      childName,
      birthDate: birthDate ? dayjs(birthDate).format("MM/DD/YYYY") : "",
      gender,
      hasInfectiousDisease,
      parentInfo: id,
    };
    console.log(formData);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}api/v1/child`, formData);
    console.log(res);
    if (res.data.code === 201) {
      navigate(`/form-three/${id}/${res.data.data.childPersona._id}`);
    }
  };

  return (
    <div>
      <div className="p-4 mx-auto bg-primary pb-[50px]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="rounded-2xl" />

          <h1 className="font-bold text-end leading-[40px] text-white text-[20px]">
            ကလေးငယ်၏ <br /> အချက်အလက်များ
          </h1>
        </div>

        <div className="mt-[50px]">
          <div className="relative mb-10">
            <input
              type="text"
              id="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, childName: true })}
              onBlur={() => setIsFocused({ ...isFocused, childName: false })}
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
              placeholder=" "
            />
            <label
              htmlFor="childName"
              className={`absolute left-4 text-white/80 pointer-events-none transition-all duration-300 ease-in-out bg-primary px-1 ${
                isFocused.childName || childName ? "text-xs -top-[9px] left-6 px-1" : "top-4"
              }`}
            >
              ကလေးအမည်
            </label>
          </div>

          <div className="relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={birthDate}
                onChange={(val) => setBirthDate(val)}
                disableFuture
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    label: "",
                    placeholder: "မွေးနေ့",
                    InputLabelProps: { shrink: true },
                    fullWidth: true,
                    sx: {
                      "& .MuiInputBase-root": {
                        backgroundColor: "transparent",
                        color: "#fff",
                        borderRadius: 9999,
                        border: "2px solid white",
                        paddingRight: 1,
                      },
                      "& .MuiInputLabel-root": { color: "#fff" },
                      "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                      "& .MuiSvgIcon-root": { color: "#fff" },
                      input: { padding: "18px 18px" },
                      "& input::placeholder": { color: "#fff", opacity: 0.7 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className="relative mt-[40px]">
          {/* Dropdown trigger button */}
          <div
            className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md focus:bg-emerald-800 focus:border-emerald-700 focus:shadow-lg outline-none cursor-pointer flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedOption.label || "ယောက်ကျားလေး / မိန်းကလေး ရွေးပေးပါ"}</span>
            <span className="text-white/80">▼</span>
          </div>

          {/* Dropdown options list */}
          {isDropdownOpen && (
            <div className=" w-full mt-2 bg-primary rounded-lg shadow-lg overflow-hidden border border-emerald-800">
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

        {/* Dropdown Section */}
        <div className="p-6 mt-[40px]  rounded-3xl bg-primary border-2 border-white shadow-lg relative">
          <h3 className="text-white text-lg font-semibold mb-4">ကူးစက်နိုင်သည့်ရောဂါရှိပါသလား</h3>

          <p className="text-white text-sm leading-relaxed mt-4 flex items-start">
            <span className="text-xl mr-2">i</span>
            <span>
              ဤမေးခွန်းသည် ကူညီသူနှင့် ကလေးသူငယ်နှစ်ဦးအတွက် လုံခြုံမှုရှိသော အတွေ့အကြုံကို
              သေချာစေရန် ရည်ရွယ်ပါတယ်။
            </span>
          </p>

          <div className="flex gap-5 mt-5">
            <button
              className={`border-2 border-white p-2 w-full font-bold rounded-3xl ${
                hasInfectiousDisease ? "bg-white text-primary" : "bg-primary text-white"
              }`}
              onClick={() => setHasInfectiousDisease(true)}
            >
              ရှိပါသည်
            </button>
            <button
              className={`border-2 border-white p-2 w-full font-bold rounded-3xl ${
                !hasInfectiousDisease ? "bg-white text-primary" : "bg-primary text-white"
              }`}
              onClick={() => setHasInfectiousDisease(false)}
            >
              မရှိပါ
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white h-[100px]  flex items-center gap-5 px-5">
        {/* <button className="p-5 border-2 border-primary w-full text-primary font-bold rounded-xl active:bg-gray-200">
            နောက်ပြန်သွားမယ်
          </button> */}
        <button
          onClick={addFormTwo}
          className="bg-primary p-5 w-full text-white font-bold rounded-xl active:bg-secondary"
        >
          ရှေ့ဆက်မယ်
        </button>
      </div>
    </div>
  );
};

export default FormTwo;
