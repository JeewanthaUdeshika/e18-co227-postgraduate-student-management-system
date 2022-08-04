import { Card, CardContent, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { Component } from "react"; // Import React
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

function ReviewerDashBoard(params) {
  // Function to return reviewer screen

  return (
    <Card variant="outlined" style={{ width: "1000px", boxShadow: "none" }}>
      <CardContent>
        <div className="container" style={{ marginBottom: "20px" }}>
          <h1 style={{}}>Review Student</h1>
        </div>

        <div className="container" style={{ marginBottom: "20px" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<DownloadForOfflineIcon />}
          >
            Download Submission
          </Button>
        </div>

        <div className="container">
          <TextField
            id="outlined-multiline-static"
            label="Review"
            placeholder="Add your Review Here"
            multiline
            rows={15}
            variant="outlined"
            style={{ width: "950px" }}
          />
        </div>

        <div className="container" style={{ marginTop: "20px" }}>
          <Button variant="contained" color="info">
            Upload File
          </Button>
        </div>

        <div className="container" style={{ marginTop: "20px" }}>
          <Button variant="contained" color="success">
            Submit Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReviewerDashBoard;
