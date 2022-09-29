import React from "react";
import ResponsiveAppBar from "../components/navbarNew";
import Footer from "../components/footer";
import CCDashboard from "../components/dashboard/ccDashboard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import Material UI Back button to this component
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function CCPage() {

    const navigate = useNavigate();

    const moveBack = () => {
        navigate("/procedure");
    };

  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <ResponsiveAppBar />
      </div>

      <div style={{ marginTop: "65px" }}>
        <div className="text-center">
          <h1
            style={{
              fontWeight: "lighter",
            }}
          >
            Course Coordinator Dash Board
          </h1>
        </div>

        <div
          className="row"
          style={{
            width: "100px",
            marginBottom: '25px',
            marginLeft: '25px'
          }}
        >
          <Button
            variant="contained"
            color="info"
            startIcon={<ArrowBackIcon />}
            onClick={(e) => moveBack()}
          >
            Back
          </Button>
        </div>
      </div>

      <div>
            <CCDashboard />
      </div>

      <div style={{ marginTop: "10px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default CCPage;