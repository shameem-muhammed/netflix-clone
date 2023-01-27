import React, { useEffect, useState } from 'react'
import NetflixLogo from "../assets/netflix-logo.svg"
import NetflixLogo2 from "../assets/Netflix_Logo_PMS.png"
import LensIcon from "../assets/lens-icon.png"
import NotificationIcon from "../assets/notification-icon.png"
import ProfileImg from "../assets/ProfileIMG.png"
import DropdownIcon from "../assets/dropdown.png"
import ManageProfileIcon from "../assets/icons/profile.svg";
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [navbar, setNavbar] = useState(false)
    const [hover, setHover] = useState(false)
    const [hoverTwo, setHoverTwo] = useState(false)

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
    <HeaderSec bgcolor={navbar? "black": "transparent"}>
        <Wrapper>
            <LeftSide>
                <Ul>
                    <HeaderLi>
                        <LogoDiv>
                            <Logo src={NetflixLogo2} alt="logo" />
                        </LogoDiv>
                    </HeaderLi>
                    <HeaderLi>
                        <NavLink className={({isActive}) => isActive ? "active": "not-active"} to={"/home"}>Home</NavLink>
                    </HeaderLi>
                    <HeaderLi>
                        <NavLink className={({isActive}) => isActive ? "active": "not-active"} to={"/show"}>Tv Shows</NavLink>
                    </HeaderLi>
                    <HeaderLi>
                        <NavLink className={({isActive}) => isActive ? "active": "not-active"} to={"/movies"}>Movies</NavLink>
                    </HeaderLi>
                    <HeaderLi>
                        <NavLink className={({isActive}) => isActive ? "active": "not-active"} to={"/new-popular"}>New & Popular</NavLink>
                    </HeaderLi>
                    <HeaderLi>
                        <NavLink className={({isActive}) => isActive ? "active": "not-active"} to={"/my-list"}>My List</NavLink>
                    </HeaderLi>
                    <HeaderLi>
                        <NavLink className={({isActive}) => isActive ? "active": "not-active"} to={"/browse-by-launguage"}>Browse by Languages</NavLink>
                    </HeaderLi>
                </Ul>
            </LeftSide>
            <RightSide width={hover? "300px": ""} >
                <Ul>
                    <HeaderLi>
                        <LogoLens >
                            <WhiteLensIcon condition={hover? "none": ""} onClick={(e) => e.preventDefault(hover? setHover(false): setHover(true))} src={LensIcon} alt="lensicon" />
                            <LogoLenImgDiv className='slide-left' condition={hover? "": "none"}>
                                <BlackLensIcon onClick={(e) => e.preventDefault(hover? setHover(false): setHover(true))} src={LensIcon} alt="lensicon" />
                                <SearchInput placeholder='Title, People, Genres' type="text" />
                            </LogoLenImgDiv>
                            
                        </LogoLens>
                    </HeaderLi>
                    <HeaderLi>
                        <NotificationIconDiv>
                            <Logo src={NotificationIcon} alt="notification-icon" />
                        </NotificationIconDiv>
                    </HeaderLi>
                    <HeaderLi>
                        <DivProfile onMouseEnter={() => setHoverTwo(true)} >
                            <ProfileLogo>
                                <Logo src={ProfileImg} alt='profile-img' />
                            </ProfileLogo>
                            <DropdownDiv condition={hoverTwo? "180deg": ""}>
                                <Logo src={DropdownIcon} alt="dropdown" />
                            </DropdownDiv>
                        </DivProfile>
                        { hoverTwo && 
                        <ProfileDetail onMouseLeave={() => setHoverTwo(false)}>
                            <DropUpUconDiv>
                                <DropDownIcon src={DropdownIcon} alt="dropup" />
                            </DropUpUconDiv>
                            <ProfileList>
                                <ProfileItem>
                                    <ProfileLogo>
                                        <Logo src={ProfileImg} alt="profile" />
                                    </ProfileLogo>
                                    <ProfileName>Ambady</ProfileName>
                                </ProfileItem>
                                <ProfileItem>
                                    <ProfileLogo>
                                        <Logo src={ProfileImg} alt="profile" />
                                    </ProfileLogo>
                                    <ProfileName>Shameem</ProfileName>
                                </ProfileItem>
                                <ProfileItem>
                                    <ProfileLogo>
                                        <Logo src={ProfileImg} alt="profile" />
                                    </ProfileLogo>
                                    <ProfileName>Tenson</ProfileName>
                                </ProfileItem>
                                <ProfileItem>
                                    <ProfileLogo>
                                        <Logo src={ProfileImg} alt="profile" />
                                    </ProfileLogo>
                                    <ProfileName>Rohith</ProfileName>
                                </ProfileItem>
                            </ProfileList>
                            <ProfileSettingsList>
                                <SettingItem>
                                    <SettingIcon>
                                        <Logo src={ManageProfileIcon} alt="Icon" />
                                    </SettingIcon>
                                    <SettingName>Manage Profiles</SettingName>
                                </SettingItem>
                                <SettingItem>
                                    <SettingIcon>
                                        <Logo src={ManageProfileIcon} alt="Icon" />
                                    </SettingIcon>
                                    <SettingName>Exit Profile</SettingName>
                                </SettingItem>
                                <SettingItem>
                                    <SettingIcon>
                                        <Logo src={ManageProfileIcon} alt="Icon" />
                                    </SettingIcon>
                                    <SettingName>Transfer Profile</SettingName>
                                </SettingItem>
                                <SettingItem>
                                    <SettingIcon>
                                        <Logo src={ManageProfileIcon} alt="Icon" />
                                    </SettingIcon>
                                    <SettingName>Account</SettingName>
                                </SettingItem>
                                <SettingItem>
                                    <SettingIcon>
                                        <Logo src={ManageProfileIcon} alt="Icon" />
                                    </SettingIcon>
                                    <SettingName>Help Centre</SettingName>
                                </SettingItem>
                            </ProfileSettingsList>
                        </ProfileDetail>}
                    </HeaderLi>
                </Ul>
            </RightSide>
        </Wrapper>
    </HeaderSec>
  )
}

