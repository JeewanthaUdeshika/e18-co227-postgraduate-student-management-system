/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C.Ranasinghe
 * Last Modified - 02 / 08 / 2022
 */

import React from "react"; // Import react for this component
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewTable = () => {
  const navigate = useNavigate();
  // Initially set the users object array to null
  const [state, setState] = useState({
    result: [],
  });

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

      console.log(res.data);
      setState({ ...state, result: res.data.usersToBeReviewed.students });

      // console.log(res.data.usersToBeReviewed.students);
    }
    getData();
  }, []);

  const getData = () => {
    return state.result.map((data) => {
      return (
        <tr key={data}>
          <td>
            <a href="/reviewer" style={{ textDecoration: "none" }}>
              {data}
            </a>
          </td>
        </tr>
      );
    });
  };

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

        <tbody>{getData()}</tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
