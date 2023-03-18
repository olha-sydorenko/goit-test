import styled from 'styled-components';
import picture from 'images/picture.png';

export const Frame = styled.div`
position: relative;
width: 380px;
height: 460px;
border-radius: 20px;
background-image: url(${picture}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
background-repeat: no-repeat no-repeat;
background-position: top 28px left 36px, center;
background-size: 308 px 168px cover;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
` 
export const Logo = styled.img`
margin-top: 20px;
margin-left: 20px;
`
export const Rectangle = styled.img`
position: absolute;
top: 214px;
left: 0;
z-index: 1;
`
export const Boy = styled.img`
position: absolute;
top: 178px;
left: 150px;
z-index: 2;
`
export const Tweets = styled.p`
margin-top: 242px;
text-align: center;
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: 1.2;
text-transform: uppercase;
color: #EBD8FF;
`
export const Followers = styled.p`
margin-top: 16px;
margin-bottom: 26px;
text-align: center;
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: 1.2;
text-transform: uppercase;
color: #EBD8FF;
`
export const Button = styled.button`
width: 196px;
height: 50px;
display: block;
padding: 14px 28px;
margin: 0 auto;
border-radius: 10px;
background-color: #EBD8FF;
color: #373737; 
font-family: 'Montserrat';
font-weight: 600;
font-size: 18px;
line-height: 1.22;
text-transform: uppercase;
box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
`
export const ButtonActive = styled.button`
width: 196px;
height: 50px;
display: block;
padding: 14px 28px;
margin: 0 auto;
border-radius: 10px;
background-color: #5CD3A8;
color: #373737; 
font-family: 'Montserrat';
font-weight: 600;
font-size: 18px;
line-height: 1.22;
text-transform: uppercase;
box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
`