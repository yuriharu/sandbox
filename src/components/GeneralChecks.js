import './Checks.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

/******** Material UI ***************************/
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Checks() {
  const [skills, setSkills] = useState({
    Word: false,
    Excel: false,
    PowerPoint: false,
    Payroll: false,
  });

  const handleChange = (event) => {
    setSkills({ ...skills, [event.target.name]: event.target.checked });
  };

  const next = () => {
    console.log(skills);
  }

  return (
    <FormGroup className="CheckGroup">
      <FormControlLabel
        control={<Checkbox checked={skills.Word} onChange={handleChange} name="Word" className="CheckItem" />}
        label="Word"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.Excel} onChange={handleChange} name="Excel" className="CheckItem" />}
        label="Excel"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.PowerPoint} onChange={handleChange} name="PowerPoint" className="CheckItem" />}
        label="Power Point"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.Payroll} onChange={handleChange} name="Payroll" className="CheckItem" />}
        label="Payroll"
      />
      <Link to="/">
        <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
          Next
        </Button>
      </Link>
    </FormGroup>
  );
}

function GeneralChecks() {
    return (
      <div>
        <h2>General Skills</h2>
        <Checks />
      </div>
    );
}

export default GeneralChecks;