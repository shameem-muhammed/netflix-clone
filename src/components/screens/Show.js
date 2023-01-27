import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as NextArrowSvg } from "../assets/icons/arrow-right.svg";
import { ReactComponent as PrevArrowSvg } from "../assets/icons/left-arrow.svg";
import Header from "../includes/Header";
import Footer from "../includes/Footer";

import axios from "axios";
import ReactLoading from "react-loading";

import NotAvailble from "../assets/not-found.jpg"

import { requests, imageUrl } from "../../Requests";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PlayIconImg from "../assets/icons/play-icon.svg";
import MoreInfoIcon from "../assets/icons/more-info.svg";
import Slider from "react-slick";

import { 
  MainContainer,
  Wrapper,
  HeroImageDiv,
  HeroContent,
  HeroDetails,
  CirtificateTag,
  Cirtificate,
  Title,
  Description,
  InfoDiv,
  PlayButton,
  PlayIcon,
  MoreInfoButton,
  InfoIcon,
  NewSection,
  SliderDiv,
  NewTitle,
  SubSections
 } from './Home';



function Show() {
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
      .get(requests.requestTvLatest)
      .then(function (response) {
        let length = response.data.results.length;
        let random = Math.floor(Math.random() * length);

        setHero(response.data.results[random]);
        setContentRatingid(response.data.results[random].id);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      


    axios
      .get(requests.requestTvLatest)
      .then(function (response) {
        // handle success
        setPopular(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios
      .get(requests.requestTvPopular)
      .then(function (response) {
        // handle success
        setTrending(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios
      .get(requests.requestOnlyonNetflix)
      .then(function (response) {
        // handle success
        setTvShow(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios
      .get(requests.requestMovie)
      .then(function (response) {
        // handle success
        setMovie(response.data.results);
        // setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

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
  };

  function RenderNewReleases() {
    const [active, setActive] = useState();

    let newPopular = popular.filter((item) => item.backdrop_path !== null)

    return newPopular.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={`${item.backdrop_path? imageUrl + item.backdrop_path: NotAvailble}`}
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

  function RenderTrending() {
    const [active, setActive] = useState();
    let newTrending = popular.filter((item) => item.backdrop_path !== null)


    return newTrending.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={`${item.backdrop_path? imageUrl + item.backdrop_path: NotAvailble}`}
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

  function RenderOnlyonNetflix() {
    const [active, setActive] = useState();

    return tvshow.map((item) => (
      <div key={item.id}
        onMouseEnter={() => setActive(item.id)}
        onMouseLeave={() => setActive(null)}
        className="slider-div"
      >
        <img
          className="slider-img"
          src={`${item.backdrop_path? imageUrl + item.backdrop_path: NotAvailble}`}
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
          src={`${item.backdrop_path? imageUrl + item.backdrop_path: NotAvailble}`}
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
              <NewTitle>Popular Now</NewTitle>
              <Slider {...settings}>{RenderTrending()}</Slider>
            </SliderDiv>
          </NewSection>
          <NewSection>
            <SliderDiv>
              <NewTitle>Only on Netflix</NewTitle>
              <Slider {...settings}>{RenderOnlyonNetflix()}</Slider>
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

export default Show