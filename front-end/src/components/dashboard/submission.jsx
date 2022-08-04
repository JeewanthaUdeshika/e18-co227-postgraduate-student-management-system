/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */

import { Alert, Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react"; // Import react Component
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Submission = () => {
  const navigate = useNavigate();

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

      console.log(res);
    }
    getData();
  }, []);

  // State of submissions of the user
  const [state, setState] = useState({
    threeMonths: {
      submissionStatus: "submitted",
      reviewStatus: "reviewed",
    },

    year1Half: {
      submissionStatus: "not-submitted",
      reviewStatus: "not-reviewed",
    },

    year1Full: {
      submissionStatus: "not-submitted",
      reviewStatus: "not-reviewed",
    },

    year2Half: {
      submissionStatus: "not-submitted",
      reviewStatus: "not-reviewed",
    },

    year2Full: {
      submissionStatus: "not-submitted",
      reviewStatus: "not-reviewed",
    },

    year3Half: {
      submissionStatus: "not-submitted",
      reviewStatus: "not-reviewed",
    },

    year3Full: {
      submissionStatus: "submitted",
      reviewStatus: "not-reviewed",
    },
  });

  const handleClick = (e) => {
    navigate("/fileUpload", {
      state: e.target.id,
    });
  };
  // function to set the button state enabled or disabled
  const buttonState = (inp) => {
    return inp.submissionStatus === "submitted" &&
      inp.reviewStatus === "reviewed"
      ? true
      : false;
  };

  // function to set the visibility of the component
  const setContentVisibility = (inp) => {
    return inp.submissionStatus === "submitted" &&
      inp.reviewStatus === "reviewed"
      ? "visible"
      : "hidden";
  };

  // function to update the submission status icon
  const stateUpdateSubmission = (inp) => {
    if (inp.submissionStatus === "submitted") {
      return "success";
    } else if (inp.submissionStatus === "not-submitted") {
      return "error";
    }
  };

  // function to update the review status icon
  const stateUpdateReview = (inp) => {
    if (inp.reviewStatus === "reviewed") {
      return "success";
    } else if (inp.reviewStatus === "pending") {
      return "warning";
    } else if (inp.reviewStatus === "not-reviewed") {
      return "error";
    }
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "25px" }}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  THREE MONTHS SUBMISSION
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.threeMonths)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.threeMonths.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.threeMonths)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.threeMonths.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your 3 Months Submission Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="1"
              disabled={buttonState(state.threeMonths)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSION
            </Button>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          marginBottom: "25px",
          contentVisibility: setContentVisibility(state.threeMonths),
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  HALF YEARLY SUBMISSION (YEAR 1)
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.year1Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year1Half.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.year1Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year1Half.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload your half yearly Submission of year 1 Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="2"
              disabled={buttonState(state.year1Half)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSION
            </Button>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          marginBottom: "25px",
          contentVisibility: setContentVisibility(state.year1Half),
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  YEARLY SUBMISSION (YEAR 1)
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.year1Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year1Full.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.year1Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year1Full.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your Yearly Submission of year 1 Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="3"
              disabled={buttonState(state.year1Full)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSION
            </Button>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          marginBottom: "25px",
          contentVisibility: setContentVisibility(state.year1Full),
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  HARF YEARLY SUBMISSION (YEAR 2)
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.year2Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year2Half.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.year2Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year2Half.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your half yearly Submission of year 2 Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="4"
              disabled={buttonState(state.year2Half)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSION
            </Button>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          marginBottom: "25px",
          contentVisibility: setContentVisibility(state.year2Half),
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  YEARLY SUBMISSION (YEAR 2)
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.year2Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year2Full.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.year2Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year2Full.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your Yearly Submission of year 2 Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="5"
              disabled={buttonState(state.year2Full)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSION
            </Button>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          marginBottom: "25px",
          contentVisibility: setContentVisibility(state.year2Full),
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  HALF YEARLY SUBMISSION (YEAR 3)
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.year3Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year3Half.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.year3Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year3Half.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your half yearly Submission of year 3 Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="6"
              disabled={buttonState(state.year3Half)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSION
            </Button>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          marginBottom: "25px",
          contentVisibility: setContentVisibility(state.year3Half),
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <h3
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "lightgreen",
                    height: "50px",
                  }}
                >
                  YEARLY SUBMISSION (YEAR 3)
                </h3>
              </Grid>

              <Grid item xs={4}>
                <Grid container spacing={0.5}>
                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateSubmission(state.year3Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year3Full.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(state.year3Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {state.year3Full.reviewStatus}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your yearly Submission of year 3 Here.
            </p>

            <Button
              variant="contained"
              color="info"
              id="7"
              disabled={buttonState(state.year3Full)}
              onClick={(e) => handleClick(e)}
            >
              ADD SUBMISSIOM
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Submission;
