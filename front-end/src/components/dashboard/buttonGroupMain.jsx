import React, { useEffect } from "react"; // Import react Component
import Button from "@mui/material/Button"; // import MUI Component
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// Designed using Material UI

const ButtonGroupMain = () => {
  const navigate = useNavigate(); // Use navigation
  const [state, setState] = useState({
    role: "",
  });

  useEffect(() => {
    async function getData() {
      const res = await axios({
        method: "GET",
        url: `http://localhost:3001/auth/isStaff`,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      setState({ ...state, role: res.data.message });
      console.log(res.data.message);
    }
    getData();
  }, []);

  const hideDashboard = () => {
    if (state.role === "admin") {
      return "none";
    } else if (state.role === "examiner") {
      return "none";
    } else if (state.role === "supervisor") {
      return "none";
    } else {
      return "block";
    }
  };

  const showReviewDashboard = () => {
    if (state.role === "examiner") {
      return "block";
    } else if (state.role === "supervisor") {
      return "block";
    } else {
      return "none";
    }
  };
  const navigateProcedure = () => {
    navigate("/procedure"); // Navigate to Procdure page
  };

  const navigateAppointment = () => {
    navigate("/appointment"); // Navigate to Appointment page
  };

  const navigateProgress = () => {
    navigate("/progressReview"); // Navigate to Progress review page
  };

  const navigateFormat = () => {
    navigate("/format"); // Navigate to format page
  };

  const navigateSubmission = () => {
    navigate("/submission"); // Navigate to format page
  };

  const navigateAddStaff = () => {
    navigate("/addStaff"); // Navigate to format page
  };

  const navigateReviewDashboard = () => {
    navigate("/reviewTable"); // Navigate to format page
  };

  const navigateCoordinatorDashboard = () => {
    navigate("/admin"); // Navigate to format page
  };

  return (
    // <Box sx={{display: 'block', '& > *': {m: 1,},}}>

    <div className="text-center" style={{ width: "300px" }}>
      <h4>Post Graduate Studies</h4>

      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        style={{ width: "300px" }}
      >
        <Button key="main1" onClick={navigateProcedure}>
          Application Procedure
        </Button>

        <Button key="main2" onClick={navigateProgress}>
          Progress Review
        </Button>

        <Button key="main3" onClick={navigateFormat}>
          Format, Submission and Evaluation of Thesis
        </Button>

        <Button key="main4" onClick={navigateAppointment}>
          Appointment of Examiners for Thesis
        </Button>

        <Button
          key="admin"
          onClick={navigateCoordinatorDashboard}
          sx={{ display: state.role === "admin" ? "block" : "none" }}
        >
          Coordinator Dashboard
        </Button>

        <Button
          key="main5"
          onClick={navigateSubmission}
          sx={{ display: hideDashboard }}
        >
          Submission Dashboard
        </Button>

        <Button
          key="main6"
          onClick={navigateReviewDashboard}
          sx={{ display: showReviewDashboard }}
        >
          Review Dashboard
        </Button>

        <Button
          key="main7"
          onClick={navigateAddStaff}
          sx={{ display: state.role === "admin" ? "block" : "none" }}
        >
          Add Staff Member
        </Button>
      </ButtonGroup>
    </div>

    //</Box>
  );
};

export default ButtonGroupMain;
