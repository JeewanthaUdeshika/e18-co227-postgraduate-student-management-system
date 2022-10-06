/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C.Ranasinghe
 * Last Modified - 29 / 09 / 2022
 */

import React from "react"; // Import react for this component
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewTable = () => {
  let basicInfo = {};
  const navigate = useNavigate();
  // Initially set the users object array to null
  const [state, setState] = useState({
    result: [],
  });

  // handleClick function
  // This will send the id of user to the next Page
  const handleClick = (data) => {
    basicInfo = {
      studentId: data._id,
      supervisorId: data.supervisorId,
    };

    navigate("/reviewer", {
      state: basicInfo,
      // state: state,
    });
  };

  // Retrieve all the not approved students as an array and set it to state.result
  useEffect(() => {
    async function getData() {
      const res = await axios({
        method: "GET",
        url: "http://localhost:3001/data/tobereviewed",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      // console.log(res.data.usersWithRelevantNames);
      setState({ ...state, result: res.data.usersWithRelevantNames });

      // console.log(res.data.usersToBeReviewed.students);
    }
    getData();
  }, []);

  // reviewer
  // Table data loading function
  const dataOfTable = state.result.map((data) => {
    return (
      <tr key={data._id}>
        <td key={data._id} onClick={(e) => handleClick(data)}>
          <a href={"/reviewer"} style={{ textDecoration: "none" }}>
            {data.fullName}
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1 style={{ fontWeight: "lighter" }}>
        Applied Students (To be Reviewed)
      </h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ fontSize: "25px" }}>
              Full Name of the Student
            </th>
          </tr>
        </thead>

        <tbody>{dataOfTable}</tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
