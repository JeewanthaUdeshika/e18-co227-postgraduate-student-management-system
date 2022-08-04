import React from "react"; //Imported react to this component
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import Material UI Back button to this component
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
// Imprting Libraries for table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function AdminDashboard() {
  // Initially set the users object array to null
  const [state, setState] = useState({
    result: [],
    columns: [
      //Basic Student's detail
      {
        id: "fullName",
        label: "Name",
        minWidth: 170,
        align: "center",
      },

      {
        id: "regNo",
        label: "Registration Number",
        minWidth: 100,
        align: "center",
      },

      {
        id: "RegisteredDate",
        label: "Date of Registration",
        minWidth: 150,
        align: "center",
        // format: (value) => value.toLocaleString("en-US"),
        format: (value) => value.toLocaleString("en-US").substring(0, 9),
      },

      {
        id: "studyMode",
        label: "Part Time / Full Time",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "postalAddress",
        label: "Postal Address",
        minWidth: 250,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "email",
        label: "E-Mail Address",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "telNo",
        label: "Contact Number",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      //Postgraduate details

      {
        id: "researchArea",
        label: "Research Title",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "supervisors",
        label: "Supervisor/s",
        minWidth: 220,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "examiners",
        label: "Examiner/s",
        minWidth: 220,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      //  Yearly reports titles
      //  (Year 1)
      {
        id: "halfYear1",
        label: "Half-Yearly",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfHalfYear1",
        label: "Date of Report Submitted",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "year1",
        label: "Yearly",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfyear1",
        label: "Date of Report Submitted",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      //  (Year 2)
      {
        id: "halfYear2",
        label: "Half-Yearly",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfHalfYear2",
        label: "Date of Report Submitted",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "year2",
        label: "Yearly",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfyear2",
        label: "Date of Report Submitted",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      //  (Year 3)
      {
        id: "halfYear3",
        label: "Half-Yearly",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfHalfYear3",
        label: "Date of Report Submitted",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "year3",
        label: "Yearly",
        minWidth: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfyear3",
        label: "Date of Report Submitted",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      //Other details of Final Submission and Date of completion

      {
        id: "dateOfThesis",
        label: "Date of Draft Thesis Submission",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "effectctiveDate",
        label: "Effective Date of Degree",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },

      {
        id: "dateOfCompletion",
        label: "Date of Completion",
        minWidth: 150,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },
    ],
  });

  // Retrieve all the not approved students as an array and set it to state.result
  useEffect(() => {
    async function getData() {
      const res = await axios({
        method: "GET",
        url: "http://localhost:3001/data/admin/dashboard",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      console.log(res.data.users);

      setState({ ...state, result: res.data.users });
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div
        className="row justify-content-md-center"
        style={{
          marginTop: "25px",
        }}
      >
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              {/* Main Headers that grouping sub headers under them */}
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={7}
                  style={{
                    fontFamily: "initial",
                    fontSize: "25px",
                    fontWeight: "lighter",
                    background: "lightyellow",
                  }}
                >
                  STUDENT'S DETAILS
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={3}
                  style={{
                    fontFamily: "initial",
                    fontSize: "25px",
                    fontWeight: "lighter",
                    background: "lightgreen",
                  }}
                >
                  POSTGRADUATE DETAILS
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={12}
                  style={{
                    fontFamily: "initial",
                    fontSize: "25px",
                    fontWeight: "lighter",
                    background: "lightpink",
                  }}
                >
                  PROGRESS REPORTS
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={3}
                  style={{
                    fontFamily: "initial",
                    fontSize: "25px",
                    fontWeight: "lighter",
                    background: "lightgray",
                  }}
                >
                  OTHER DETAILS
                </TableCell>
              </TableRow>

              {/* Years of PostGraduate Program ( Make Cordinator easy to manage) */}

              <TableRow>
                <TableCell
                  align="center"
                  colSpan={7}
                  style={{
                    top: 57,
                    background: "lightyellow",
                  }}
                ></TableCell>

                <TableCell
                  align="center"
                  colSpan={3}
                  style={{
                    top: 57,
                    background: "lightgreen",
                  }}
                ></TableCell>

                <TableCell
                  align="center"
                  colSpan={4}
                  style={{
                    top: 57,
                    fontFamily: "initial",
                    fontSize: "23px",
                    fontWeight: "bold",
                    background: "whitesmoke",
                  }}
                >
                  YEAR 1
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={4}
                  style={{
                    top: 57,
                    fontFamily: "initial",
                    fontSize: "23px",
                    fontWeight: "bold",
                    background: "wheat",
                  }}
                >
                  YEAR 2
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={4}
                  style={{
                    top: 57,
                    fontFamily: "initial",
                    fontSize: "23px",
                    fontWeight: "bold",
                    background: "whitesmoke",
                  }}
                >
                  YEAR 3
                </TableCell>

                <TableCell
                  align="center"
                  colSpan={3}
                  style={{
                    top: 57,
                    background: "lightgray",
                  }}
                ></TableCell>
              </TableRow>

              {/* Table Header That are mapped to the Data */}

              <TableRow>
                {state.columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      top: 114,
                      minWidth: column.minWidth,
                      fontWeight: "bolder",
                      fontSize: "18px",
                      background: "cyan",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {state.result.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {state.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;
