import React, { useState } from "react";
import "./InputComp.css";
import { InputGroup, Form, Button } from "react-bootstrap";

function InputComp(props) {
  const [majorSytsem, setMajorSystem] = useState("");
  const [minorSytsem, setMinorSystem] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(majorSytsem);
  };
  return (
    <InputGroup className="mb-3 input_comp">
      <InputGroup.Text id="basic-addon1">MAJOR SYSTEM</InputGroup.Text>
      <Form.Select
        onChange={(e) => {
          setMajorSystem(e.target.value);
        }}
      >
        <option value="FAS">FAS</option>
        <option value="HRMS">HRMS</option>
        <option value="PMS">PMS</option>
      </Form.Select>

      <InputGroup.Text id="basic-addon1">MINOR SYSTEM</InputGroup.Text>
      <Form.Select
        onChange={(e) => {
          setMinorSystem(e.target.value);
        }}
      >
        <option value="FAS">FAS</option>
        <option value="DCB">DCB</option>
        <option value="PAYROLL">PAYROLL</option>
      </Form.Select>
      <InputGroup.Text id="basic-addon1">FROM DATE</InputGroup.Text>
      <Form.Control type="date" name="duedate" placeholder="Due date" />
      <InputGroup.Text id="basic-addon1">TO DATE</InputGroup.Text>
      <Form.Control type="date" name="duedate" placeholder="Due date" />
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </InputGroup>
  );
}

export default InputComp;
