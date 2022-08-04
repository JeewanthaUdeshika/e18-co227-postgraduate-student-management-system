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
        url: "http://localhost:3001/data/staff",
<<<<<<< HEAD
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      console.log(res.data);
=======
      });

>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
      setState({ ...state, result: res.data.staffUsers[0].students });

      //   console.log(state.result.students);
    }
    getData();
  }, []);

<<<<<<< HEAD
=======
  // Table data loading function
  //   const dataOfTable = state.result.map((info) => {
  //     return (
  //       <tr key={info._id}>
  //         <td>
  //           <a href={`#`} style={{ textDecoration: "none" }}>
  //             {info.students}
  //           </a>
  //         </td>
  //       </tr>
  //     );
  //   });

>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
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
