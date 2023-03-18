import React, { useState } from "react"
import { Boy, Button, ButtonActive, Followers, Frame, Logo, Rectangle, Tweets } from "./TweetCard.styled";
import logo from 'images/Logo.png';
import rectangle from 'images/rectangle.png';
import boy from 'images/Boy.png';
export const TweetCard = () => {
const [isFollowing, setIsFollowing] = useState(false);
const [followers, setFollowers] = useState(100500);
const handleButton = () => {
    setIsFollowing((prevState) => !prevState);
    
  !isFollowing ? setFollowers((prevState) => prevState +1) : (setFollowers((prevState) => prevState - 1));
}
    return (
        <Frame>
            <Logo src={logo} alt="Logo"/>
            <Rectangle src={rectangle} alt="Rectangle"/>
            <Boy src={boy} alt="Boy"/>
            <Tweets>777 tweets</Tweets>
            <Followers>{followers} Followers</Followers>
            {!isFollowing ? (
            <Button type='button' onClick={handleButton}>Follow</Button>
        ) : (
            <ButtonActive type='button' onClick={handleButton}>Following</ButtonActive>
        )
    } 
        </Frame>
    )

}