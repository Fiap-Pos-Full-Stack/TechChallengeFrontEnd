import { styled } from "styled-components";

export const BigLink = styled.a`
    background-color: rgb(${props=> props.theme.colors.primary});
    color: rgb(${props=> props.theme.colors.secondary});
    padding: 8px 8px;
    font-size: 1.6rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;

    &:hover
    {
        color: rgb(${props=> props.theme.colors.primary});
        background-color:rgb( ${props=> props.theme.colors.secondary});
    }
`

export default BigLink