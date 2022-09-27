import React from "react";
import Issue from "./components/Issue";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./App.css";
import InputComp from "./components/InputComp";

function App() {
  const [majorSystem, setMajorSystem] = useState("");
  const [filteredIssues, setFilteredIssues] = useState([]);

  const issues = [
    {
      id: 1,
      majorSystem: "HRMS",
    },
    {
      id: 2,
      majorSystem: "FAS",
    },
    {
      id: 3,
      majorSystem: "DCB",
    },
    {
      id: 4,
      majorSystem: "PMS",
    },
  ];

  const getMajorSystem = (majorSystem) => {
    setMajorSystem(majorSystem);
  };

  useEffect(() => {
    let filterIssue = issues.filter((issue) =>
      issue.majorSystem.includes(majorSystem)
    );

    setFilteredIssues(filterIssue);
  }, [majorSystem]);

  return (
    <Container fluid className="issues_container">
      <InputComp onSubmit={getMajorSystem} />
      <Row className="issue_rows">
        {filteredIssues.map((issue, id) => {
          return (
            <Col key={id}>
              <Issue majorSystem={issue.majorSystem} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
