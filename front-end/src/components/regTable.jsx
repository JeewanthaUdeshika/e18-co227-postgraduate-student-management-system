/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C.Ranasinghe
 * Last Modified - 02 / 08 / 2022
 */

import React from "react"; // Import react for this component
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegTable = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  // Initially set the users object array to null
  const [state, setState] = useState({
    result: [],
  });

  const handleClick = (info) => {
    // console.log(info);
    navigate("/profile", {
      state: info._id,
=======

  const student = ['Tharindu', 'Jeewantha', 'Ishan']

  const dataOfTable = () => {
    // get table row data
    // const column = Object.keys(TableData[0]);

    // console.log(column);

    /*
        1). The property of the column (fullName) shoould be changed to propert of JSON object that gives name of the user
        2). Object should be retrived as JSON array to fill the Table

        */


    const column = ["fullName"];

    return TableData.map((data) => {
      return (
        <tr>
          {column.map((v) => {
            return (
              <td>
                <a href="#" style={{ textDecoration: "none" }}>
                  {data[v]}
                </a>
              </td>
            );
          })}
        </tr>
      );
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
    });


  };

  // Retrieve all the not approved students as an array and set it to state.result
  useEffect(() => {
    async function getData() {
      const res = await axios({
        method: "GET",
        url: "http://localhost:3001/data",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      // console.log(res.data);

      setState({ ...state, result: res.data.users });
    }
    getData();
  }, []);

  // Table data loading function
  const dataOfTable = state.result.map((info) => {
    return (
      <tr key={info._id}>
        <td id={info._id} onClick={(e) => handleClick(info)}>
          <a href={`#`} style={{ textDecoration: "none" }}>
            {info.fullName}
          </a>
        </td>
        <td>{info.kind}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1 style={{ fontWeight: "lighter" }}>
        Applied Students (To be Approved)
      </h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ fontSize: "25px" }}>
              Full Name of the Student
            </th>
            <th scope="col" style={{ fontSize: "25px" }}>
              State
            </th>
          </tr>
        </thead>

        <tbody>{dataOfTable}</tbody>
      </table>
    </div>
  );
};

export default RegTable;
