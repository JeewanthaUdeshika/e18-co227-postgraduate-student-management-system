import axios from "axios";
import React, { useEffect } from "react"; // Import React to component
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import profilePicture from "../images/profile-picture.jpg"; // import profile picture
// import Download from '../images/download.png'

// Class to Create profile component

const Profile = () => {
  // const navigate = useNavigate();
  const [state, setState] = useState({
    profile: profilePicture, // Profile Picture
    name: "Tharindu Chamod", // Name of User
    // name: "", // Name of User
    registrationNumber: "E/18/173", // Registration Number
    address: "187/5, Sri Gunananda Mawatha, Medagoda, Warakapola", // Postal Address of the user
    email: "someone@gmail.com", // E-Mail address of the user
    contactNumber: "0766624632", // Conrtact Number of the user
    researchArea: "Research Title", // Research Title of the user
    supervisors: "DR. Upul Jayasinghe", // Supervisor/s
    degree: "PhD", // Type of degree
    timeperiod: "Full Time", // Time period of the degree programme

    links: {
      // JSON object that contains socail media links of the user
      github: "Github Link",
      linkedin: "LinkedIn Link",
      otherLinks: "Other Links",
    },

    // variable related to edit profile function
    readOnly: true,
    editConfirm: true, // State related to the visibility of edits confirmation
    approveConfirm: false, // State related to the visibility of approve confirmation
    borderStyle: "none",
  });

  useEffect(() => {
    async function getData() {
      const { data } = await axios({
        method: "GET",
        // `http://localhost:5000/api/v1/tours/5c88fa8cf4afda39709c2955`
        // url: `http://localhost:3001/user/62d00f9226be79e782c6be84`,
        url: "http://localhost:3001/user/profile",
        withCredentials: true,
      });

      console.log(data);

      setState({
        ...state,
        name: data.user.fullName,
        email: data.user.email,
        contactNumber: data.user.telNo,
        researchArea: data.user.researchArea,
        supervisors: data.user.supervisors,
        address: data.user.postalAddress,
      });
      // console.log(state.name);
    }
    getData();
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Functions related to the Edit Profile

  // Change readonly state

  const editProfile = () => {
    setState({ ...state, readOnly: false }); // Set editable inputs
    setState({ ...state, editConfirm: false }); // Show edit confirm and cancel buttons
    setState({ ...state, approveConfirm: true }); // Hide approval related buttons
    setState({ ...state, borderStyle: "solid" }); // Set boarder Style
  };

  const confirmEdit = () => {
    setState({ ...state, readOnly: true }); // Set editable inputs
    setState({ ...state, editConfirm: true }); // Hide edit confirm and cancel buttons
    setState({ ...state, approveConfirm: false }); // show approval buttons
    setState({ ...state, borderStyle: "none" }); // Set boarder Style
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="card" style={{ width: "800px" }}>
      <div className="text-center" style={{ marginTop: "20px" }}>
        <img
          src={state.profile}
          width="170px"
          height="170px"
          className="rounded"
          alt="profile"
        />
      </div>

      {/* Basic details including Name as title of the card */}

      <div className="card-body">
        <p
          className="card-title"
          style={{
            fontSize: "30px",
            // fontWeight: "bold",
            fontWeight: "bolder",
          }}
        >
          {state.name}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "25px",
          }}
        >
          <h4 style={{ color: "gray", fontWeight: "lighter" }}>
            Personal Information
          </h4>
          <div
            style={{
              flex: 1,
              height: "3px",
              backgroundColor: "#DADCE0",
              marginLeft: "15px",
            }}
          />
        </div>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Registration Number : </span>
          {/* {this.state.registrationNumber} */}

          <input
            type="text"
            value={state.registrationNumber}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "250px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Address : </span>
          {/* {this.state.address} */}

          <input
            type="text"
            value={state.address}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "600px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>E-Mail : </span>
          {/* {this.state.email} */}

          <input
            type="text"
            value={state.email}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "400px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Contact Number : </span>
          {/* {this.state.contactNumber} */}

          <input
            type="text"
            value={state.contactNumber}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "200px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        {/* Post Graduate Information */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "25px",
          }}
        >
          <h4 style={{ color: "gray", fontWeight: "lighter" }}>
            Post-Graduate Information
          </h4>
          <div
            style={{
              flex: 1,
              height: "3px",
              backgroundColor: "#DADCE0",
              marginLeft: "15px",
            }}
          />
        </div>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Research Area : </span>
          {/* {this.state.researchTitle} */}

          <input
            type="text"
            value={state.researchArea}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Supervisor/s : </span>
          {/* {this.state.supervisor} */}

          <input
            type="text"
            value={state.supervisors}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Degree : </span>
          {/* {this.state.degree} */}

          <input
            type="text"
            value={state.degree}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "100px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Time Period : </span>
          {/* {this.state.timeperiod} */}

          <input
            type="text"
            value={state.timeperiod}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "150px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        {/* Social Media Information */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "25px",
          }}
        >
          <h4 style={{ color: "gray", fontWeight: "lighter" }}>Social Media</h4>
          <div
            style={{
              flex: 1,
              height: "3px",
              backgroundColor: "#DADCE0",
              marginLeft: "15px",
            }}
          />
        </div>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>GitHub : </span>
          {/* {this.state.links.github} */}

          <input
            type="text"
            value={state.links.github}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>LinkedIn : </span>
          {/* {this.state.links.linkedin} */}

          <input
            type="text"
            value={state.links.linkedin}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>
            Personal Website / Other :{" "}
          </span>
          {/* {this.state.links.otherLinks} */}

          <input
            type="text"
            value={state.links.otherLinks}
            readOnly={state.readOnly}
            style={{
              borderStyle: state.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        {/* Files And Others */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "25px",
          }}
        >
          <h4 style={{ color: "gray", fontWeight: "lighter" }}>User Files</h4>
          <div
            style={{
              flex: 1,
              height: "3px",
              backgroundColor: "#DADCE0",
              marginLeft: "15px",
            }}
          />
        </div>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>
            Download User Files by clicking DOWNLOAD Button{" "}
          </span>

          <button className="btn btn-default">
            {/* <img src={Download} width="60px" height="60px" /> */}
            <span>
              <i className="fa fa-download" aria-hidden="true"></i>
            </span>
          </button>
        </p>

        {/* Buttons to take actions */}

        <div className="row">
          <div className="col-sm">
            <button
              type="button"
              className="btn btn-success"
              hidden={state.approveConfirm}
            >
              APPROVE
            </button>

            <button
              type="button"
              className="btn btn-danger"
              hidden={state.approveConfirm}
              style={{ marginLeft: "25px" }}
            >
              DECLINE
            </button>

            <button
              onClick={editProfile}
              className="btn btn-primary"
              hidden={state.approveConfirm}
              style={{ marginLeft: "25px" }}
            >
              EDIT PROFILE
            </button>
          </div>

          {/* Buttons To confirm edits or cancel edits */}

          <div className="col-sm">
            <div className="text-center">
              <button
                className="btn btn-success"
                hidden={state.editConfirm}
                onClick={confirmEdit}
              >
                CONFIRM
              </button>

              <button
                className="btn btn-danger"
                hidden={state.editConfirm}
                style={{ marginLeft: "25px" }}
                onClick={confirmEdit}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
