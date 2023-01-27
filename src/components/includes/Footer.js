import React from "react";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstaIcon from "../assets/icons/insta.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

import styled from "styled-components";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <MainContainer>
      <Wrapper>
        <IconsDiv>
          <IconWrapper>
            <Linka to={"#"}>
              <Icon src={FacebookIcon} alt="facebook" />
            </Linka>
            <Linka to={"#"}>
              <Icon src={InstaIcon} alt="insta" />
            </Linka>
            <Linka to={"#"}>
              <Icon src={TwitterIcon} alt="twitter" />
            </Linka>
            <Linka to={"#"}>
              <Icon src={YoutubeIcon} alt="youtube" />
            </Linka>
          </IconWrapper>
        </IconsDiv>
        <FooterContent>
          <UlOne>
            <Li>
              <Linka to={"#"}>Audio Description</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Help Centre</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Gift Cards</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Media Centre</Linka>
            </Li>
          </UlOne>
          <UlTwo>
            <Li>
              <Linka to={"#"}>Investor Relations</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Jobs</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Terms of Use</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Privacy</Linka>
            </Li>
          </UlTwo>
          <UlThree>
            <Li>
              <Linka to={"#"}>Legal Notices</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Cookie Preferences</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Corporate Information</Linka>
            </Li>
            <Li>
              <Linka to={"#"}>Contact Us</Linka>
            </Li>
          </UlThree>
        </FooterContent>
        <FooterBottom>
          <ServiceCode>
            <ButtonServiceCode>Service Code</ButtonServiceCode>
          </ServiceCode>
          <CopyRight>
            <ParaGraph>©️ 1997-2023 Netflix, Inc.</ParaGraph>
          </CopyRight>
        </FooterBottom>
      </Wrapper>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141414;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  width: 60%;
  padding: 0 30px;
`;
const IconsDiv = styled.div`
  
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
`;
const Icon = styled.img``;
const FooterContent = styled.div``;
const UlOne = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;
const UlTwo = styled(UlOne)``;
const UlThree = styled(UlOne)``;
const Li = styled.li``;

const Linka = styled(Link)`
  color: #808080;
  text-decoration: none;
  font-family: "NetflixSans-Regular";
  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div``;
const ServiceCode = styled.div``;
const ButtonServiceCode = styled.button`
  background-color: transparent;
  color: #808080;
  width: 150px;
  height: 40px;
  border: 1px solid #808080;
  font-family: "NetflixSans-Regular";
  &:hover {
    color: white;
  }
`;
const CopyRight = styled.div``;
const ParaGraph = styled.p`
  color: #808080;
  font-family: "NetflixSans-Light";
`;

export default Footer;
