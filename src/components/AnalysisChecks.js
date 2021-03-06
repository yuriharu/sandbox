import './Checks.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'
import styled, { css } from "styled-components";
/******** Material UI ***************************/
//import Button from '@material-ui/core/Button';
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
    let identity = localStorage.getItem("currentId");
    const { data, status } = axios.post(Const.EndPoint + "/" + identity, skills);
    if (status === 200) {
      alert("data added");
    }
  }

//   return (
//     <FormGroup className="CheckGroup">
//       <FormControlLabel
//         control={<Checkbox checked={skills.Tableau} onChange={handleChange} name="Tableau" className="CheckItem" />}
//         label="Tableau"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.PowerBI} onChange={handleChange} name="PowerBI" className="CheckItem" />}
//         label="PowerBI"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.DataMining} onChange={handleChange} name="DataMining" className="CheckItem" />}
//         label="Data Mining"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.WebScraping} onChange={handleChange} name="WebScraping" className="CheckItem" />}
//         label="Web Scraping"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.Bloomberg} onChange={handleChange} name="Bloomberg" className="CheckItem" />}
//         label="Bloomberg"
//       />
//       <Link to="/marketing-check">
//         <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
//           Next
//         </Button>
//       </Link>
//     </FormGroup>
//   );
// }

// function AnalysisChecks() {
//     return (
//       <div>
//         <h2>Analysis Skills</h2>
//         <Checks />
//       </div>
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
      <Coding>ANALYTICS</Coding>
      <JavaScript>
        <ItemRow>
          <Item>Tableau</Item>
          </ItemRow>
          <Button>
          <FormControlLabel
          control={<Checkbox checked={skills.Tableau} onChange={handleChange} name="Tableau" className="CheckItem" />}
          />
          </Button>
      </JavaScript>
      <Css>
        <Item2Row>
          <Item2>PowerBI</Item2>
          </Item2Row>
          <Button3>
          <FormControlLabel
        control={<Checkbox checked={skills.PowerBI} onChange={handleChange} name="PowerBI" className="CheckItem" />}
      />
          </Button3>

      </Css>
      <Java>
        <Item3Row>
          <Item3>Data Mining</Item3>
          </Item3Row>
          <Button4>
        <FormControlLabel
        control={<Checkbox checked={skills.DataMining} onChange={handleChange} name="DataMining" className="CheckItem"/>}
        />
          </Button4>
      </Java>
      <Python>
        <Item4Row>
          <Item4>Web Scraping</Item4>
          </Item4Row>
          <Button5>
          <FormControlLabel
        control={<Checkbox checked={skills.WebScraping} onChange={handleChange} name="WebScraping" className="CheckItem"/>}
      />
          </Button5>

      </Python>
      <MongoDb>
        <Item6Row>
          <Item6>Bloomberg</Item6>
          </Item6Row>
          <Button7>
          <FormControlLabel
            control={<Checkbox checked={skills.Bloomberg} onChange={handleChange} name="Bloomberg" className="CheckItem"/>}
          />
          </Button7>
      </MongoDb>
      <Link to="/general-check" className="next-button">
      <Paginate>
        <Rectangle13>
          <Next renderAs="button" variant="contained" className="next-button" onClick={next}>Next</Next>
        </Rectangle13>
      </Paginate>
      </Link>
      <ProgressBar>
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
      </ProgressBar>
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
margin-top: 150px;
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

export default Checks;