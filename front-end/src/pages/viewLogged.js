import React from "react";
import ButtonGroupMain from "../components/dashboard/buttonGroupMain";
import Footer from "../components/footer";
import View from "../components/view";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "../components/navbarNew";

// Function for showing information pages on post graduate programme

function ViewLoggedPage() {
  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <ResponsiveAppBar />
      </div>

      <div>
        <Grid container spacing={0}>
          <Grid item xs={3} style={{ marginLeft: "25px" }}>
            <ButtonGroupMain />
          </Grid>

          <Grid item xs={8}>
            <View />
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default ViewLoggedPage;
