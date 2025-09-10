// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Toaster } from "sonner";
import Term from "./components/Term";
import FormOne from "./components/FomrOne";
import FormTwo from "./components/FomrTwo";
import FormThree from "./components/FormThree";
import SuccessModal from "./components/SuccessModal";

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <div className="max-w-2xl mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/term" element={<Term />} />
          <Route path="/form-one" element={<FormOne />} />
          <Route path="/form-two/:id" element={<FormTwo />} />
          <Route path="/form-three/:parentId/:childId" element={<FormThree />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          <Route path="/success" element={<SuccessModal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
