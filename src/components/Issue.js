import React from "react";
import "./Issue.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Issue(props) {
  const [issueStatus, setIssueStatus] = useState("OPEN");

  const btn_handler = (e) => {
    // name = e.target.name;
    setIssueStatus(e.target.value);
  };
  return (
    <div className="issue_container">
      <div className="issue_header">
        <div className="issue_id">
          <span>Issue_id</span>
          <span>37889</span>
        </div>
        <div
          className="issue_status"
          style={
            issueStatus === "CLOSE"
              ? { backgroundColor: "red" }
              : { backgroundColor: "green" }
          }
        >
          {issueStatus}
        </div>
        <div className="issue_date">
          <span>Date</span>
          <span>19/09/2022</span>
        </div>
      </div>
      <div className="issue_body">
        <div className="issue_office">
          <h4>Maint Dvn Trichy</h4>
        </div>
        <div className="issue_major_system">
          <h4>{props.majorSystem}</h4>
          <h5>PAYROLL</h5>
        </div>
        <div className="issue_major_system">
          <h5>twad11963</h5>
          <h5>twad11963</h5>
        </div>
      </div>
      <div className="issue_desc">
        <h5>ISSUE DESCRIPTION:</h5>
        <div className="issue_desc_box">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          incidunt ipsam mollitia voluptatem quia atque? Repellat sunt
          architecto ratione aspernatur perspiciatis rem qui molestiae
          repellendus, atque labore molestias porro iusto. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. In error sed pariatur veritatis
          harum cum commodi mollitia libero, eius consequatur dolore molestias
          aperiam, fugiat voluptatum labore dolorum alias? At, labore. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
          provident nisi illo quibusdam saepe, placeat earum! Odit mollitia ab
          eum doloremque laborum, voluptatibus rem totam deleniti fugit
          quibusdam explicabo temporibus?
        </div>
      </div>
      <div className="issue_solution">
        <h5>ISSUE SOLUTION:</h5>
        <div className="issue_solution_box">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          incidunt ipsam mollitia voluptatem quia atque? Repellat sunt
          architecto ratione aspernatur perspiciatis rem qui molestiae
          repellendus, atque labore molestias porro iusto. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. In error sed pariatur veritatis
          harum cum commodi mollitia libero, eius consequatur dolore molestias
          aperiam, fugiat voluptatum labore dolorum alias? At, labore. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
          provident nisi illo quibusdam saepe, placeat earum! Odit mollitia ab
          eum doloremque laborum, voluptatibus rem totam deleniti fugit
          quibusdam explicabo temporibus?
        </div>
      </div>
      <div className="issue_footer">
        <Button
          onClick={btn_handler}
          name="open_btn"
          value="OPEN"
          style={{ backgroundColor: "green" }}
        >
          {/* {issueStatus === "CLOSED" ? "OPEN" : "CLOSE"} */}
          OPEN
        </Button>
        <Button
          onClick={btn_handler}
          name="close_btn"
          value="CLOSE"
          style={{ backgroundColor: "red" }}
        >
          CLOSE
        </Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default Issue;
