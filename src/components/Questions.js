import './Questions.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'
import styled, { css } from "styled-components";
/******** Material UI ***************************/
//import Button from '@material-ui/core/Button';
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
        let identity = localStorage.getItem("currentId");
        const newScore = {
            JavaScript: a1,
            PowerBI: a2,
            SEO: a3,
            Excel: a4,
         };
        const { data, status } = axios.post(Const.EndPoint + "/" + identity + "-score", newScore);
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
//                     <MenuItem key={"1-1"} value={1}>{"I've just started but I know the basics of JavaScript"}</MenuItem>
//                     <MenuItem key={"1-2"} value={2}>{"I have taken a class in JavaScript"}</MenuItem>
//                     <MenuItem key={"1-3"} value={3}>{"I have used JavaScript consistently for about a year"}</MenuItem>
//                     <MenuItem key={"1-4"} value={4}>{"I have spen 2+ years using JavaScript consistently"}</MenuItem>
//                     <MenuItem key={"1-5"} value={5}>{"I have completed a capstone or equivelent size project in JavaScript"}</MenuItem>
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
//                     <MenuItem key={"2-1"} value={1}>{"I've just started but I know the basics of PowerBI"}</MenuItem>
//                     <MenuItem key={"2-2"} value={2}>{"I have used PowerBI in one of my classes"}</MenuItem>
//                     <MenuItem key={"2-3"} value={3}>{"I have used PowerBI in a few of my classes"}</MenuItem>
//                     <MenuItem key={"2-4"} value={4}>{"I have spen 2+ years using PowerBI consistently"}</MenuItem>
//                     <MenuItem key={"2-5"} value={5}>{"I have completed large projects using PowerBI or used it in past internships"}</MenuItem>
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
//                     <MenuItem key={"3-1"} value={1}>{"I've never used SEO, but understand the basics"}</MenuItem>
//                     <MenuItem key={"3-2"} value={2}>{"We discussed SEO in my classes and how to use it, but I don't have hands one experience"}</MenuItem>
//                     <MenuItem key={"3-3"} value={3}>{"I have used SEO on my own, but not in actual campaigns"}</MenuItem>
//                     <MenuItem key={"3-4"} value={4}>{"I have used SEO in small scale campaigns (less than 1000$)"}</MenuItem>
//                     <MenuItem key={"3-5"} value={5}>{"I haved used SEO in Large scale campaigns (more than 1000$)"}</MenuItem>
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
//                     <MenuItem key={"4-1"} value={1}>{"I've just started but I know the basics of Excel"}</MenuItem>
//                     <MenuItem key={"4-2"} value={2}>{"I have taken a class in Excel"}</MenuItem>
//                     <MenuItem key={"4-3"} value={3}>{"I have used Excel consistently for about a year"}</MenuItem>
//                     <MenuItem key={"4-4"} value={4}>{"I have spen 2+ years using Excel consistently"}</MenuItem>
//                     <MenuItem key={"4-5"} value={5}>{"I am an advance users who knows all the shortcuts and am a powerusers"}</MenuItem>
//                 </Select>
//             </FormControl>
//             <Link to="/result">
//                 <Button renderAs="button" variant="contained" id="next-button" onClick={submit}>
//                     Submit
//                 </Button>
//             </Link>
//         </div>
//     );
// }
return (
    <Container>
      <CodingSkillsBackgroundMask>
        <Banner>
          <Rectangle9>
            <ShowUsYourStuff>Show us your Stuff</ShowUsYourStuff>
          </Rectangle9>
          <Rectangle10></Rectangle10>
          <Rectangle11>
            <WhatSkillsDoYouHave>What skills do you have?</WhatSkillsDoYouHave>
          </Rectangle11>
        </Banner>
        <Coding>GENERAL</Coding>
        <JavaScript>
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
        </JavaScript>
        <Css>
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
        </Css>
        <Java>
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
        </Java>
        <Python>
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
        </Python>
        <Link to="/result" className="next-button">
        <Paginate>
          <Rectangle13>
          <Next renderAs="button" variant="contained" className="next-button" onClick={submit}>Submit</Next>
          </Rectangle13>
        </Paginate>
        </Link>
        {/* <ProgressBar>
          <ProgressBarBackground>
            <Rectangle15Row>
              <Rectangle15></Rectangle15>
              <Rectangle16Stack>
                <Rectangle16></Rectangle16>
                <Rectangle17></Rectangle17>
              </Rectangle16Stack>
              <Rectangle18></Rectangle18>
            </Rectangle15Row>
          </ProgressBarBackground>
        </ProgressBar> */}
      </CodingSkillsBackgroundMask>
    </Container>
  );
  
}
  const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  `;
  
  const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border:none
  `;
  const CodingSkillsBackgroundMask = styled.div`
  height: 812px;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  `;
  
  const Banner = styled.div`
  height: 197px;
  width: 100vw;
  flex-direction: column;
  display: flex;
  `;
  
  const Rectangle9 = styled.div`
  height: 118px;
  width: 100vw;
  background-color: rgba(255,117,57,1);
  flex-direction: column;
  display: flex;
  `;
  
  const ShowUsYourStuff = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  text-align: center;
  font-size: 8vw;
  font-weight: 700;
  font-style: normal;
  margin-top: 50px;
  margin-left: 0;
  `;
  
  const Rectangle10 = styled.div`
  height: 32px;
  width: 100vw;
  background-color: rgba(107,118,113,1);
  `;
  
  const Rectangle11 = styled.div`
  height: 47px;
  width: 100vw;
  background-color: rgba(28,118,143,1);
  flex-direction: column;
  display: flex;
  `;
  
  const WhatSkillsDoYouHave = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  text-align: center;
  font-size: 5vw;
  font-weight: 400;
  font-style: normal;
  margin-top: 5px;
  margin-left: 0px;
  `;
  
  const Coding = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  margin-top: 33px;
  text-align: center;
  margin-left: 0px;
  `;
  
  const JavaScript = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const ItemRow = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const Html = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item1 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button2 = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const Item1Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const Css = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item2 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button3 = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const Item2Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const Java = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item3 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button4 = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const Item3Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const Python = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item4 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button5 = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const Item4Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const Sql = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item5 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button6 = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const Item5Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const MongoDb = styled.div`
  height: 43px;
  width: 60vw;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 27vw;
  `;
  
  const Item6 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 4vw;
  font-weight: 400;
  font-style: normal;
  `;
  
  const Button7 = styled.div`
  margin-right: 10vw;
  margin-top: 10px;
  `;
  
  const Item6Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 16px;
  margin-left: 6px;
  margin-top: 15px;
  `;
  
  const Paginate = styled.div`
  height: 49px;
  width: 60vw;
  flex-direction: column;
  display: flex;
  margin-top: 210px;
  margin-left: 20vw;
  `;
  
  const Rectangle13 = styled.div`
  height: 49px;
  width: 60vw;
  border-width: 1px;
  border-color: rgba(255,117,57,1);
  border-top-left-radius: 66.5px;
  border-top-right-radius: 66.5px;
  border-bottom-right-radius: 66.5px;
  border-bottom-left-radius: 66.5px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  border-style: solid;
  `;
  
  const Next = styled.span`
  font-family: Roboto;
  color: rgba(255,117,57,1);
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  margin-top: 2%;
  margin-left: 0px;
  `;
  
  const ProgressBar = styled.div`
  height: 9px;
  width: 100vw;
  flex-direction: column;
  display: flex;
  margin-top: 16px;
  margin-left: -9px;
  `;
  
  const ProgressBarBackground = styled.div`
  height: 9px;
  width: 393px;
  background-color: transparent;
  flex-direction: row;
  display: flex;
  `;
  
  const Rectangle15 = styled.div`
  height: 9px;
  width: 25vw;
  border-width: 1px;
  border-color: rgba(255,117,57,1);
  background-color: rgba(255,255,255,1);
  border-style: solid;
  `;
  
  const Rectangle16 = styled.div`
  position: absolute;
  top: 0px;
  margin-left: 0vw;
  height: 9px;
  width: 25vw;
  border-width: 1px;
  border-color: rgba(255,117,57,1);
  background-color: rgba(255,255,255,1);
  border-style: solid;
  `;
  
  const Rectangle17 = styled.div`
  position: absolute;
  top: 0px;
  left: 25vw;
  height: 9px;
  width: 25vw;
  border-width: 1px;
  border-color: rgba(255,117,57,1);
  background-color: rgba(255,117,57,1);
  border-style: solid;
  `;
  
  const Rectangle16Stack = styled.div`
  width: 50vw;
  height: 9px;
  position: relative;
  `;
  
  const Rectangle18 = styled.div`
  height: 9px;
  width: 25vw;
  left: 50vw;
  border-width: 1px;
  border-color: rgba(255,117,57,1);
  background-color: rgba(255,255,255,1);
  border-style: solid;
  `;
  
  const Rectangle15Row = styled.div`
  height: 9px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  `;

export default QuestionsList;