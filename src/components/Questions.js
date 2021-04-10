import './Questions.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'

/******** Material UI ***************************/
import Button from '@material-ui/core/Button';
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

const QuestionsList = () => {
    let qArray = [];
    let identity = "Sayo" //localStorage.getItem("currentId");
    const classes = useStyles();
    const [myData, setMyData] = useState([]);
    const [a1, setA1] = useState();
    const [a2, setA2] = useState();
    const [a3, setA3] = useState();
    const [a4, setA4] = useState();
    const handleChangeAnswer1 = (event) => {
        setA1(event.target.value);
    };
    const handleChangeAnswer2 = (event) => {
        setA2(event.target.value);
    };
    const handleChangeAnswer3 = (event) => {
        setA3(event.target.value);
    };
    const handleChangeAnswer4 = (event) => {
        setA4(event.target.value);
    };

    const fetchData = async () => {
        const { data, status } = await axios.get(Const.EndPoint + "/" + identity);
        if (status === 200) {
            setMyData(data);
        }
    }

    const submit = () => {
        ["JavaScript", a1]
        ["PowerBI", a2]
        ["SEO", a3]
        ["Excel", a4]
    }

    useEffect(() => {
        fetchData();
    }, [])

    // if (myData.length > 0) {
    //     let skillsArray = [];
    //     if (myData[3].CSS) { skillsArray.push(["CSS", "coding"]); }
    //     if (myData[3].HTML) { skillsArray.push(["HTML", "coding"]); }
    //     if (myData[3].Java) { skillsArray.push(["Java", "coding"]); }
    //     if (myData[3].JavaScript) { skillsArray.push(["JavaScript", "coding"]); }
    //     if (myData[3].Python) { skillsArray.push(["Python", "coding"]); }
    //     if (myData[2].Bloomberg) { skillsArray.push(["Bloomberg", "analysis"]); }
    //     if (myData[2].DataMining) { skillsArray.push(["Data Mining", "analysis"]); }
    //     if (myData[2].PowerBI) { skillsArray.push(["PowerBI", "analysis"]); }
    //     if (myData[2].Tableau) { skillsArray.push(["Tableau", "analysis"]); }
    //     if (myData[2].WebScraping) { skillsArray.push(["Web Scraping", "analysis"]); }
    //     if (myData[1].EmailMarketingSoft) { skillsArray.push(["Email Marketing Soft", "marketing"]); }
    //     if (myData[1].GoogleAnalytics) { skillsArray.push(["Google Analytics", "marketing"]); }
    //     if (myData[1].SEO) { skillsArray.push(["SEO", "marketing"]); }
    //     if (myData[0].Excel) { skillsArray.push(["Excel", "general"]); }
    //     if (myData[0].Payroll) { skillsArray.push(["Payroll", "general"]); }
    //     if (myData[0].PowerPoint) { skillsArray.push(["Power Point", "general"]); }
    //     if (myData[0].Word) { skillsArray.push(["Word", "general"]); }

    //     for (let i = 0; i < skillsArray.length; i++) {
    //         qArray.push(Const.Questions(skillsArray[i]));
    //     }

    //     console.log(qArray);
    //     return (
    //         <div className="questions-list">
    //             <FormControl className={classes.formControl}>
    //                 <InputLabel id="q-1">JavaScript</InputLabel>
    //                 <Select
    //                     labelId="q-1"
    //                     id="q1-select"
    //                     value={a1}
    //                     onChange={handleChangeAnswer1}
    //                 >
    //                     {qArray[0].map((q, index) =>
    //                     <MenuItem key={1 + "-" + index} value={q[0]}>{q[1]}</MenuItem>
    //                     )}
    //                 </Select>
    //             </FormControl>
    //             <FormControl className={classes.formControl}>
    //                 <InputLabel id="q-2">PowerBI</InputLabel>
    //                 <Select
    //                     labelId="q-2"
    //                     id="q2-select"
    //                     value={a2}
    //                     onChange={handleChangeAnswer2}
    //                 >
    //                     {qArray[1].map((q, index) =>
    //                     <MenuItem key={2 + "-" + index} value={q[0]}>{q[1]}</MenuItem>
    //                     )}
    //                 </Select>
    //             </FormControl>
    //             <FormControl className={classes.formControl}>
    //                 <InputLabel id="q-3">SEO</InputLabel>
    //                 <Select
    //                     labelId="q-3"
    //                     id="q3-select"
    //                     value={a3}
    //                     onChange={handleChangeAnswer3}
    //                 >
    //                     {qArray[2].map((q, index) =>
    //                     <MenuItem key={3 + "-" + index} value={q[0]}>{q[1]}</MenuItem>
    //                     )}
    //                 </Select>
    //             </FormControl>
    //             <FormControl className={classes.formControl}>
    //                 <InputLabel id="q-4">Excel</InputLabel>
    //                 <Select
    //                     labelId="q-4"
    //                     id="q4-select"
    //                     value={a4}
    //                     onChange={handleChangeAnswer4}
    //                 >
    //                     {qArray[3].map((q, index) =>
    //                     <MenuItem key={4 + "-" + index} value={q[0]}>{q[1]}</MenuItem>
    //                     )}
    //                 </Select>
    //             </FormControl>
    //             <Link to="/result">
    //                 <Button renderAs="button" variant="contained" id="next-button" onClick={submit}>
    //                     Submit
    //                 </Button>
    //             </Link>
    //         </div>
    //     );

    // } else if (myData.length > 0) {
    //     console.log("Still Loading!")
    // }

    return (
        <div className="questions-list">
            <FormControl className={classes.formControl}>
                <InputLabel id="q-1">JavaScript</InputLabel>
                <Select
                    labelId="q-1"
                    id="q1-select"
                    value={a1}
                    onChange={handleChangeAnswer1}
                >
                    <MenuItem key={"1-1"} value={1}>{"I've just started but I know the basics of JavaScript"}</MenuItem>
                    <MenuItem key={"1-2"} value={2}>{"I have taken a class in JavaScript"}</MenuItem>
                    <MenuItem key={"1-3"} value={3}>{"I have used JavaScript consistently for about a year"}</MenuItem>
                    <MenuItem key={"1-4"} value={4}>{"I have spen 2+ years using JavaScript consistently"}</MenuItem>
                    <MenuItem key={"1-5"} value={5}>{"I have completed a capstone or equivelent size project in JavaScript"}</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="q-2">PowerBI</InputLabel>
                <Select
                    labelId="q-2"
                    id="q2-select"
                    value={a2}
                    onChange={handleChangeAnswer2}
                >
                    <MenuItem key={"2-1"} value={1}>{"I've just started but I know the basics of PowerBI"}</MenuItem>
                    <MenuItem key={"2-2"} value={2}>{"I have used PowerBI in one of my classes"}</MenuItem>
                    <MenuItem key={"2-3"} value={3}>{"I have used PowerBI in a few of my classes"}</MenuItem>
                    <MenuItem key={"2-4"} value={4}>{"I have spen 2+ years using PowerBI consistently"}</MenuItem>
                    <MenuItem key={"2-5"} value={5}>{"I have completed large projects using PowerBI or used it in past internships"}</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="q-3">SEO</InputLabel>
                <Select
                    labelId="q-3"
                    id="q3-select"
                    value={a3}
                    onChange={handleChangeAnswer3}
                >
                    <MenuItem key={"3-1"} value={1}>{"I've never used SEO, but understand the basics"}</MenuItem>
                    <MenuItem key={"3-2"} value={2}>{"We discussed SEO in my classes and how to use it, but I don't have hands one experience"}</MenuItem>
                    <MenuItem key={"3-3"} value={3}>{"I have used SEO on my own, but not in actual campaigns"}</MenuItem>
                    <MenuItem key={"3-4"} value={4}>{"I have used SEO in small scale campaigns (less than 1000$)"}</MenuItem>
                    <MenuItem key={"3-5"} value={5}>{"I haved used SEO in Large scale campaigns (more than 1000$)"}</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="q-4">Excel</InputLabel>
                <Select
                    labelId="q-4"
                    id="q4-select"
                    value={a4}
                    onChange={handleChangeAnswer4}
                >
                    <MenuItem key={"4-1"} value={1}>{"I've just started but I know the basics of Excel"}</MenuItem>
                    <MenuItem key={"4-2"} value={2}>{"I have taken a class in Excel"}</MenuItem>
                    <MenuItem key={"4-3"} value={3}>{"I have used Excel consistently for about a year"}</MenuItem>
                    <MenuItem key={"4-4"} value={4}>{"I have spen 2+ years using Excel consistently"}</MenuItem>
                    <MenuItem key={"4-5"} value={5}>{"I am an advance users who knows all the shortcuts and am a powerusers"}</MenuItem>
                </Select>
            </FormControl>
            <Link to="/result">
                <Button renderAs="button" variant="contained" id="next-button" onClick={submit}>
                    Submit
                </Button>
            </Link>
        </div>
    );
}

export default QuestionsList;