import './Checks.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'

/******** Material UI ***************************/
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Checks() {
  const [skills, setSkills] = useState({
    Python: false,
    Java: false,
    JavaScript: false,
    HTML: false,
    CSS: false
  });

  const handleChange = (event) => {
    setSkills({ ...skills, [event.target.name]: event.target.checked });
  };

  const next = async () => {
    let identity = localStorage.getItem("currentId");
    const { data, status } = axios.post(Const.EndPoint + "/" + identity, skills);
    if (status === 200) {
      alert("data added");
    }
  };

  return (
    <FormGroup className="CheckGroup">
      <FormControlLabel
        control={<Checkbox checked={skills.Python} onChange={handleChange} name="Python" className="CheckItem" style={{
          color: "#00e676",
          transform: "scale(2)",
        }} />}
        label="Python"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.Java} onChange={handleChange} name="Java" className="CheckItem" />}
        label="Java"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.JavaScript} onChange={handleChange} name="JavaScript" className="CheckItem" />}
        label="JavaScript"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.HTML} onChange={handleChange} name="HTML" className="CheckItem" />}
        label="HTML"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.CSS} onChange={handleChange} name="CSS" className="CheckItem" />}
        label="CSS"
      />
      <Link to="/analysis-check">
        <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
          Next
        </Button>
      </Link>
    </FormGroup>
  );
}

function CodingChecks() {
  return (
    <div>
      <h2>Coding Skills</h2>
      <Checks />
    </div>
  );
}

export default CodingChecks;
