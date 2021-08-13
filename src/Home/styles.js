import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
    padding-bottom: 25px;
`;

export const Logo = styled.img`
    width: 300px;
    height: 230px; 
    margin: 5px 0;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
    margin-right: 30px;
   }

`;
export const Map = styled.div`
    background-color: #666666;
    width: 500px;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular };
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
    font-weight: bold;
    line-height: 29px;
    margin-top: 10px;
`;

export const ModalTitle = styled.p`
   margin-bottom: 10px;
   letter-spacing: 0.11px;
   font-family: ${(props) => props.theme.fonts.regular};
   color: ${(props) => props.theme.colors.text};
   line-height: 29px;
   font-size: 24px;
   font-weight: bold;

`;

export const ModalContent = styled.p`
   margin-bottom: 10px;
   font-family: ${(props) => props.theme.fonts.regular};
   color: ${(props) => props.theme.colors.text};
   line-height: normal;
   font-size: 16px;
   font-weight: 19px;
`;


