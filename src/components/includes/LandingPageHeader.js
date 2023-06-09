import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NetflixLogo2 from "../assets/Netflix_Logo_PMS.png"



function LandingPageHeader() {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        window.addEventListener("scroll", changeBackground)
      })
  return (
    <MainContainer bgcolor={navbar? "black": "transparent"}>
        <Wrapper>
            <LeftSideDiv>
                <NetflixLogoDiv>
                    <NetflixLogo src={NetflixLogo2} alt="logo" />

                </NetflixLogoDiv>
            </LeftSideDiv>
            <RightSideDiv>
                <LanguageDiv>
                    <SelectList name="language">
                        <Option value="english">English</Option>
                        <Option value="malayalam">malayalam</Option>
                        <Option value="hindi">hindi</Option>
                    </SelectList>
                </LanguageDiv>
                <SignInDiv>
                    <SignInButton><Connect to="/sign-in">Sign In</Connect></SignInButton>
                </SignInDiv>
            </RightSideDiv>
        </Wrapper>
    </MainContainer>
  )
}

const MainContainer = styled.header`
    /* display: flex; */
    /* justify-content: center; */
    width: 100%;
    font-family: "NetflixSans-Regular";
    background-color: ${({bgcolor}) => bgcolor};
    /* background-color: white; */
    position: fixed;
    z-index: 20;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;
const LeftSideDiv = styled.div``;
const NetflixLogoDiv = styled.div`
    width: 150px;
`;
const NetflixLogo = styled.img`
    width: 100%;
    display: block;
`;
const RightSideDiv = styled.div`
    display: flex;
    align-items: center;
`;
const LanguageDiv = styled.div`
    margin-right: 10px;
`;
const SignInDiv = styled.div``;
const SignInButton = styled.button`
    background-color: #E50914;
    border: none;
    padding: 5px;
    font-size: 20px;
    color: white;
    border-radius: 5px;
`;

const Connect = styled(NavLink)`
    text-decoration: none;
    color: white;
`;


const SelectList = styled.select`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-color: white;
    border-radius: 6px;
    color: white;
`;
const Option = styled.option``;









export default LandingPageHeader