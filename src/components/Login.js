import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <Container>
          <IPhone11ProX1BackgroundMask>
            <IntroBannerStackStack>
              <IntroBannerStack>
                <IntroBanner>
                  <Rectangle1>
                    <WelcomeTo>Welcome to</WelcomeTo>
                    <Intro>INTRO</Intro>
                  </Rectangle1>
                </IntroBanner>
                {/* <Clipart32890311>
                  <Clipart3289031
                    src="../images/paper.png"
                  ></Clipart3289031>
                </Clipart32890311> */}
              </IntroBannerStack>
              <Rectangle8></Rectangle8>
              <Rectangle9></Rectangle9>
            </IntroBannerStackStack>
            <GetHired>Find Your Fit
            </GetHired>
            <WeMakeItEasierForSkilledStudentsToFindSkilledJobs>
              We make it easier for skilled students to find skilled jobs
            </WeMakeItEasierForSkilledStudentsToFindSkilledJobs>
            <StudentLogIn>
            <Link to="/home">
              <ButtonStack>

                <Button variant="contained" id="next-button">
                  <ButtonBackground>
                    <Rectangle10></Rectangle10>
                  </ButtonBackground>
                </Button>
              <LogInAsAStudent>Log in as a student</LogInAsAStudent>
              </ButtonStack>
              </Link>
            </StudentLogIn>
            <IntroSoftware2021>© Intro Software 2021</IntroSoftware2021>
          </IPhone11ProX1BackgroundMask>
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

    const IPhone11ProX1BackgroundMask = styled.div`
      height: 812px;
      width: 100vw;
      overflow: hidden;
      background-color: rgba(255,255,255,1);
      flex-direction: column;
      display: flex;
      align-self: center;
    `;

    const IntroBanner = styled.div`
      position: absolute;
      top: 0px;
      left: 0px;
      height: 443px;
      right: 0px;
      flex-direction: column;
      display: flex;
    `;

    const Rectangle1 = styled.div`
      height: 340px;
      width: 100vw;
      background-color: rgba(255,117,57,1);
      flex-direction: column;
      display: flex;
    `;

    const WelcomeTo = styled.span`
      font-family: Roboto;
      height: 41px;
      width: 100vw;
      color: rgba(255,255,255,1);
      font-size: 8vw;
      font-weight: 700;
      font-style: normal;
      margin-top: 61px;
      margin-left: 0px;
      text-align: center;
    `;

    const Intro = styled.span`
      font-family: Lora;
      height: 82px;
      width: 100vw;
      color: rgba(255,255,255,1);
      font-size: 16vw;
      font-weight: 400;
      font-style: normal;
      margin-top: 50px;
      text-align: center;
      margin-left: 0px;
    `;

    const Clipart32890311 = styled.div`
      position: absolute;
      top: 300px;
      left: 37px;
      height: 204px;
      width: 312px;
      background-color: transparent;
      flex-direction: column;
      display: flex;
    `;

    const Clipart3289031 = styled.img`
      background-color: transparent;
      flex: 1 1 0%;
      height: 100%;
      object-fit: cover;
      display: flex;
      flex-direction: column;
    `;

    const IntroBannerStack = styled.div`
      top: 0px;
      left: 0px;
      height: 340px;
      position: absolute;
      right: 0px;
    `;

    const Rectangle8 = styled.div`
      position: absolute;
      top: 370px;
      left: 0px;
      height: 30px;
      width: 100vw;
      background-color: rgba(28,118,143,1);
    `;

    const Rectangle9 = styled.div`
      position: absolute;
      top: 340px;
      left: 0px;
      height: 30px;
      width: 100vw;
      background-color: rgba(107,118,113,1);
    `;

    const IntroBannerStackStack = styled.div`
      height: 400px;
      position: relative;
    `;

    const GetHired = styled.span`
      font-family: Roboto;
      color: rgba(0,0,0,1);
      text-align: center;
      font-size: 5vw;
      font-weight: 700;
      font-style: normal;
      margin-top: 0px;
      margin-left: 0px;
    `;

    const WeMakeItEasierForSkilledStudentsToFindSkilledJobs = styled.span`
      font-family: Roboto;
      height: 42px;
      width: 100vw;
      color: rgba(84,84,84,1);
      text-align: center;
      font-size: 4vw;
      font-weight: 400;
      font-style: normal;
      margin-left: 0px;
    `;

    const StudentLogIn = styled.div`
      height: 49px;
      width: 100vw;
      flex-direction: column;
      display: flex;
      margin-top: 80px;
      margin-left: 0px;
    `;

    const Button = styled.div`
      position: absolute;
      top: 0px;
      left: 0px;
      height: 49px;
      width: 100%;
      flex-direction: column;
      display: flex;
    `;

    const ButtonBackground = styled.div`
      height: 49px;
      width: 100%;
      background-color: transparent;
      flex-direction: column;
      display: flex;
    `;

    const Rectangle10 = styled.div`
      height: 10vw;
      width: 50vw;
      margin-left: 25vw;
      border-top-left-radius: 117.5px;
      border-top-right-radius: 117.5px;
      border-bottom-right-radius: 117.5px;
      border-bottom-left-radius: 117.5px;
      background-color: rgba(255,117,57,1);
    `;

    const LogInAsAStudent = styled.span`
      font-family: Roboto;
      position: absolute;
      top: 6px;
      margin-left: 0vw;
      height: 40px;
      width: 100vw;
      color: rgba(255,255,255,1);
      text-align: center;
      font-size: 4vw;
      font-weight: 400;
      font-style: normal;
    `;

    const ButtonStack = styled.div`
      width: 327px;
      height: 49px;
      position: relative;
    `;

    const IntroSoftware2021 = styled.span`
      font-family: Roboto;
      color: rgba(0,0,0,1);
      font-size: 2vw;
      font-weight: 400;
      font-style: normal;
      text-align: center;
      margin-top: 67px;
      margin-left: 0px;
    `;

export default Login;