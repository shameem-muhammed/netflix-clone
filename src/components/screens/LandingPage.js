import React, { useState } from "react";
import styled from "styled-components";
import LandingPageHeader from "../includes/LandingPageHeader";
import Hero from "../assets/landing-hero.png";
import Arrow from "../assets/arrow.svg";
import HeroSub from "../assets/hero-sub.png";
import HeroSub2 from "../assets/hero-sub-2.png";
import HeroSub4 from "../assets/hero-sub-4.png";
import PlusIcon from "../assets/plus-icon.svg";
import Footer from "../includes/Footer";
import { useNavigate } from "react-router-dom";

// import { MainContainer } from './Home'

function LandingPage() {
  const [email, setEmail] = useState("")

  let navigate = useNavigate()

  let handleSubmit = () => {
    navigate(`/sign-in/${email}`)
  }
  return (
    <>
      <LandingPageHeader />
      <MainContainer>
        <HeroSection>
          <Wrapper>
            <HeroTitle>
              <Title>Unlimited movies, TV shows and more.</Title>
              <Slog>Watch anywhere. Cancel anytime.</Slog>
            </HeroTitle>
            <HeroInput>
              <Label>
                Ready to watch? Enter your email to create or restart your
                membership.
              </Label>
              <Form onSubmit={handleSubmit}>
                <SubmitInput onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" />
                <SubmitButton type="submit">
                  Get Started
                  <Span>
                    <SpanImg src={Arrow} alt="arrow" />
                  </Span>
                </SubmitButton>
              </Form>
            </HeroInput>
          </Wrapper>
        </HeroSection>
      </MainContainer>
      <HeroSubSection>
        <SubList>
          <SubItem>
            <DetailSec>
              <DetailHead>Enjoy on your TV.</DetailHead>
              <DetailSubHead>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </DetailSubHead>
            </DetailSec>
            <SubHero>
              <HeroSubImg src={HeroSub} alt="Hero-sub" />
            </SubHero>
          </SubItem>
          <SubItem>
            <DetailSec>
              <DetailHead>Download your shows to watch offline.</DetailHead>
              <DetailSubHead>
                Save your favorites easily and always have something to watch.
              </DetailSubHead>
            </DetailSec>
            <SubHero>
              <HeroSubImg src={HeroSub2} alt="Hero-sub" />
            </SubHero>
          </SubItem>
          <SubItem>
            <DetailSec>
              <DetailHead>Watch everywhere.</DetailHead>
              <DetailSubHead>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </DetailSubHead>
            </DetailSec>
            <SubHero>
              <HeroSubImg src={HeroSub} alt="Hero-sub" />
            </SubHero>
          </SubItem>
          <SubItem>
            <DetailSec>
              <DetailHead>Create profiles for kids.</DetailHead>
              <DetailSubHead>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </DetailSubHead>
            </DetailSec>
            <SubHero>
              <HeroSubImg src={HeroSub4} alt="Hero-sub" />
            </SubHero>
          </SubItem>
        </SubList>
      </HeroSubSection>
      <FaqSection>
        <FaqWrapper>
          <FaqTitle>Frequently Asked Questions</FaqTitle>
          <FaqMainList>
            <FaqItem>
              <ItemTitle>What is Netflix?</ItemTitle>
              <PlusIconDiv>
                <Icon src={PlusIcon} alt="plus-icon" />
              </PlusIconDiv>
            </FaqItem>
            <FaqItem>
              <ItemTitle>How much does Netflix cost?</ItemTitle>
              <PlusIconDiv>
                <Icon src={PlusIcon} alt="plus-icon" />
              </PlusIconDiv>
            </FaqItem>
            <FaqItem>
              <ItemTitle>Where can I watch?</ItemTitle>
              <PlusIconDiv>
                <Icon src={PlusIcon} alt="plus-icon" />
              </PlusIconDiv>
            </FaqItem>
            <FaqItem>
              <ItemTitle>How do I cancel?</ItemTitle>
              <PlusIconDiv>
                <Icon src={PlusIcon} alt="plus-icon" />
              </PlusIconDiv>
            </FaqItem>
            <FaqItem>
              <ItemTitle>What can I watch on Netflix?</ItemTitle>
              <PlusIconDiv>
                <Icon src={PlusIcon} alt="plus-icon" />
              </PlusIconDiv>
            </FaqItem>
            <FaqItem>
              <ItemTitle>Is Netflix good for kids?</ItemTitle>
              <PlusIconDiv>
                <Icon src={PlusIcon} alt="plus-icon" />
              </PlusIconDiv>
            </FaqItem>
          </FaqMainList>
          <BottomInput>
            <Label>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Label>
            <Form action="home/">
              <SubmitInput type="email" placeholder="Email address" />
              <SubmitButtonBottom type="submit">
                Get Started
                <Span>
                  <SpanImg src={Arrow} alt="arrow" />
                </Span>
              </SubmitButtonBottom>
            </Form>
          </BottomInput>
        </FaqWrapper>
      </FaqSection>
      <Footer />
    </>
  );
}

const MainContainer = styled.section`
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 100px;
  /* height: 100vh; */
`;
const HeroSection = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  text-align: center;
`;
const HeroTitle = styled.div``;
const Title = styled.h1`
  color: white;
  font-size: 50px;
  width: 550px;
  margin: 0;
`;
const Slog = styled.h3`
  margin: 0;
  color: white;
`;
const Label = styled.h5`
  margin-top: 10px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

const SubmitInput = styled.input`
  padding: 0 10px 0 10px;
  border: none;
  width: 75%;
  height: 40px;
  &:focus {
    /* border: 10px solid black; */
    border: none;
  }
`;
const Span = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
  width: 10px;
`;
const SpanImg = styled.img`
  width: 100%;
  display: inline-block;
`;
const SubmitButton = styled.button`
  background-color: #e50914;
  border: none;
  color: white;
  font-size: 16px;
  width: calc(100% - 75%);
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;
const HeroInput = styled.div`
  /* width: 500px; */
`;

const HeroSubSection = styled.section`
  background-color: #000000;
  margin: 0;
`;
const SubList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SubItem = styled.li`
  display: flex;
  justify-content: space-around;
  color: white;
  border-top: 10px solid #222222;
  border-bottom: 5px solid #222222;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
const DetailSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DetailHead = styled.h2`
  font-size: 40px;
  width: 500px;
`;
const DetailSubHead = styled.p`
  font-size: 20px;
  width: 500px;
`;
const SubHero = styled.div``;
const HeroSubImg = styled.img``;

const FaqSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #000000;
`;
const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;
const FaqTitle = styled.h3`
  color: white;
  font-size: 30px;
`;
const FaqMainList = styled(SubList)`
  width: 100%;
`;
const FaqItem = styled.li`
  display: flex;
  color: white;
  /* width: 100%; */
  background-color: #303030;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 5px;
`;
const ItemTitle = styled.p``;
const PlusIconDiv = styled.div`
  width: 25px;
`;
const Icon = styled.img`
  width: 100%;
  display: block;
`;

const BottomInput = styled.div`
padding-top: 10px;
padding-bottom: 50px;
`;

const SubmitButtonBottom = styled(SubmitButton)`
  padding-left: 10px;
  padding-right: 0;
  font-size: 13px;
`;

export default LandingPage;
