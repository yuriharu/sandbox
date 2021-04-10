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
    Tableau: false,
    PowerBI: false,
    DataMining: false,
    WebScraping: false,
    Bloomberg: false
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
        control={<Checkbox checked={skills.Tableau} onChange={handleChange} name="Tableau" className="CheckItem" />}
        label="Tableau"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.PowerBI} onChange={handleChange} name="PowerBI" className="CheckItem" />}
        label="PowerBI"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.DataMining} onChange={handleChange} name="DataMining" className="CheckItem" />}
        label="Data Mining"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.WebScraping} onChange={handleChange} name="WebScraping" className="CheckItem" />}
        label="Web Scraping"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.Bloomberg} onChange={handleChange} name="Bloomberg" className="CheckItem" />}
        label="Bloomberg"
      />
      <Link to="/marketing-check">
        <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
          Next
        </Button>
      </Link>
    </FormGroup>
  );
}

function AnalysisChecks() {
    return (
      <div>
        <h2>Analysis Skills</h2>
        <Checks />
      </div>
    );
}

export default AnalysisChecks;