/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 28/09/2022
 */

import { Alert, Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect } from "react"; // Import react Component
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Submission = () => {
  // Read the role of the user from the previous
  // const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const res = await axios({
        method: "GET",
        url: `http://localhost:3001/user/profile`,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      // Read the submission status and update them
      setStateSubmission({
        ...stateSubmission,
        threeMonths: {
          ...stateSubmission.threeMonths,
          submissionStatus:
            res.data.submission1 === "NA" ? "not-submitted" : "submitted",
        },
        year1Half: {
          ...stateSubmission.year1Half,
          submissionStatus:
            res.data.submission2 === "NA" ? "not-submitted" : "submitted",
        },
        year1Full: {
          ...stateSubmission.year1Full,
          submissionStatus:
            res.data.submission3 === "NA" ? "not-submitted" : "submitted",
        },
        year2Half: {
          ...stateSubmission.year2Half,
          submissionStatus:
            res.data.submission4 === "NA" ? "not-submitted" : "submitted",
        },
        year2Full: {
          ...stateSubmission.year2Full,
          submissionStatus:
            res.data.submission5 === "NA" ? "not-submitted" : "submitted",
        },
        year3Half: {
          ...stateSubmission.year3Half,
          submissionStatus:
            res.data.submission6 === "NA" ? "not-submitted" : "submitted",
        },
        year3Full: {
          ...stateSubmission.year3Full,
          submissionStatus:
            res.data.submission7 === "NA" ? "not-submitted" : "submitted",
        },
      });
      // console.log(res.data.submission1);
    }
    getData();
  }, []);

  // State of submissions of the user
  const [stateSubmission, setStateSubmission] = useState({
    threeMonths: {
      submissionStatus: "",
      reviewStatus: "not-reviewed",
    },

    year1Half: {
      submissionStatus: "",
      reviewStatus: "not-reviewed",
    },

    year1Full: {
      submissionStatus: "",
      reviewStatus: "not-reviewed",
    },

    year2Half: {
      submissionStatus: "",
      reviewStatus: "not-reviewed",
    },

    year2Full: {
      submissionStatus: "",
      reviewStatus: "not-reviewed",
    },

    year3Half: {
      submissionStatus: "",
      reviewStatus: "not-reviewed",
    },

    year3Full: {
      submissionStatus: "",
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
    return inp.submissionStatus === "submitted" ||
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
    } else {
      return "warning";
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
                        severity={stateUpdateSubmission(
                          stateSubmission.threeMonths
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.threeMonths.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(
                          stateSubmission.threeMonths
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.threeMonths.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your 3 Months Submission Here.
            </p>

            <Grid item xs={12} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong style={{ fontSize: "20px" }}>
                      Submission Status
                    </strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="1"
              disabled={buttonState(stateSubmission.threeMonths)}
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
          contentVisibility: setContentVisibility(stateSubmission.threeMonths),
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
                        severity={stateUpdateSubmission(
                          stateSubmission.year1Half
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year1Half.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(stateSubmission.year1Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year1Half.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload your half yearly Submission of year 1 Here.
            </p>

            <Grid item xs={8} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="2"
              disabled={buttonState(stateSubmission.year1Half)}
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
          contentVisibility: setContentVisibility(stateSubmission.year1Half),
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
                        severity={stateUpdateSubmission(
                          stateSubmission.year1Full
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year1Full.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(stateSubmission.year1Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year1Full.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your Yearly Submission of year 1 Here.
            </p>

            <Grid item xs={8} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="3"
              disabled={buttonState(stateSubmission.year1Full)}
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
          contentVisibility: setContentVisibility(stateSubmission.year1Full),
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
                        severity={stateUpdateSubmission(
                          stateSubmission.year2Half
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year2Half.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(stateSubmission.year2Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year2Half.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your half yearly Submission of year 2 Here.
            </p>

            <Grid item xs={8} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="4"
              disabled={buttonState(stateSubmission.year2Half)}
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
          contentVisibility: setContentVisibility(stateSubmission.year2Half),
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
                        severity={stateUpdateSubmission(
                          stateSubmission.year2Full
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year2Full.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(stateSubmission.year2Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year2Full.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your Yearly Submission of year 2 Here.
            </p>

            <Grid item xs={8} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="5"
              disabled={buttonState(stateSubmission.year2Full)}
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
          contentVisibility: setContentVisibility(stateSubmission.year2Full),
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
                        severity={stateUpdateSubmission(
                          stateSubmission.year3Half
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year3Half.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(stateSubmission.year3Half)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year3Half.reviewStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your half yearly Submission of year 3 Here.
            </p>

            <Grid item xs={8} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="6"
              disabled={buttonState(stateSubmission.year3Half)}
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
          contentVisibility: setContentVisibility(stateSubmission.year3Half),
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
                        severity={stateUpdateSubmission(
                          stateSubmission.year3Full
                        )}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year3Full.submissionStatus.toUpperCase()}
                      </Alert>
                    }
                  </Grid>

                  <Grid item xs={6}>
                    {
                      <Alert
                        severity={stateUpdateReview(stateSubmission.year3Full)}
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        {stateSubmission.year3Full.reviewStatus}
                      </Alert>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <p style={{ fontSize: "20px" }}>
              Upload Your yearly Submission of year 3 Here.
            </p>

            <Grid item xs={8} style={{ marginBottom: "25px" }}>
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>{" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{ marginTop: "15px" }}>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Submission :{" "}
                    </p>
                    <p
                      style={{
                        marginLeft: "25px",
                        fontWeight: "lighter",
                        fontSize: "20px",
                      }}
                    >
                      Time:{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Button
              variant="contained"
              color="info"
              id="7"
              disabled={buttonState(stateSubmission.year3Full)}
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
