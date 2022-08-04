import axios from "axios";
import React, { useEffect } from "react"; // Import React to component
import { useState } from "react";
import { useLocation } from "react-router-dom";
import profilePicture from "../images/profile-picture.jpg"; // import profile picture
// import Download from '../images/download.png'

// Class to Create profile component

const Profile = () => {
  const [info, setInfo] = useState({
    profile: profilePicture, // Profile Picture
    name: "...", // Name of User
    registrationNumber: "...", // Registration Number
    address: "...", // Postal Address of the user
    email: "...", // E-Mail address of the user
    contactNumber: "...", // Conrtact Number of the user
    researchArea: "...", // Research Title of the user
    supervisors: "...", // Supervisor/s
    degree: "...", // Type of degree
    timeperiod: "...", // Time period of the degree programme

    links: {
      // JSON object that contains socail media links of the user
      github: "...",
      linkedin: "...",
      otherLinks: "...",
    },

    // variable related to edit profile function
    readOnly: true,
    editConfirm: true, // State related to the visibility of edits confirmation
    approveConfirm: false, // State related to the visibility of approve confirmation
    borderStyle: "none",
  });

  useEffect(() => {
    async function getData() {
      const data = await axios({
        method: "GET",
        url: `http://localhost:3001/user/profile`,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setInfo({
        ...info,
        name: data.data.fullName,
        email: data.data.email,
        contactNumber: data.data.telNo,
        researchArea: data.data.researchArea,
        supervisors: data.data.supervisors,
        address: data.data.postalAddress,
      });
      // console.log(state.name);
    }
    getData();
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Functions related to the Edit Profile

  // Change readonly state

  const editProfile = () => {
    setInfo({
      ...info,
      readOnly: false,
      editConfirm: false,
      approveConfirm: true,
      borderStyle: "solid",
    });
  };

  const confirmEdit = () => {
    setInfo({
      ...info,
      readOnly: true,
      editConfirm: true,
      approveConfirm: false,
      borderStyle: "none",
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="card" style={{ width: "800px" }}>
      <div className="text-center" style={{ marginTop: "20px" }}>
        <img
          src={info.profile}
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
          {info.name}
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
          {/* {this.info.registrationNumber} */}

          <input
            type="text"
            value={info.registrationNumber}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "250px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Address : </span>
          {/* {this.info.address} */}

          <input
            type="text"
            value={info.address}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "600px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>E-Mail : </span>
          {/* {this.info.email} */}

          <input
            type="text"
            value={info.email}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "400px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Contact Number : </span>
          {/* {this.info.contactNumber} */}

          <input
            type="text"
            value={info.contactNumber}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
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
          {/* {this.info.researchTitle} */}

          <input
            type="text"
            value={info.researchArea}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Supervisor/s : </span>
          {/* {this.info.supervisor} */}

          <input
            type="text"
            value={info.supervisors}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Degree : </span>
          {/* {this.info.degree} */}

          <input
            type="text"
            value={info.degree}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "100px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>Time Period : </span>
          {/* {this.info.timeperiod} */}

          <input
            type="text"
            value={info.timeperiod}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
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
          {/* {this.info.links.github} */}

          <input
            type="text"
            value={info.links.github}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
              outline: "none",
              width: "500px",
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          ></input>
        </p>

        <p className="card-text-right" style={{ fontSize: "17px" }}>
          <span style={{ fontWeight: "bold" }}>LinkedIn : </span>
          {/* {this.info.links.linkedin} */}

          <input
            type="text"
            value={info.links.linkedin}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
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
          {/* {this.info.links.otherLinks} */}

          <input
            type="text"
            value={info.links.otherLinks}
            readOnly={info.readOnly}
            style={{
              borderStyle: info.borderStyle,
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
              hidden={info.approveConfirm}
            >
              APPROVE
            </button>

            <button
              type="button"
              className="btn btn-danger"
              hidden={info.approveConfirm}
              style={{ marginLeft: "25px" }}
            >
              DECLINE
            </button>

            <button
              onClick={editProfile}
              className="btn btn-primary"
              hidden={info.approveConfirm}
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
                hidden={info.editConfirm}
                onClick={confirmEdit}
              >
                CONFIRM
              </button>

              <button
                className="btn btn-danger"
                hidden={info.editConfirm}
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
