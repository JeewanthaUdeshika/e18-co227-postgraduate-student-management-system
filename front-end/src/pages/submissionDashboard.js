import React from "react";
import Submission from "../components/dashboard/submission";
import Navbar from "../components/navbarNew";
import Footer from "../components/footer";
import ButtonGroupMain from "../components/dashboard/buttonGroupMain";
import { Grid } from "@mui/material";

const SubmissionDashboard = () => {
  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <Navbar />
      </div>

      <div>
        <Grid container spacing={0}>
          <Grid item xs={3} style={{ marginLeft: "25px" }}>
            <ButtonGroupMain />
          </Grid>

          <Grid item xs={8}>
            <Submission />
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default SubmissionDashboard;
