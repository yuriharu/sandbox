import './CodingChecks.css';
import React, { useState, useEffect } from 'react';

/******** Material UI ***************************/
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CodingCheck() {
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

  return (
    <FormGroup id="codingCheckGroup">
      <FormControlLabel
        control={<Checkbox checked={skills.Python} onChange={handleChange} name="Python" className="codingCheckItem" />}
        label="Python"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.Java} onChange={handleChange} name="Java" className="codingCheckItem" />}
        label="Java"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.JavaScript} onChange={handleChange} name="JavaScript" className="codingCheckItem" />}
        label="JavaScript"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.HTML} onChange={handleChange} name="HTML" className="codingCheckItem" />}
        label="HTML"
      />
      <FormControlLabel
        control={<Checkbox checked={skills.CSS} onChange={handleChange} name="CSS" className="codingCheckItem" />}
        label="CSS"
      />
    </FormGroup>
  );
}

export default CodingCheck;
