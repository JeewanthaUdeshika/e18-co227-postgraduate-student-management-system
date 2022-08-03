import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Profile from "./components/profile";
import RegTable from "./components/regTable";
import Register from "./components/register";
import RegRegister from "./components/regRegister";
import RegProspective from "./components/provisionalRegister";
import ProcedurePageHome from "./pages/homePage/procedurePage";
import AppointmentPageHome from "./pages/homePage/appointmentPage";
import FormatPageHome from "./pages/homePage/formatPage";
import ProgressReviewPageHome from "./pages/homePage/progressReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="regtable" element={<RegTable />} />
        <Route path="register" element={<Register />} />
        <Route path="regRegister" element={<RegRegister />} />
        <Route path="regProspective" element={<RegProspective />} />
        <Route path="procedureHome" element={<ProcedurePageHome/>} />
        <Route path="appointmentHome" element={<AppointmentPageHome />} />
        <Route path="formatHome" element={<FormatPageHome />} />
        <Route path="progressHome" element={<ProgressReviewPageHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
