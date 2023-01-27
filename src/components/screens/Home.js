import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as NextArrowSvg } from "../assets/icons/arrow-right.svg";
import { ReactComponent as PrevArrowSvg } from "../assets/icons/left-arrow.svg";

import Header from "../includes/Header";
import Footer from "../includes/Footer";


import axios from "axios";
import ReactLoading from "react-loading";

import { requests, imageUrl } from "../../Requests";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PlayIconImg from "../assets/icons/play-icon.svg";
import MoreInfoIcon from "../assets/icons/more-info.svg";
import Slider from "react-slick";

function Home() {
  const [hero, setHero] = useState([]);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [tvshow, setTvShow] = useState([]);
  const [movie, setMovie] = useState([]);
  const [contentRatingid, setContentRatingid] = useState();
  const [contentRating, setContentRating] = useState();
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState();



  let contentRatingApi = `https://api.themoviedb.org/3/tv/${contentRatingid}/content_ratings?api_key=84978fd752c50f59c9499f0987a2b212&language=en-US`;

  useEffect(() => {
    axios
      .get(requests.requestHero)
      .then(function (response) {
        let length = response.data.results.length;
        let random = Math.floor(Math.random() * length);

        setHero(response.data.results[random]);
        setContentRatingid(response.data.results[random].id);
        
      })
      .catch(function (error) {
        console.log(error);
      })
      


    axios
      .get(requests.requestNewReleases)
      .then(function (response) {
        setPopular(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios
      .get(requests.requestTrending)
      .then(function (response) {
        setTrending(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios
      .get(requests.requestTvShow)
      .then(function (response) {
        setTvShow(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });

    axios
      .get(requests.requestMovie)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      

      if (hero && popular && trending && tvshow && movie) {
        setLoading(true)

      } else {
        setLoading(false)
      }
  }, []);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: "transparent",
          width: "50px",
          height: "150px",
        }}
      >
        <NextArrowSvg
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            right: "0",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onClick}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "transparent",
          width: "50px",
          height: "150px",
        }}
      >
        <PrevArrowSvg
          className={className}
          style={{
            ...style,
            display: "flex",
            left: "0",
            zIndex: "1",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onClick}
        />
      </div>
    );
  }

  const settings = {
    className: "slider-set",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
    adaptiveHeight: true,
    infinite: true,
  };

  function RenderNewReleases() {
    const [active, setActive] = useState();

    return popular.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={imageUrl + item.backdrop_path}
          alt="thumnail"
        />
        {active == item.id && (
          <div className="hover-div">
            <h1>
              {item.original_name
                ? item.original_name
                : item.name || item.original_title}
            </h1>
          </div>
        )}
      </div>
    ));
  }

  function RenderTrnding() {
    const [active, setActive] = useState();

    return trending.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={imageUrl + item.backdrop_path}
          alt="thumnail"
        />
        {active == item.id && (
          <div className="hover-div">
            <h1>
              {item.original_name
                ? item.original_name
                : item.name || item.original_title}
            </h1>
          </div>
        )}
      </div>
    ));
  }

  function RenderTvshow() {
    const [active, setActive] = useState();

    return tvshow.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={`${imageUrl}${
            item.backdrop_path ? item.backdrop_path : item.poster_path
          }`}
          alt="thumnail"
        />
        {active == item.id && (
          <div className="hover-div">
            <h1>
              {item.original_name
                ? item.original_name
                : item.name || item.original_title}
            </h1>
          </div>
        )}
      </div>
    ));
  }

  function RenderMovie() {
    const [active, setActive] = useState();

    return movie.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={`${imageUrl}${
            item.backdrop_path ? item.backdrop_path : item.poster_path
          }`}
          alt="thumnail"
        />
        {active == item.id && (
          <div className="hover-div">
            <h1>
              {item.original_name
                ? item.original_name
                : item.name || item.original_title}
            </h1>
          </div>
        )}
      </div>
    ));
  }

  return loading? (
    <>
    <Header />
    <MainContainer>
      <Wrapper>
        <HeroImageDiv bgImage={`${imageUrl}${hero.poster_path}`}>
          <HeroContent>
            <HeroDetails>
              <Title>
                {hero.original_title
                  ? hero.original_title
                  : hero.orginal_name || hero.name}
              </Title>
              <Description>{hero.overview}</Description>
              <InfoDiv>
                <PlayButton>
                  <PlayIcon src={PlayIconImg} alt="play-icon" />
                  Play
                </PlayButton>
                <MoreInfoButton>
                  <InfoIcon src={MoreInfoIcon} alt="info-icon" />
                  More Info
                </MoreInfoButton>
              </InfoDiv>
            </HeroDetails>
            <CirtificateTag>
              <Cirtificate>
                {!contentRating ? "not rated" : contentRating}
              </Cirtificate>
            </CirtificateTag>
          </HeroContent>
          <NewSection>
            <SliderDiv>
              <NewTitle>New Releases</NewTitle>
              <Slider {...settings}>{RenderNewReleases()}</Slider>
            </SliderDiv>
          </NewSection>
        </HeroImageDiv>
        <SubSections>
          <NewSection>
            <SliderDiv>
              <NewTitle>Trending Now</NewTitle>
              <Slider {...settings}>{RenderTrnding()}</Slider>
            </SliderDiv>
          </NewSection>
          <NewSection>
            <SliderDiv>
              <NewTitle>Tv Shows</NewTitle>
              <Slider {...settings}>{RenderTvshow()}</Slider>
            </SliderDiv>
          </NewSection>
          <NewSection>
            <SliderDiv>
              <NewTitle>Movies</NewTitle>
              <Slider {...settings}>{RenderMovie()}</Slider>
            </SliderDiv>
          </NewSection>
        </SubSections>
      </Wrapper>
    </MainContainer>
    <Footer />
    </>

  ): (
    <div className="react-loader-div">
      <ReactLoading type="balls" color="#0000FF" 
        height={100} width={50} />
    </div>
  )
}

