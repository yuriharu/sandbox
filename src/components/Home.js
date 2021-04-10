import './Home.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'

/******** Material UI ***************************/
import clsx from 'clsx';
//import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled, { css } from "styled-components";
import Line1 from "../components/Line1";
import Ellipse12 from "../components/Ellipse12";

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

function Home() {
    const classes = useStyles();
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const next = async () => {
        Const.ClearDuplicate();

        if (name === "") return;
        let identity = name.replace(" ", ""); //is name the identity?
        const { data, status } = await axios.get(Const.EndPoint + "?q=identity:" + identity);
        if (status === 200 && data.length === 0) {
            const newPerson = { identity: identity };
            const { data, status } = axios.post(Const.EndPoint + "/" + identity, newPerson);
            alert("You are new!");
        } else {
            alert("You already exist!")
        }

        localStorage.setItem("currentId", identity);
    };

    // return (
    //     <div>
    //         <h1>Welcome to Intro!</h1>
    //         <TextField
    //             label="Your Name"
    //             id="name"
    //             className={clsx(classes.margin, classes.textField)}
    //             InputProps={{
    //                 startAdornment: <InputAdornment position="start"></InputAdornment>,
    //             }}
    //             value={name}
    //             onChange={handleChangeName}
    //         />
    //         <Link to="/coding-check">
    //             <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
    //                 Next
    //             </Button>
    //         </Link>
    //     </div>
    // );
    return (
        <Container>
          <StudentInputFormBackgroundMask>
            <Rectangle9>
              <MakeYourIntroduction>Make your Introduction</MakeYourIntroduction>
            </Rectangle9>
            <Rectangle101></Rectangle101>
            <Rectangle11>
              <TellUsAboutYourself>Tell us about yourself</TellUsAboutYourself>
            </Rectangle11>
            <InputFieldStack>
              <InputField>
                <TitleText>Name</TitleText>
                <Rectangle12>
                  <TextInput 
                    placeholder="first and last" 
                    label="Your Name"
                    id="name"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    onChange={handleChangeName}>
                    </TextInput>
                </Rectangle12>
              </InputField>
              <Style1>*</Style1>
            </InputFieldStack>
            <InputField1Stack>
              <InputField1>
                <TitleText1>Email Address</TitleText1>
                <Rectangle121>
                  <TextInput2 placeholder="example@email.com"></TextInput2>
                </Rectangle121>
              </InputField1>
              <Style2>*</Style2>
            </InputField1Stack>
            <InputField2Stack>
              <InputField2>
                <TitleText2>Password</TitleText2>
                <Rectangle122>
                  <TextInput3 placeholder="abc123"></TextInput3>
                </Rectangle122>
              </InputField2>
              <Style3>*</Style3>
            </InputField2Stack>
            <Link to="/coding-check">
            <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
              <Rectangle10>
                <Register1>Register</Register1>
              </Rectangle10>
            </Button>
            </Link>
            <EmployerLogIn>
              <BeenHereBeforeLogInStack>
                <BeenHereBeforeLogIn>Been here before? Log in</BeenHereBeforeLogIn>
                <Line1
                  style={{
                    position: "absolute",
                    top: 21,
                    left: 50,
                    height: 1,
                    width: 202,
                    backgroundColor: "transparent"
                  }}
                ></Line1>
              </BeenHereBeforeLogInStack>
            </EmployerLogIn>
            <Link to="/login">
            <BackButton>
              <Ellipse12Stack>
                <Ellipse12
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    right: 0,
                    bottom: 0
                  }}
                ></Ellipse12>
                <Style>&lt;</Style>
              </Ellipse12Stack>
            </BackButton>
            </Link>
          </StudentInputFormBackgroundMask>
        </Container>
      );
    }
    
    const Container = styled.div`
      display: flex;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    `;
    
    const StudentInputFormBackgroundMask = styled.div`
      height: 812px;
      width: 100vw;
      overflow: hidden;
      background-color: rgba(255,255,255,1);
      flex-direction: column;
      display: flex;
      align-self: center;
    `;
    
    const Rectangle9 = styled.div`
      height: 118px;
      width: 100vw;
      background-color: rgba(255,117,57,1);
      flex-direction: column;
      display: flex;
    `;
    
    const MakeYourIntroduction = styled.span`
      font-family: Roboto;
      color: rgba(255,255,255,1);
      text-align: center;
      font-size: 8vw;
      font-weight: 700;
      font-style: normal;
      margin-top: 20px;
      margin-left: 0px;
    `;
    
    const Rectangle101 = styled.div`
      height: 32px;
      width: 100vw;
      background-color: rgba(107,118,113,1);
    `;
    
    const Rectangle11 = styled.div`
      height: 50px;
      width: 100vw;
      background-color: rgba(28,118,143,1);
      flex-direction: column;
      display: flex;
    `;
    
    const TellUsAboutYourself = styled.span`
      font-family: Roboto;
      color: rgba(255,255,255,1);
      text-align: center;
      font-size: 5vw;
      font-weight: 400;
      font-style: normal;
      margin-top: 3px;
      margin-left: 0px;
    `;
    
    const InputField = styled.div`
      position: absolute;
      top: 0px;
      left: 0px;
      height: 83px;
      width: 100vw;
      flex-direction: column;
      display: flex;
    `;
    
    const TitleText = styled.span`
      font-family: Roboto;
      color: rgba(0,0,0,1);
      font-size: 4vw;
      font-weight: 400;
      font-style: normal;
      margin-top: 6px;
      margin-left: 24vw;
    `;
    
    const Rectangle12 = styled.div`
      height: 49px;
      width: 60vw;
      margin-left: 20vw;
      border-width: 1px;
      border-color: rgba(107,118,113,1);
      border-top-left-radius: 88.5px;
      border-top-right-radius: 88.5px;
      border-bottom-right-radius: 88.5px;
      border-bottom-left-radius: 88.5px;
      background-color: transparent;
      flex-direction: column;
      display: flex;
      border-style: solid;
    `;
    
    const TextInput = styled.input`
      font-family: Arial;
      color: rgba(0,0,0,1);
      font-size: 18px;
      width: 60vw;
      height: 21px;
      margin-top: 14px;
      margin-left: 20px;
      border: none;
      background: transparent;
    `;
    
    const Style1 = styled.span`
      font-family: Roboto;
      position: absolute;
      top: 0px;
      left: 37vw;
      color: rgba(255,117,57,1);
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
    `;
    
    const InputFieldStack = styled.div`
      width: 100vw;
      height: 83px;
      margin-top: 54px;
      margin-left: 0px;
      position: relative;
    `;
    
    const InputField1 = styled.div`
      position: absolute;
      top: 0px;
      left: 0px;
      height: 83px;
      width: 100vw;
      flex-direction: column;
      display: flex;
    `;
    
    const TitleText1 = styled.span`
      font-family: Roboto;
      color: rgba(0,0,0,1);
      font-size: 4vw;
      font-weight: 400;
      font-style: normal;
      margin-top: 6px;
      margin-left: 24vw;
    `;
    
    const Rectangle121 = styled.div`
      height: 49px;
      width: 60vw;
      margin-left: 20vw;
      border-width: 1px;
      border-color: rgba(107,118,113,1);
      border-top-left-radius: 88.5px;
      border-top-right-radius: 88.5px;
      border-bottom-right-radius: 88.5px;
      border-bottom-left-radius: 88.5px;
      background-color: transparent;
      flex-direction: column;
      display: flex;
      border-style: solid;
    `;
    
    const TextInput2 = styled.input`
      font-family: Arial;
      color: rgba(0,0,0,1);
      font-size: 18px;
      width: 60vw;
      height: 21px;
      margin-top: 14px;
      margin-left: 20px;
      border: none;
      background: transparent;
    `;
    
    const Style2 = styled.span`
      font-family: Roboto;
      position: absolute;
      top: 0px;
      left: 52vw;
      color: rgba(255,117,57,1);
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
    `;
    
    const InputField1Stack = styled.div`
      width: 327px;
      height: 83px;
      margin-top: 30px;
      margin-left: 0px;
      position: relative;
    `;
    
    const InputField2 = styled.div`
      position: absolute;
      top: 5px;
      left: 0px;
      height: 83px;
      width: 100vw;
      flex-direction: column;
      display: flex;
    `;
    
    const TitleText2 = styled.span`
      font-family: Roboto;
      color: rgba(0,0,0,1);
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
      margin-top: 6px;
      margin-left: 24vw;
    `;
    
    const Rectangle122 = styled.div`
      height: 49px;
      width: 60vw;
      margin-left: 20vw;
      border-width: 1px;
      border-color: rgba(107,118,113,1);
      border-top-left-radius: 88.5px;
      border-top-right-radius: 88.5px;
      border-bottom-right-radius: 88.5px;
      border-bottom-left-radius: 88.5px;
      background-color: transparent;
      flex-direction: column;
      display: flex;
      border-style: solid;
    `;
    
    const TextInput3 = styled.input`
      font-family: Arial;
      color: rgba(0,0,0,1);
      font-size: 18px;
      width: 60vw;
      height: 21px;
      margin-top: 14px;
      margin-left: 20px;
      border: none;
      background: transparent;
    `;
    
    const Style3 = styled.span`
      font-family: Roboto;
      position: absolute;
      top: 0px;
      left: 42vw;
      color: rgba(255,117,57,1);
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
    `;
    
    const InputField2Stack = styled.div`
      width: 327px;
      height: 88px;
      margin-top: 25px;
      margin-left: 0px;
      position: relative;
    `;
    
    const Button = styled.div`
      height: 49px;
      width: 327px;
      flex-direction: column;
      display: flex;
      margin-top: 39px;
      margin-left: 0px;
    `;
    
    const Rectangle10 = styled.div`
      height: 49px;
      width: 40vw;
      margin-left: 30vw;
      border-top-left-radius: 117.5px;
      border-top-right-radius: 117.5px;
      border-bottom-right-radius: 117.5px;
      border-bottom-left-radius: 117.5px;
      background-color: rgba(255,117,57,1);
      flex-direction: column;
      display: flex;
    `;
    
    const Register1 = styled.span`
      font-family: Roboto;
      color: rgba(255,255,255,1);
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
      margin-top: 5%;
      margin-left: 0;
    `;
    
    const EmployerLogIn = styled.div`
      height: 35px;
      width: 40vw;
      flex-direction: column;
      display: flex;
      margin-top: 16px;
      margin-left: 30vw;
    `;
    
    const BeenHereBeforeLogIn = styled.span`
      font-family: Roboto;
      position: absolute;
      top: 0px;
      left: 0px;
      color: rgba(255,117,57,1);
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      font-style: normal;
      right: 0px;
      bottom: 0px;
    `;
    
    const BeenHereBeforeLogInStack = styled.div`
      flex: 1 1 0%;
      position: relative;
      display: flex;
      flex-direction: column;
    `;
    
    const BackButton = styled.div`
      height: 50px;
      width: 50px;
      flex-direction: column;
      display: flex;
      margin-top: 37px;
      margin-left: 47vw;
    `;
    
    const Style = styled.span`
      font-family: Roboto;
      position: absolute;
      top: 5%;
      left: 17px;
      color: rgba(255,255,255,1);
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      font-style: normal;
    `;
    
    const Ellipse12Stack = styled.div`
      flex: 1 1 0%;
      position: relative;
      display: flex;
      flex-direction: column;
    `;
    
export default Home;