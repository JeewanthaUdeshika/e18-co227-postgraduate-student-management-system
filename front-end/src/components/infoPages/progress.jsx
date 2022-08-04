import React from "react";
import { Card, CardContent } from "@mui/material";

function ProgressReview() {
  return (
    <Card style={{ width: "1000px" }}>
      <CardContent>
        <div className="text-center">
          <h1
            style={{
              fontWeight: "lighter",
            }}
          >
            Progress Review - M.Phil./Ph.D.
          </h1>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            Half-yearly and yearly reviews of research leading to M.Phil./Ph.D.
            degrees are held to monitor progress and to keep track of the
            student's estimated date of completion. It is based upon a
            self-evaluation form whereby the student reviews the stated
            objectives, success in attaining objectives, publications,
            conference attendance, etc.. In addition, it allows the student and
            his/her supervisor the opportunity to identify achievable targets
            for the coming 12 months.
          </p>

          <div
            style={{
              marginLeft: "150px",
            }}
          >
            <ul>
              <li>
                Half-yearly Progress Reports should be submitted through
                Supervisor/s to the respective Head of the Department (HOD).
              </li>

              <li>
                Yearly Progress Reports should be submitted to the Faculty
                Higher Degrees Committee (FHDC) through Supervisor/s, respective
                Head of the Department (HOD), and Director/CERPS
                <ul>
                  <li>
                    The application for a research-based programme should
                    accompany a research proposal and the consent of one or more
                    supervisors
                  </li>

                  <li>The composition of the Review Panel as follows</li>

                  <ul>
                    <li>Head of the Department or his/her nominee</li>

                    <li>
                      One member from outside the department (nominated by the
                      HOD and approved by the FHDC
                    </li>

                    <li>Supervisor(s) (as observer(s))</li>
                  </ul>

                  <li>
                    The panel will submit their recommendations to the FHDC
                    together with the Progress Report
                  </li>
                </ul>
              </li>

              <li>
                The panel will submit their recommendations to the FHDC together
                with the Progress Report
                <ul>
                  <li>
                    <span>
                      <a href="http://eng.pdn.ac.lk/cerps/downloads/progress_review/Half%20yearly_Yearly%20Progress%20Report.doc">
                        MS Word
                      </a>
                      &nbsp;/
                      <a href="http://eng.pdn.ac.lk/cerps/downloads/progress_review/Half%20yearly_Yearly%20Progress%20Report.pdf">
                        PDF
                      </a>
                    </span>
                  </li>
                </ul>
              </li>

              <li>
                Staff: Template for Nomination of Review Panels for
                M.Phil./Ph.D. Yearly Progress Reports
                <ul>
                  <li>
                    <span>
                      <a href="http://eng.pdn.ac.lk/cerps/downloads/progress_review/Form%20for%20nomination%20of%20review%20panels%20for%20MPhil,%20PhD%20annual%20progress%20reports.doc">
                        MS Word
                      </a>
                      &nbsp;/
                      <a href="http://eng.pdn.ac.lk/cerps/downloads/progress_review/Form%20for%20nomination%20of%20review%20panels%20for%20MPhil,%20PhD%20annual%20progress%20reports.pdf">
                        PDF
                      </a>
                    </span>
                  </li>
                </ul>
              </li>

              <li>
                Staff: Template for Submission of Review Panel Recommendation of
                M.Phil./Ph.D. Yearly Progress Reports
                <ul>
                  <li>
                    <span>
                      <a href="http://eng.pdn.ac.lk/cerps/downloads/Evaluation%20of%20MPhil-PhD%20Annual%20Reports_Form%20for%20Submission%20of%20Review%20Panel%20Recommendations.doc">
                        MS Word
                      </a>
                      &nbsp;/
                      <a href="http://eng.pdn.ac.lk/cerps/downloads/progress_review/Evaluation%20of%20MPhil-PhD%20Annual%20Reports_Form%20for%20Submission%20of%20Review%20Panel%20Recommendations.pdf">
                        PDF
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr className="bg-info">
                  <th scope="col">Type of Postgraduate (PG) Programme</th>
                  <th scope="col">Degree / Diploma</th>
                  <th scope="col" colSpan={2}>
                    Minimum Duration (Months)
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-info" style={{ fontWeight: "bold" }}>
                  <td></td>
                  <td></td>
                  <td>Full Time</td>
                  <td>Part Time</td>
                </tr>

                <tr>
                  <td rowSpan="3" style={{ fontWeight: "bold" }}>
                    PG Research Programme &nbsp; (Fully Research Based
                    Programmes)
                  </td>
                  <td>PG Dip</td>
                  <td>8</td>
                  <td>12</td>
                </tr>

                <tr>
                  <td>MPhill</td>
                  <td>24</td>
                  <td>36</td>
                </tr>

                <tr>
                  <td>PhD</td>
                  <td>36</td>
                  <td>54</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProgressReview;
