import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import UserProfile from "./pages/userProfile";
import UserProfileView from "./pages/userProfileView";
import RegTable from "./pages/approveTable";
import ReviewTable from "./pages/reviewTablePage";
import Register from "./pages/register-basic";
import RegRegister from "./pages/reg-reg-page";
// import RegProspective from "./components/provisionalRegister";
import RegProspective from "./components/provisionalRegister";
import NavBar from "./components/navbarNew";
import MainInfo from "./components/dashboard/mainInfo";
import Dashboard from "./components/dashboard/studentDashboard";
// import Submission from "./components/dashboard/submission";
import Submission from "./pages/submissionDashboard";
import GroupMain from "./components/dashboard/buttonGroupMain";
import Admin from "./pages/adminPage";
import ProcedurePageHome from "./pages/homePage/procedurePage";
import FormatPageHome from "./pages/homePage/formatPage";
import ProgressReviewPageHome from "./pages/homePage/progressReviewPage";
import AppointmentPageHome from "./pages/homePage/appointmentPage";

import ProcedurePage from "./pages/procedurePage";
import FormatPage from "./pages/formatPage";
import ProgressReviewPage from "./pages/progressReviewPage";
import AppointmentPage from "./pages/appointmentPage";
import AddStaffPage from "./pages/addStaffPage";
import ReviewerDashboard from "./pages/reviewDashboard";
import FileUploader from "./pages/fileUploadPage";
import ViewPage from "./pages/view";
import ViewLoggedPage from "./pages/viewLogged";
import CCPage from "./pages/CCPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="profileView" element={<UserProfileView />} />
        <Route path="regtable" element={<RegTable />} />
        <Route path="register" element={<Register />} />
        <Route path="regRegister" element={<RegRegister />} />
        <Route path="regProspective" element={<RegProspective />} />
        <Route path="navbar" element={<NavBar />} />
        <Route path="mainInfo" element={<MainInfo />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="submission" element={<Submission />} />
        <Route path="btngrp" element={<GroupMain />} />
        <Route path="admin" element={<Admin />} />
        <Route path="procedureHome" element={<ProcedurePageHome />} />
        <Route path="formatHome" element={<FormatPageHome />} />
        <Route path="progressReviewHome" element={<ProgressReviewPageHome />} />
        <Route path="appointmentHome" element={<AppointmentPageHome />} />

        <Route path="procedure" element={<ProcedurePage />} />
        <Route path="format" element={<FormatPage />} />
        <Route path="progressReview" element={<ProgressReviewPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="addStaff" element={<AddStaffPage />} />
        <Route path="reviewer" element={<ReviewerDashboard />} />
        <Route path="reviewTable" element={<ReviewTable />} />
        <Route path="fileUpload" element={<FileUploader />} />
        <Route path="viewLogged" element={<ViewLoggedPage />} />
        <Route path="ccPage" element={<CCPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
