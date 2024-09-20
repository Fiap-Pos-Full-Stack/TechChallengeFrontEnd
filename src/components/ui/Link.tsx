import { styled } from "styled-components";

export const Link = styled.a`
    padding: 9px 8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: center;
    border-radius: 5px;
    background-color: ${props=> props.theme.linkBg};
    color: ${props=> props.theme.linkColor};
    cursor: pointer;
    transition: background-color 0.4s linear;

    &:hover
    {
        background-color: ${props=> props.theme.linkBg+"CC"};
    }

`