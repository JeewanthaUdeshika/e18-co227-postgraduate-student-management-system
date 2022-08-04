import React from "react";
import { Card, CardContent } from "@mui/material";

function Appointment() {
  return (
    <Card style={{ width: "1000px" }}>
      <CardContent>
        <div className="text-center">
          <h1
            style={{
              fontWeight: "lighter",
            }}
          >
            Appointment of Examiners of Thesis
          </h1>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <div
            style={{
              marginLeft: "50px",
            }}
          >
            <ul>
              <li>
                The composition of the Board of Examiners for the evaluation of
                postgraduate diploma/degree programmes
                <ul>
                  <li>
                    Form for Submission of Board of Examiners for a
                    Thesis/Report &nbsp;
                    <span>
                      <a href="http://eng.pdn.ac.lk/cerps/forms/Form%20for%20submission%20of%20Board%20of%20examiners.doc">
                        MS Word
                      </a>
                      &nbsp;
                      <a href="http://eng.pdn.ac.lk/cerps/forms/Form%20for%20submission%20of%20Board%20of%20examiners.pdf">
                        PDF
                      </a>
                    </span>
                  </li>

                  <li>
                    Form for Submission of Boards of Examiners for M.Sc. Eng./
                    M.Sc. Theses of Several Candidates &nbsp;
                    <span>
                      <a href="http://eng.pdn.ac.lk/cerps/forms/Form%20for%20submission%20of%20Board%20of%20examiners.doc">
                        MS Word
                      </a>
                      &nbsp;
                      <a href="http://eng.pdn.ac.lk/cerps/forms/Form%20for%20submission%20of%20Board%20of%20examiners.pdf">
                        PDF
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Appointment;
