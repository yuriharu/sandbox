import './Questions.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'

/******** Material UI ***************************/
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '40%',
    },
    formControl: {
      margin: theme.spacing(1),
      width: '40%',
    },
}));

function DropDown(skillArray) {
    const classes = useStyles();
    const [answer, setAnswer] = useState("");
    const handleChangeAnswer = (event) => {
        setAnswer(event.target.value);
    };
    let qArray = Const.Questions(skillArray);  //[[1, "q1"], [2, "q2"]...]

    return (
        <FormControl className={classes.formControl}>
          <InputLabel id="q-label">{skillArray[0]}</InputLabel>
          <Select
            labelId="q-label"
            id="q-select"
            value={answer}
            onChange={handleChangeAnswer}
          >
            {qArray.map((q, index) =>
              <MenuItem key={skillArray[0] + "-" + index} value={q[0]}>{q[1]}</MenuItem>
            )}
          </Select>
        </FormControl>
    );
}

const QuestionsList = () => {
    let questionsArray = [];
    let identity = "shunta" //localStorage.getItem("currentId");
    //const { data, status } = await axios.get(Const.EndPoint + "/" + identity);
    //console.log(data)

    // let skillsArray = [];
    // if (myData[3].CSS) { skillsArray.push(["CSS", "coding"]); }
    // if (myData[3].HTML) { skillsArray.push(["HTML", "coding"]); }
    // if (myData[3].Java) { skillsArray.push(["Java", "coding"]); }
    // if (myData[3].JavaScript) { skillsArray.push(["JavaScript", "coding"]); }
    // if (myData[3].Python) { skillsArray.push(["Python", "coding"]); }
    // if (myData[2].Bloomberg) { skillsArray.push(["Bloomberg", "analysis"]); }
    // if (myData[2].DataMining) { skillsArray.push(["Data Mining", "analysis"]); }
    // if (myData[2].PowerBI) { skillsArray.push(["PowerBI", "analysis"]); }
    // if (myData[2].Tableau) { skillsArray.push(["Tableau", "analysis"]); }
    // if (myData[2].WebScraping) { skillsArray.push(["Web Scraping", "analysis"]); }
    // if (myData[1].EmailMarketingSoft) { skillsArray.push(["Email Marketing Soft", "marketing"]); }
    // if (myData[1].GoogleAnalytics) { skillsArray.push(["Google Analytics", "marketing"]); }
    // if (myData[1].SEO) { skillsArray.push(["SEO", "marketing"]); }
    // if (myData[0].Excel) { skillsArray.push(["Excel", "general"]); }
    // if (myData[0].Payroll) { skillsArray.push(["Payroll", "general"]); }
    // if (myData[0].PowerPoint) { skillsArray.push(["Power Point", "general"]); }
    // if (myData[0].Word) { skillsArray.push(["Word", "general"]); }


    // for (let i = 0; i < skillsArray.length; i++) {
    //     questionsArray.push(DropDown(skillsArray[i]));  //skillsArray = [["Python", "coding"], ["Java", "marketing"]
    // }

    return (
        <div className="questions-list">
            <p>Hello</p>
        </div>
    );
}

function Questions() {
    return (
        <div className="questions">
            <QuestionsList />
        </div>
    );
}

export default QuestionsList;