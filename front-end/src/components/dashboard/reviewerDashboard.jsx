import { Card, CardContent, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react"; // Import React
import { useLocation } from "react-router-dom";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import axios from "axios";

const ReviewerDashBoard = () => {
  // Function to return reviewer screen
  const { state } = useLocation();

  // Variable to store the basic Info coming from the previous page
  let finalDetails = {};

  const [reviewInfo, setReviewInfo] = useState({
    comment: "",
  });

  const handleChange = (e) => {
    setReviewInfo({ ...reviewInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // log the previous details
      // console.log(state);

      // Merge the objects
      finalDetails = { ...state, ...reviewInfo };

      console.log(finalDetails);

      // Send the application data to the backend
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/data/submitreview",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        data: finalDetails,
        withCredentials: true,
      });

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
            name="comment"
            onChange={handleChange}
          />
        </div>

        <div className="container" style={{ marginTop: "20px" }}>
          <Button variant="contained" color="info">
            Upload File
          </Button>
        </div>

        <div
          className="container"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          <Button variant="contained" color="success" type="submit">
            Submit Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewerDashBoard;
