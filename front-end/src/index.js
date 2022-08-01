
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './pages/loginPage';
import RegisteredRegPage from './pages/reg-reg-page';
import ProRegPage from './pages/pro-reg-page';
import RegisterBasic from './pages/register-basic';
import ProfilePage from './pages/profilePage';
import RegTable from './components/regTable';
import MainInfo from './components/dashboard/mainInfo';
import ButtonGroupMain from './components/dashboard/buttonGroupMain';
import StudentDashBoard from './components/dashboard/studentDashboard';
import Submission from './components/dashboard/submission';
import SubmissionDashboard from './pages/submissionDashboard';
import Reviewer from './pages/reviewDashboard';
import ResponsiveAppBar from './components/navbarNew';
import AdminDashboard from './components/dashboard/admin';
import AdminPage from './pages/adminPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ProfilePage/>
    // <LoginPage/>
    // <RegisterBasic/>
    // <RegisteredRegPage/>
    // <ProRegPage/>
    // <RegTable/>
    // <MainInfo/>
    // <ButtonGroupMain/>
    // <StudentDashBoard/>
    // <SubmissionDashboard/>
    // <Reviewer/>
    // <ResponsiveAppBar/>
    // <AdminDashboard/>
    <AdminPage/>

    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
