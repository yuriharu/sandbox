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

//   return (
//     <FormGroup className="CheckGroup">
//       <FormControlLabel
//         control={<Checkbox checked={skills.Python} onChange={handleChange} name="Python" className="CheckItem" />}
//         label="Python"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.Java} onChange={handleChange} name="Java" className="CheckItem" />}
//         label="Java"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.JavaScript} onChange={handleChange} name="JavaScript" className="CheckItem" />}
//         label="JavaScript"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.HTML} onChange={handleChange} name="HTML" className="CheckItem" />}
//         label="HTML"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={skills.CSS} onChange={handleChange} name="CSS" className="CheckItem" />}
//         label="CSS"
//       />
//       <Link to="/analysis-check">
//         <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
//           Next
//         </Button>
//       </Link>
//     </FormGroup>
//   );
// }

// function CodingChecks() {
//   return (
//     <div>
//       <h2>Coding Skills</h2>
//       <Checks />
//     </div>
//   );
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
      <Coding>CODING</Coding>
      <JavaScript>
        <ItemRow>
          <Item>JavaScript</Item>
          <FormControlLabel
        control={<Checkbox checked={skills.Python} onChange={handleChange} name="Python" className="Button" />}
        />
        </ItemRow>
      </JavaScript>
      <Html>
        <Item1Row>
          <Item1>HTML</Item1>
          <Button2>
            <ButtonOverlay></ButtonOverlay>
          </Button2>
        </Item1Row>
      </Html>
      <Css>
        <Item2Row>
          <Item2>CSS</Item2>
          <Button3>
            <ButtonOverlay></ButtonOverlay>
          </Button3>
        </Item2Row>
      </Css>
      <Java>
        <Item3Row>
          <Item3>Java</Item3>
          <Button4>
            <ButtonOverlay></ButtonOverlay>
          </Button4>
        </Item3Row>
      </Java>
      <Python>
        <Item4Row>
          <Item4>Python</Item4>
          <Button5>
            <ButtonOverlay></ButtonOverlay>
          </Button5>
        </Item4Row>
      </Python>
      <Sql>
        <Item5Row>
          <Item5>SQL</Item5>
          <Button6>
            <ButtonOverlay></ButtonOverlay>
          </Button6>
        </Item5Row>
      </Sql>
      <MongoDb>
        <Item6Row>
          <Item6>MongoDB</Item6>
          <Button7>
            <ButtonOverlay></ButtonOverlay>
          </Button7>
        </Item6Row>
      </MongoDb>
      <Paginate>
        <Rectangle13>
          <Next>Next</Next>
        </Rectangle13>
      </Paginate>
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
width: 375px;
background-color: rgba(107,118,113,1);
`;

const Rectangle11 = styled.div`
height: 47px;
width: 375px;
background-color: rgba(28,118,143,1);
flex-direction: column;
display: flex;
`;

const WhatSkillsDoYouHave = styled.span`
font-family: Roboto;
color: rgba(255,255,255,1);
text-align: center;
font-size: 24px;
font-weight: 400;
font-style: normal;
margin-top: 13px;
margin-left: 53px;
`;

const Coding = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
margin-top: 33px;
margin-left: 144px;
`;

const JavaScript = styled.div`
height: 43px;
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 118px;
margin-top: 6px;
border-style: solid;
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
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item1 = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button2 = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 166px;
margin-top: 6px;
border-style: solid;
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
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item2 = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button3 = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 187px;
margin-top: 6px;
border-style: solid;
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
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item3 = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button4 = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 180px;
margin-top: 6px;
border-style: solid;
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
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item4 = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button5 = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 156px;
margin-top: 6px;
border-style: solid;
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
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item5 = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button6 = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 187px;
margin-top: 6px;
border-style: solid;
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
width: 271px;
flex-direction: row;
display: flex;
margin-top: 16px;
margin-left: 52px;
`;

const Item6 = styled.span`
font-family: Roboto;
color: rgba(0,0,0,1);
font-size: 24px;
font-weight: 400;
font-style: normal;
`;

const Button7 = styled.div`
height: 18px;
width: 18px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: transparent;
margin-left: 125px;
margin-top: 6px;
border-style: solid;
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
width: 327px;
flex-direction: column;
display: flex;
margin-top: 25px;
margin-left: 24px;
`;

const Rectangle13 = styled.div`
height: 49px;
width: 327px;
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
margin-top: 10px;
margin-left: 141px;
`;

const ProgressBar = styled.div`
height: 9px;
width: 393px;
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
width: 99px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: rgba(255,117,57,1);
border-style: solid;
`;

const Rectangle16 = styled.div`
position: absolute;
top: 0px;
left: 0px;
height: 9px;
width: 99px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: rgba(255,255,255,1);
border-style: solid;
`;

const Rectangle17 = styled.div`
position: absolute;
top: 0px;
left: 98px;
height: 9px;
width: 99px;
border-width: 1px;
border-color: rgba(255,117,57,1);
background-color: rgba(255,255,255,1);
border-style: solid;
`;

const Rectangle16Stack = styled.div`
width: 197px;
height: 9px;
position: relative;
`;

const Rectangle18 = styled.div`
height: 9px;
width: 97px;
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
