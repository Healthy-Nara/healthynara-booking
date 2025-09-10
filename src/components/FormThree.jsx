import React, { useState } from "react";
import logo from "./../assets/image/Vector.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const durationOptions = [
  { label: "နေ့စဉ်", value: "daily" },
  { label: "အပတ်စဉ်", value: "weekly" },
  { label: "လစဉ်", value: "monthly" },
];

const shiftOptions = [
  { label: "နေ့", value: "day" },
  { label: "ည", value: "night" },
  { label: "နှစ်ချိန်လုံး", value: "both" },
];

const FormThree = () => {
  const navigate = useNavigate();
  const { parentId, childId } = useParams();

  const [dutyDuration, setDutyDuration] = useState("daily");
  const [dutyShift, setDutyShift] = useState("day");
  const [dutyStartingtime, setDutyStartingtime] = useState(null);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!dutyStartingtime) return;
    setLoading(true);
    const payload = {
      parentInfo: parentId,
      childInfo: childId,
      dutyDuration,
      dutyShift,
      dutyStartingtime: dayjs(dutyStartingtime).format("YYYY-MM-DD"),
      additionalNotes,
    };

    console.log(payload);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}api/v1/booking`, payload);
      console.log(res.data.status);
      if (res.data?.status === "success") {
        navigate("/success");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-4 mx-auto bg-primary pb-[50px]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="rounded-2xl" />
          <h1 className="font-bold text-end leading-[40px] text-white text-[20px]">
            ဂျုတီဆိုင်ရာ <br /> အချက်အလက်များ
          </h1>
        </div>

        <div className="mt-[30px] space-y-6">
          <div className="p-4 rounded-3xl bg-primary border-2 border-white">
            <p className="text-white mb-5">ဝန်ထမ်း၏ကာလအမျိုးအစား ရွေးပါ</p>
            <div className="grid grid-cols-3 gap-3">
              {durationOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDutyDuration(opt.value)}
                  className={`border-2 border-white py-2 px-3 rounded-2xl text-sm font-semibold ${
                    dutyDuration === opt.value ? "bg-white text-primary" : "bg-primary text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-3xl bg-primary border-2 border-white">
            <p className="text-white mb-5">ဝန်ထမ်း၏ အလုပ်ချိန် အမျိုးအစား ရွေးပါ</p>
            <div className="grid grid-cols-2 gap-3">
              {shiftOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDutyShift(opt.value)}
                  className={`border-2 border-white py-2 px-3 rounded-2xl text-sm font-semibold ${
                    dutyShift === opt.value ? "bg-white text-primary" : "bg-primary text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-3xl bg-primary border-2 border-white">
            <p className="text-white mb-5">ဝန်ဆောင်မှု စတင်မည့် ရက်ရွေးပါ</p>
            <div className="relative">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dutyStartingtime}
                  onChange={(val) => setDutyStartingtime(val)}
                  disablePast
                  format="DD-MM-YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: {
                        "& .MuiInputBase-root": {
                          backgroundColor: "transparent",
                          color: "#fff",
                          borderRadius: 9999,
                          border: "2px solid white",
                          paddingRight: 1,
                        },
                        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                        "& .MuiSvgIcon-root": { color: "#fff" },
                        input: { padding: "14px 16px" },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="p-4 rounded-3xl bg-primary border-2 border-white">
            <p className="text-white mb-5">ဆောင်ရွက်ရန်အချက်အလက်များ</p>
            <input
              type="text"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="မှတ်ချက်များ ဖြည့်ပါ"
              className="bg-primary text-white p-4 rounded-full w-full transition-all duration-300 border-2 border-white shadow-md outline-none placeholder-white/80"
            />
          </div>
        </div>
      </div>

      <div className="bg-white h-[100px] flex items-center gap-5 px-5">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-primary p-5 w-full text-white font-bold rounded-xl active:bg-secondary disabled:opacity-70"
        >
          {loading ? "တင်နေပါတယ်..." : "အတည်ပြုမယ်"}
        </button>
      </div>
    </div>
  );
};

export default FormThree;
