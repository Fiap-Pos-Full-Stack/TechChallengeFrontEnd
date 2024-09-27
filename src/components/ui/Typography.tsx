import { styled } from "styled-components";

export const Title = styled.h1`
    font-weight: 400;
    line-height: 40px;
    font-size: 3rem;
    margin: 10px 0;
    letter-spacing: 0.1em; 
    text-align: left;
`
export const SubTitle = styled.h2`
    font-weight: 400;
    line-height: 40px;
    font-size: 2rem;
    margin: 8px 0;
    letter-spacing: 0.1em; 
    text-align: left;
`

export const SubSubTitle = styled.h3`
    font-weight: 400;
    line-height: 40px;
    font-size: 1.4rem;
    margin: 4px 0;
    letter-spacing: 0.1em; 
    text-align: left;
`
export const SubSubSubTitle = styled.h4`
    font-weight: 400;
    line-height: 40px;
    font-size: 1.0rem;
    margin: 4px 0;
    letter-spacing: 0.1em; 
    text-align: left;
`

export const Paragraph = styled.p`
    font-size:1rem;
    color: rgb(${props=> props.theme.colors.black},0.7);
    line-height: 1.8rem;
`