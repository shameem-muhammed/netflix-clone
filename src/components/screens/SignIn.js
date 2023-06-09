import React, { useState, useContext } from "react";
import styled from "styled-components";
import NetflixLogo from "../assets/Netflix_Logo_PMS.png";
import SignInHero from "../assets/signin-hero.png"
import FaceebookLogo from "../assets/facebook-logo.svg"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";


function SignIn() {
    let {emailaddress} = useParams()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {updateUserData} = useContext(UserContext);

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        if (emailaddress) {
            setEmail(emailaddress)
        };
        axios
          .post("https://traveller.talrop.works/api/v1/auth/token/", {
            password: password,
            username: email,
          })
          .then(function (response) {
            console.log(response);
            let data = response.data;
            localStorage.setItem("user_data", JSON.stringify(data));
            updateUserData({ type: "login", payload: data });
            navigate("/")
          })
          .catch(function (error) {
            console.log(error.response);
            if (error.response.status == 401) {
                console.log("Error")
            }
          });
      };
  return (
    <MainContainer>
      <Header>
        <HeaderWrapper>
          <NetflixLogoDiv>
            <Img src={NetflixLogo} alt="logo" />
          </NetflixLogoDiv>
        </HeaderWrapper>
      </Header>
      <FormSection>
        <Wrapper>
            <FormTitle>Sign In</FormTitle>
            <Form onSubmit={handleSubmit}>
                <EmailInput type="email" placeholder="Enter your Email" value={emailaddress? emailaddress : email} onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <SignInBtn type="submit">Sign In</SignInBtn>
            </Form>
            <RemembermeDiv>
                <Rememberme>Remember me</Rememberme>
                <NeedHelp>Need help?</NeedHelp>
            </RemembermeDiv>
            <FormBottom>
                <FacebookLoginDiv>
                    <FacebookLogo>
                        <Img src={FaceebookLogo} alt="facebooklogo" />
                    </FacebookLogo>
                    <FacebookDescription>Login with Facebook</FacebookDescription>
                </FacebookLoginDiv>
                <NewtoNetflixDiv>
                    <NewTo>New to Netflix? <SignUpSpan>Sign up now.</SignUpSpan></NewTo>
                </NewtoNetflixDiv>
                <GoogleCaptcha>
                    <Description>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.<SpanLearnMore>Learn more.</SpanLearnMore>
                    </Description>
                </GoogleCaptcha>
            </FormBottom>
        </Wrapper>
      </FormSection>
    </MainContainer>
  );
}


const MainContainer = styled.section`
    background-image: url(${SignInHero});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000;
    /* height: 100vh; */
`;
const Header = styled.header``;
const HeaderWrapper = styled.div`
  display: flex;
`;
const NetflixLogoDiv = styled.div`
  width: 150px;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;

const FormSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;
const Wrapper = styled.div`
    width: 300px;
    padding: 20px 50px;
    background-color: rgba(0, 0, 0, 0.75);
`;
const FormTitle = styled.h3`
    color: white;
    font-size: 30px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const EmailInput = styled.input`
    padding: 15px;
    background-color: #333333;
    border: none;
    margin-bottom: 10px;
    border-radius: 7px;
`;
const PasswordInput = styled(EmailInput)`
    margin-bottom: 20px;
`;
const SignInBtn = styled.button`
    padding: 15px;
    background-color: #E50914;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 7px;

`;
const RemembermeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color:#B3B3B3;
`;
const Rememberme = styled.p``;
const NeedHelp = styled.p``;
const FormBottom = styled.div``;
const FacebookLoginDiv = styled.div`
    display: flex;
    align-items: center;
    color: #737373;
`;
const FacebookLogo = styled.div`
    width: 20px;
    margin-right: 10px;
`;
const NewtoNetflixDiv = styled.div`
    color: #737373;
`;
const NewTo = styled.p``;
const GoogleCaptcha = styled.div`
    color: #8C8C8C;
`;
const Description = styled.p``;
const SignUpSpan = styled.span`
    color: white;
`;
const SpanLearnMore = styled.span`
    color: #0071EB;
`;

const FacebookDescription = styled.p``;



















export default SignIn;