const HeaderSec = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: "NetflixSans-Regular";
    background-color: ${({bgcolor}) => bgcolor};
    /* background-color: white; */
    position: fixed;
    z-index: 20;



`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;


`;
const LeftSide = styled.div`
    width: 700px;
`;
const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    height: 50px;
`;
const HeaderLi = styled.li`
    &:nth-child(3) {
        position: relative;
    }
`;
const LogoDiv = styled.div`
    width: 120px;
`;
const Logo = styled.img`    
    display: block;
    width: 100%;
`;


const LogoLenImgDiv = styled.div`
    display: ${({condition}) => condition};
    position: relative;
    /* width: 0; */
`;


const RightSide = styled.div`
    display: flex;
    align-items: center;

`;
const LogoLens = styled.div`
    /* width: 200px; */
    margin-right: 10px;
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    
`;

const BlackLensIcon = styled(Logo)`
    position: absolute;
    /* margin-right: 10px; */
    width: 20px;
    padding: 10px;
    /* margin-right: 10px; */

`;

const WhiteLensIcon = styled(Logo)`
    width: 20px;
    display: ${({condition}) => condition};
`;

const SearchInput = styled.input`
    padding: 10px 10px 10px 40px;
    border-color: white;
    border-width: 1px;
    border-style: solid;
    background-color: black;
    /* border-radius: 10px; */
    width: 200px;
    color: white;
    &::placeholder {
        color: white;
    }
    
`;
const ProfileLogo = styled.div`
    margin-right: 10px;
`;
const DropdownDiv = styled.div`
    transform: rotate(${({condition}) => condition});
`;
const NotificationIconDiv = styled.div`
    margin-right: 20px;
    cursor: pointer;

`;
const DivProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    padding-right: 10px;
    cursor: pointer;

`;


const ProfileDetail = styled.div`
    width: 200px;
    /* height: 300px; */
    position: absolute;
    background-color: black;
    top: 60px;
    /* right: 30px; */
    left: -170px;
    /* display: none; */
`;

const DropUpUconDiv = styled.div`
    position: absolute;
    top: -13px;
    /* left: -10px; */
    display: flex;
    justify-content: flex-end;
    right: 10px;
`;

const DropDownIcon = styled(Logo)`
    width: 15px;
    transform: rotate(180deg);
`;

const ProfileList = styled.ul`
    padding: 10px;
`;
const ProfileItem = styled.li`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    color: white;
    font-size: 15px;
`;
const ProfileName = styled.p`
    margin: 0 0 0 10px;
    padding: 10px;

`;

const ProfileSettingsList = styled(ProfileList)``;
const SettingItem = styled(ProfileItem)``;
const SettingIcon = styled(ProfileLogo)`
    width: 30px;
`;
const SettingName = styled(ProfileName)`
    font-size: 13px;
`;


export default Header