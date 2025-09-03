// import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StepperForm from "./components/StepperForm";
// import { useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import SuccessModal from "./components/SuccessModal";
import { Toaster } from "sonner";
import Term from "./components/Term";
import FormOne from "./components/FomrOne";
import FormTwo from "./components/FomrTwo";

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <div className="overflow-y-auto h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/term" element={<Term />} />
          <Route path="/form-one" element={<FormOne />} />
          <Route path="/form-two" element={<FormTwo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/success" element={<SuccessModal />} />
        </Routes>
      </div>
      <div className="sticky bottom-0 bg-white h-[100px] flex items-center gap-5 px-5">
        <button className="p-5 border-2 border-primary w-full text-primary font-bold rounded-xl active:bg-gray-200">
          Back to Home
        </button>
        <button className="bg-primary p-5 w-full text-white font-bold rounded-xl active:bg-secondary">
          Agree and Continue
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
