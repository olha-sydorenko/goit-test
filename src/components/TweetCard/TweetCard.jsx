import React, { useEffect, useState } from "react"
import { Boy, Button, ButtonActive, Followers, Frame, Logo, Rectangle, Tweets } from "./TweetCard.styled";
import logo from 'images/Logo.png';
import rectangle from 'images/rectangle.png';
import boy from 'images/Boy.png';

export const TweetCard = () => {
//const [status, setStatus] = useState(false);
//const [followers, setFollowers] = useState(100500);


const getCurrentStatus = () => {
    return JSON.parse(localStorage.getItem('status')) ?? false;
  };
  const getFollowers = () => {
      return JSON.parse(localStorage.getItem('followers')) ?? 100500;
  };

  const [status, setStatus] = useState(getCurrentStatus);
  const [followers, setFollowers] = useState(getFollowers);

const handleButton = () => {
    setStatus((prevState) => !prevState);
    
  !status ? setFollowers((prevState) => prevState +1) : (setFollowers((prevState) => prevState - 1));
}


  useEffect(() => {
    localStorage.setItem('status', JSON.stringify(status));
    localStorage.setItem('followers', JSON.stringify(followers));
  }, [status, followers]);
  console.log(followers, status);

    return (
        <Frame>
            <Logo src={logo} alt="Logo"/>
            <Rectangle src={rectangle} alt="Rectangle"/>
            <Boy src={boy} alt="Boy"/>
            <Tweets>777 tweets</Tweets>
            <Followers>{followers.toLocaleString("en-US")} Followers</Followers>
            {!status ? (
            <Button type='button' onClick={handleButton}>Follow</Button>
        ) : (
            <ButtonActive type='button' onClick={handleButton}>Following</ButtonActive>
        )
    } 
        </Frame>
    )

}