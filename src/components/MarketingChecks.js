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
    SEO: false,
    EmailMarketingSoft: false,
    GoogleAnalytics: false,
  });

  const handleChange = (event) => {
    setSkills({ ...skills, [event.target.name]: event.target.checked });
  };

  const next = () => {
    let identity = localStorage.getItem("currentId");
    const { data, status } = axios.post(Const.EndPoint + "/" + identity, skills);
    if (status === 200) {
      alert("data added");
    }
  }

  return (
    <FormGroup className="CheckGroup">
      <FormControlLabel
        control={<Checkbox checked={skills.SEO} onChange={handleChange} name="SEO" className="CheckItem" />}
        label="SEO"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.EmailMarketingSoft} onChange={handleChange} name="EmailMarketingSoft" className="CheckItem" />}
        label="Email Marketing Software"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.GoogleAnalytics} onChange={handleChange} name="GoogleAnalytics" className="CheckItem" />}
        label="Google Analytics"
      />
      <Link to="/general-check">
        <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
          Next
        </Button>
      </Link>
    </FormGroup>
  );
}

function MarketingChecks() {
    return (
      <div>
        <h2>Marketing Skills</h2>
        <Checks />
      </div>
    );
}

export default MarketingChecks;