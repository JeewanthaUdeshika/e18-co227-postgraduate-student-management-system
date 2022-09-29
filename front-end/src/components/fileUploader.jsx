import { Card, CardContent } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

function FileUploader() {
  // get the previous basic Info
  const { state } = useLocation();
  const [info, setInfo] = useState({
    submission: "",
    submissionFile: "",
  });

  //   detect the file
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.files[0] });
  };

  //   function  to upload the submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // copy the submission id from the previous state
      info.submission = state;
      console.log(info);
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/user/submit",
        headers: { "Content-Type": "multipart/form-data" },
        data: info,
        withCredentials: true,
      });

      console.log(res);
      //   alert("Submitted");
      // alert("Application Submitted Successfully!");
      toast.success("Submitted Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err.response.data);
      // Show the toast error
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Card style={{ width: "1000px" }}>
      <CardContent>
        <div className="container">
          <div className="row">
            <h1 style={{ fontWeight: "lighter" }}>Upload Your Submission</h1>


            // Submission Status
            <div className="col-lg-12">
              <div className="card" style={{marginTop: "25px"}}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Submission Status</strong>
                    {" "}
                  </div>
                </div>

                <div className="card-content">
                  <div style={{marginTop: '15px'}}>
                      <p style={{marginLeft: '25px', fontWeight: 'lighter', fontSize: '20px'}}>Submission : </p>
                      <p style={{marginLeft: '25px', fontWeight: 'lighter', fontSize: '20px'}}>Time: </p>
                  </div>

                </div>
              </div>
            </div>


            ///////////////////////////////////////////////////////////////////////////////////////////////////////
            
            <div className="col-lg-12">
              <div className="card" style={{ marginTop: "25px" }}>
                <div className="card-header">
                  <div className="float-left">
                    {" "}
                    <strong>Upload your Submission Here </strong>{" "}
                  </div>
                </div>

                <div className="card-body card-block">
                  <form
                    className="form-horizontal"
                    onSubmit={(e) => handleSubmit(e)}
                    action="post"
                  >
                    <div className="row form-group">
                      <div className="col-12 col-md-12">
                        <div className="control-group" id="fields">
                          <div className="controls">
                            <div className="entry input-group upload-input-group">
                              <input
                                className="form-control"
                                name="submissionFile"
                                type="file"
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            style={{ marginTop: "25px" }}
                            className="btn btn-primary"
                          >
                            Upload
                          </button>
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FileUploader;
