import { styled } from "styled-components";

export const SmallLink = styled.a`
    background-color: rgb(${props=> props.theme.colors.primary});
    color: rgb(${props=> props.theme.colors.secondary});
    padding: 5px 8px;
    font-size: 0.8rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;

    &:hover
    {
        color: rgb(${props=> props.theme.colors.primary});
        background-color: rgb(${props=> props.theme.colors.secondary});
    }
`

export default SmallLink