export const MainContainer = styled.section``;
export const Wrapper = styled.div``;
export const HeroImageDiv = styled.div`
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
  /* background-size: cover; */
  /* background-color: rgba(255, 255, 255, 0.5); */
  opacity: 0.8;
  /* height: 100vh; */
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;
export const HeroDetails = styled.div`
  padding-top: 250px;
  width: 500px;
  margin-left: 100px;
  color: white;
  z-index: 1;
`;

export const CirtificateTag = styled.div`
  color: white;
  margin-top: 450px;
  height: 40px;
  width: 100px;
  display: flex;
  border-left: 2px solid white;
  padding-left: 10px;
  align-items: center;
  background-color: #5b5a56;
`;
export const Cirtificate = styled.p`
  width: 100%;
`;
export const Title = styled.h1`
  margin: 0;
`;
export const Description = styled.p``;
export const InfoDiv = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;
export const PlayButton = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  width: 110px;
  border-radius: 8px;
  color: black;
  font-family: "NetflixSans-Medium";
  cursor: pointer;
  &:hover {
    background-color: #c8c7c5;
  }
`;
export const PlayIcon = styled.img``;
export const MoreInfoButton = styled(PlayButton)`
  width: 150px;
  background-color: #5b5a56;
  color: white;
  &:hover {
    background-color: #403b37;
  }
`;
export const InfoIcon = styled.img``;

export const NewSection = styled.div``;
export const SliderDiv = styled.div`
  /* padding: 30px 0 0; */
`;
export const NewTitle = styled.h3`
  padding-left: 30px;
  color: white;
  font-family: "NetflixSans-Medium";
  font-size: 20px;
  margin: 0 0 20px;
  padding-top: 30px;
`;

export const SubSections = styled.div`
  background-color: #141414;
  /* padding-top: 50px; */
`;

export default Home;
